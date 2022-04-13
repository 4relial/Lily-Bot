// https://github.com/salismazaya/whatsapp-bot
// Jika ingin mengubah / mengedit, mohon untuk tidak menghilangkan link github asli di dalam bot terimakasih ^_^

const fs = require("fs");
const messageHandler = require("./messageHandler.js");
const http = require("http");
const axios = require("axios");
const qrcode = require("qrcode");
const imageToBase64 = require('image-to-base64');
const
{
   ChatModification,
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
   GroupSettingChange
} = require("@adiwajshing/baileys")
const welcome = JSON.parse(fs.readFileSync('./lily/welcomer.json'));
const getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}

const conn = new WAConnection();
conn.maxCachedMessages = 15;

const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.end(fs.readFileSync("templates/index.html", "utf-8"));
	} else {
		res.end("404");
	}
})

const io = require("socket.io")(server);
io.on("connection", (socket) => {
	conn.on("qr", async (qr) => {
		const imgURI = await qrcode.toDataURL(qr);
		socket.emit("qr", imgURI);
	});

	conn.on("open", () => {
		socket.emit("connected");
	});
})


server.listen(process.env.PORT || 3000);

conn.on('group-participants-update', async (anu) => {
    try {
        const mdata = await conn.groupMetadata(anu.jid)
        console.log(anu)
        if (anu.action == 'add') {
            num = anu.participants[0]
            try {
                ppimg = await conn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
			imageToBase64(ppimg) // Path to the image
    .then(async(response) => {
		const base64a = `${response}`;
			const media = await conn.prepareMessage(mdata.id,{ location: {}}, MessageType.location, {thumbnail: base64a});
			const buttons = [
  {buttonId: '.menu', buttonText: {displayText: 'LIST MENU'}, type: 1}
]
const buttonMessage = {
    contentText: teks,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 6, // change for file type
    locationMessage: media.message.locationMessage // change for file type
}
const sendMsg = await conn.sendMessage(mdata.id, buttonMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}})
	}
    )
			
        } else if (anu.action == 'remove') {
            num = anu.participants[0]
            teks1 = `Sayonara @${num.split('@')[0]}👋`
			const sendMsg = await conn.sendMessage(mdata.id, teks1, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
        }
    } catch (e) {
        console.log("[ERROR] " + e.message)
    }
})

conn.on("chat-update", async (message) => {
	try {
		if (!message.hasNewMessage) return;
		message = message.messages.all()[0];
		if (!message.message || message.key.fromMe || message.key && message.key.remoteJid == 'status@broadcast') return;
		if (message.message.ephemeralMessage) {
			message.message = message.message.ephemeralMessage.message;
		}
		
		await messageHandler(conn, message);
	} catch(e) {
		console.log("[ERROR] " + e.message);
		conn.sendMessage(message.key.remoteJid, `Silakan Ulangi Command!`, "conversation", { quoted: message });
	}
});


const start = async () => {
	const version = (await axios.get("https://raw.githubusercontent.com/salismazaya/whatsapp-bot/master/wa-web-version.txt")).data.split(",").map(x => parseInt(x));
	conn.version = version;
	if (fs.existsSync("login.json")) conn.loadAuthInfo("login.json");
	conn.connect()
		.then(() => {
			fs.writeFileSync("login.json", JSON.stringify(conn.base64EncodedAuthInfo()));
			console.log("[OK] Login sukses! Ketik Help untuk bantuan");
		})
		.catch(e => {
			if (fs.existsSync("login.json")) fs.unlinkSync("login.json");
			console.log("[ERROR] Login gagal!");
			conn.clearAuthInfo();
			start();
		});
}

start();
