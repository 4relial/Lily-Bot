// https://github.com/salismazaya/whatsapp-bot
import('node-fetch')
const fs = require("fs");
const fetch = require("node-fetch");
const axios = require("axios");
const uploadImages = require('./lib/fetcher.js')
const PDFDocument = require("pdfkit");
const brainly = require("brainly-scraper");
const tesseract = require("node-tesseract-ocr");
const webpConverter = require("./lib/webpconverter.js")
const bahasa_planet = require('./lib/bahasa_planet')
const WSF = require("wa-sticker-formatter");
const { MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys");
const yt = require('youtube-search-without-api-key');
const mathjs = require("mathjs")
var Promise = require('promise');
const { h2k, generateMessageID,getBuffer, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { TraceMoe } = require("trace.moe.ts");
const imageToBase64 = require('image-to-base64');
const mutebot = JSON.parse(fs.readFileSync('./lily/mutegroup.json'));
const antitxc = JSON.parse(fs.readFileSync('./lily/antitoxic.json'));
const translate = require('translate-google');
const tiktok = require('tiktok-scraper-without-watermark')
const delay = require('delay');
const anilist = require('anilist-node');
const ytdl = require("ytdl-core")
const { exec } = require("child_process");
const zc = require('zerochan-scraper');

const inPdfInput = [];
const questionAnswer = {};
const bufferImagesForPdf = {};
const RiriList = JSON.parse(fs.readFileSync("lib/riri.json", "utf-8"));
const HI3 = JSON.parse(fs.readFileSync("lib/hi3.json", "utf-8"));
const hololive = JSON.parse(fs.readFileSync("lib/hololive.json", "utf-8"));
const marin = JSON.parse(fs.readFileSync("lib/marin.json", "utf-8"));
const seele = JSON.parse(fs.readFileSync("lib/seele.json", "utf-8"));
const sagiri = JSON.parse(fs.readFileSync("lib/sagiri.json", "utf-8"));
const GIList = JSON.parse(fs.readFileSync("lib/genshin.json", "utf-8"));
const quotesList = JSON.parse(fs.readFileSync("lib/quotes.json", "utf-8"));
const quotesList2 = JSON.parse(fs.readFileSync("lib/quotes2.json", "utf-8"));
const factList = JSON.parse(fs.readFileSync("lib/fact.json", "utf-8"));
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const {
owner,
namabot,
nameowner,
askot,
exif1,
exif2
} = settings



module.exports = async (conn, message) => {
	const { fetchJson, getBuffer } = require('./lib/fetcher')
	const apikey = "c144476585f14a9526874e7f";
	const senderNumber = message.key.remoteJid;
	const imageMessage = message.message.imageMessage;
	const videoMessage = message.message.videoMessage;
	const stickerMessage = message.message.stickerMessage;
	const extendedTextMessage = message.message.extendedTextMessage;
	const quotedMessageContext = extendedTextMessage && extendedTextMessage.contextInfo && extendedTextMessage.contextInfo;
	const quotedMessage = quotedMessageContext && quotedMessageContext.quotedMessage;
	const textMessage = message.message.conversation || message.message.buttonsResponseMessage && message.message.buttonsResponseMessage.selectedButtonId || message.message.extendedTextMessage && message.message.extendedTextMessage.text || imageMessage && imageMessage.caption || videoMessage && videoMessage.caption || message.message.listResponseMessage && message.message.listResponseMessage.singleSelectReply.selectedRowId

	
	let command, parameter;
	   
	    const botNumber = conn.user.jid
		const botNumberss = conn.user.jid + '@c.us'
		const isGroup = senderNumber.endsWith('@g.us')
		let sender = isGroup ? message.participant : message.key.remoteJid
		const totalchat = await conn.chats.all()
		const blockNumber = JSON.parse(fs.readFileSync('./lily/banned.json'));
		const groupMetadata = isGroup ? await conn.groupMetadata(senderNumber) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const mdata = groupMetadata.id
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
	    const isVote = isGroup ? voting.includes(senderNumber) : false
		const isBlocked = blockNumber.includes(sender);
		const isMute = isGroup? mutebot.includes(mdata) : false
		const isATON = isGroup? antitxc.includes(mdata) : false
		
		
        const conts = message.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = message.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'
        const Owner = (`${owner}@s.whatsapp.net`)
		const premiumNumber = JSON.parse(fs.readFileSync('./lily/prem.json'));
		const isPremium = premiumNumber.includes(sender) || message.key.fromMe
        const isOwner = Owner.includes(sender) || message.key.fromMe
		const p = '#' || '.' || '!'
		
	if (textMessage) {
		
		
		
		
		
	
		// command = textMessage.trim().split(" ")[0];
		// parameter = textMessage.trim().split(" ").slice(1).join(" ");


var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = hari + " " + tanggal + " " + bulan + " " + tahun;
var tampilTanggal2 = tanggal + " " + bulan + " " + tahun;

		let a = textMessage.trim().split("\n");
		let b = "";
		command = a[0].split(" ")[0];
		b += a[0].split(" ").slice(1).join(" ");
		b += a.slice(1).join("\n")
		parameter = b.trim();
		}

	if (inPdfInput.includes(senderNumber)) {
		if (stickerMessage) return;
		if (command == ".done" || bufferImagesForPdf[senderNumber].length > 19) {
			const pdf = new PDFDocument({ autoFirstPage:false });
			const bufferImages = bufferImagesForPdf[senderNumber];
			for (const bufferImage of bufferImages) {
				const image = pdf.openImage(bufferImage);
				pdf.addPage({ size:[image.width, image.height] });
				pdf.image(image, 0, 0);
			}

			const pathFile = ".temp/" + Math.floor(Math.random() * 1000000 + 1) + ".pdf";
			const file = fs.createWriteStream(pathFile);
			pdf.pipe(file)
			pdf.end()

			file.on("finish", () => {
				const file = fs.readFileSync(pathFile);
				conn.sendMessage(senderNumber, file, MessageType.document, { mimetype: Mimetype.pdf, filename: Math.floor(Math.random() * 1000000) + ".pdf", quoted: message});
				fs.unlinkSync(pathFile);
				inPdfInput.splice(inPdfInput.indexOf(senderNumber), 1);
				delete bufferImagesForPdf[senderNumber];
			})

		} else if (command == ".cancel") {
			delete bufferImagesForPdf[senderNumber];
			inPdfInput.splice(inPdfInput.indexOf(senderNumber), 1);
			conn.sendMessage(senderNumber, "Operasi dibatalkan!", MessageType.text, { quoted: message })

		} else if (imageMessage && imageMessage.mimetype == "image/jpeg") {
			const bufferImage = await conn.downloadMediaMessage(message);
			bufferImagesForPdf[senderNumber].push(bufferImage);

			conn.sendMessage(senderNumber, `[${bufferImagesForPdf[senderNumber].length}] Gambar telah ditambahkan,*.done* jika selesai, *.cancel* jika ingin membatalkan`, MessageType.text, { quoted: message })
			
		} else {
			conn.sendMessage(senderNumber, "Itu bukan gambar, *.done* jika selesai, *.cancel* jika ingin membatalkan", MessageType.text, { quoted: message })
		}

		return;
	}
	
	

	switch (command) {
		
	case `.math`:	
	{
		if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
		 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!parameter) {
				conn.sendMessage(senderNumber, "Gunakan input yang benar!! , contoh _.math 10+10*10/10_", MessageType.text, { quoted: message });
				break;
			}
try{			
	    await conn.sendMessage(senderNumber, `*Hasil Dari:*
${parameter} = ${mathjs.evaluate(parameter)}
		
_Riri Sensei_`, MessageType.text ,{ quoted: message });
                    break;
} catch {
	conn.sendMessage(senderNumber, `Riri hanya bisa operasi perkalian (*), pembagian(/), tambah(+) dan kurang(-)
Contoh: .math 10*2+2-1/9`, MessageType.text, { quoted: message });
}
 break;
	}
	
		
case ".del":
		{
			if (!message.key.fromMe && isGroup && !isOwner && !isGroupAdmins) return;
		 if (!quotedMessage) return conn.sendMessage(senderNumber, "Format Salah!", MessageType.text, { quoted: message });
                  const from2 = quotedMessageContext.participant === (conn.user && conn.user.jid)
	 if (!from2) return conn.sendMessage(senderNumber, "Hanya dapat menghapus chat Bot!", MessageType.text, { quoted: message });
		await conn.deleteMessage(senderNumber, {
          id: quotedMessageContext.stanzaId,
          remoteJid: senderNumber,
          fromMe: false,
        }).catch(e => {console.log(e)
					conn.sendMessage(senderNumber, `Error`, MessageType.text, { quoted: message });})
                    break
		}
		
case ".igdl":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!parameter) {
				conn.sendMessage(senderNumber, `Format salah!*`, MessageType.text, { quoted: message });
				break;
			}
		
		
save(parameter, 'myDir').then(res => {
  console.log(res.file);
});

		}
			
case ".ytdl":
case ".ytmp3":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!parameter) {
				conn.sendMessage(senderNumber, `Format salah!*`, MessageType.text, { quoted: message });
				break;
			}

var getYouTubeID = require('get-youtube-id');
videoid = getYouTubeID(parameter);
if(videoid != null) {
   console.log("video id = ",videoid);
} else {
return conn.sendMessage(senderNumber, `Video tidak dapat Riri Temukan :(`, MessageType.text, { quoted: message });
}

try{
ytdl.getInfo(videoid).then(info => {
const detail = info.player_response.videoDetails

if (!message.key.fromMe && !isOwner && !isPremium){
	var panjang = 600;
}else {
	var panjang = 7200;
}
	
if (detail.lengthSeconds > panjang) return conn.sendMessage(senderNumber, `Durasi maksimal video adalah 10 menit!\nUser premium dapat mengunduh video hingga durasi 2 jam`, MessageType.text, { quoted: message });

const text = `*Judul:* ${detail.title}
*Durasi:* ${detail.lengthSeconds} detik
*Channel:* ${detail.author}`
//batas


imageToBase64(detail.thumbnail.thumbnails[2].url) // Path to the image
    .then(async(response) => {
const idvid = `${videoid}`
		const base64a = `${response}`;
			const media = await conn.prepareMessage(senderNumber,{ location: {}}, MessageType.location, {thumbnail: base64a});
			const buttons = [
  {buttonId: `.ytmp4xcz ${idvid}`, buttonText: {displayText: 'MP4'}, type: 1},
  {buttonId: `.ytmp3xcz ${idvid}`, buttonText: {displayText: 'MP3'}, type: 1}
]
const buttonMessage = {
    contentText: text,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 6, // change for file type
    locationMessage: media.message.locationMessage // change for file type
}
conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message })	;
	})
		})
} catch (e) {
	console.log(e)
}
		break
		}
		
case ".ytmp4xcz":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!parameter) {
				conn.sendMessage(senderNumber, `Format salah!*`, MessageType.text, { quoted: message });
				break;
			}

 
 try{
	 let path = `./mp3/${parameter}.mp4`
 ytdl(parameter, { quality: 'highest' }).pipe(fs.createWriteStream(path))
                            .on('error', (err) => {
                                printError(err, false)
                                if (fs.existsSync(path)) fs.unlinkSync(path);
                            })
                            .on('finish', () => {
								const vd = fs.readFileSync(path);
                                conn.sendMessage(senderNumber, vd, MessageType.video, { quoted: message });
                                if (fs.existsSync(path)) fs.unlinkSync(path);
                            })
                    } catch (err) {
                        console.log(err)
                    }
					break
		}


case ".ytmp3xcz":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!parameter) {
				conn.sendMessage(senderNumber, `Format salah!*`, MessageType.text, { quoted: message });
				break;
			}
			
var YoutubeMp3Downloader = require("youtube-mp3-downloader");

//Configure YoutubeMp3Downloader with your settings
var YD = new YoutubeMp3Downloader({
    "outputPath": "./mp3",    // Where should the downloaded and en>
    "youtubeVideoQuality": "highestaudio",       // What video quality sho>
    "queueParallelism": 100,                  // How many parallel down>
    "progressTimeout": 40                 // How long should be the>
});

YD.download(parameter,`${parameter}.mp3`);
YD.on("finished", function(err, data) {

(async () => {
            const audq = fs.readFileSync(`mp3/${parameter}.mp3`);
			conn.sendMessage(senderNumber, audq, MessageType.audio, { mimetype: Mimetype.mp4Audio });
			let path = `./mp3/${parameter}.mp3`;
			if (fs.existsSync(path)) fs.unlinkSync(path);
})();
    console.log(JSON.stringify(data));
});

YD.on("error", function(error) {
    console.log(error);
});
break;
}
	

		case ".help":
		case "!help":
case "riri":
case "Riri":
case "Bot":
case "bot":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (parameter) return

imageToBase64("pic/ririmenu.png") // Path to the image
    .then(async(response) => {
		const base64a = `${response}`;
const media = await conn.prepareMessage(senderNumber,{ location: {}}, MessageType.location, {thumbnail: base64a}) // change for file type

			const buttons = [
  {buttonId: '.rules', buttonText: {displayText: 'PERATURAN'}, type: 1}
]

const kaki =`Hai *${pushname}*
Ada yang bisa Riri Bantu?

_Prefik:_ ( . )
*LIST MENU* :

*STICKER MENU*                      
➸ .sticker
➸ .stoimg
➸ .stogif

*RANDOM IMAGE*                             
➸ .waifu
➸ .genshin
➸ .honkai
➸ .akrnight
➸ .lily
➸ .megumin
➸ .neko
➸ .kitagawa
➸ .megumi
➸ .chitanda
➸ .mai
➸ .hina
➸ .hololive

*RANDOM TEKS*   
➸ .randomfact                          
➸ .quotes
➸ .quotes2
➸ .quotes anime

*DOWNLOADER*
➸ .ytdl
➸ .tiktokdl

*CONVERTER*
➸ .pdf

*TRANSLATOR*
➸ .en.id
➸ .id.en
➸ .jp.id
➸ .id.jp

*GROUP MENU*
➸ .hidetag
➸ .group desc

*KALKULATOR* 
➸ .math

*ANIME MENU* 
➸ .whatanime

*BOT MENU* 
➸ .owner
➸ .donate
➸ .about

*OTHER MENU* 
➸ .menu honkai
➸ .menu genshin
➸ .menu koi

${tampilTanggal2}`;

const teks =`ℍ𝕚𝕥𝕠𝕥𝕤𝕦𝕪𝕒𝕟𝕒𝕘𝕚 ℝ𝕚𝕣𝕚`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 6, // change for file type
    locationMessage: media.message.locationMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });	
        })
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
	break
		}
		
		
		case "halo":
		case "Halo":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `Haii ${pushname} `.replace("", "");
             
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
		case "assalamualaikum":
		case "Assalamualaikum":
		case "*Assalamualaikum":
		case "*assalamualaikum":
		case "Assalamu'alaikum":
		case "assalamu'alaikum":
		{
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `Waalaikumussalam`.replace("", "");
             
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
		case "Apa kabar":
		case "apa kabar":
		{
			const text = `Baik Kak`.replace("", "");
             
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
				case ".rules":
		case ".rules":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `➥ Lily Bot V1.2.0

⬡ Dilarang Spam Command!
⬡ Kami tidak bertanggung jawab atas penyalahgunaan bot
⬡ Kami tidak bertanggung jawab atas kebocoran data pribadi anda

═ 〘 DONASI 〙 ═
➥ Pulsa : 082284739859
➥ OVO : 082284739859
➥ Other Payment : .owner

 ©Base Lily Bot
 Script original by 4relial
 
 Hitotsuyanagi Riri`.replace("", "");
             
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
				case "p":
		case "P":
		{
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			
			if (!parameter) {
			const text = `👋👋`.replace("", "");
             
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
		break;} else
		{break;
		}
		}
		
		case ".ownermenu":
		{
			
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			const text = `Menu hanya bisa diakses owner Riri!`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}

		case ".btf":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			
						imageToBase64("pic/koi.jpg") // Path to the image
    .then(async(response) => {
		const base64a = `${response}`;
const media = await conn.prepareMessage(senderNumber,{ location: {}}, MessageType.location, {thumbnail: base64a}) // change for file type

			const buttons = [
  {buttonId: '.cekbtf', buttonText: {displayText: 'CEK BTF'}, type: 1}
]

const kaki =`xxelectricxx`;

const teks =`𝕁𝕒𝕕𝕨𝕒𝕝 𝕄𝕖𝕕𝕒𝕟 ℙ𝕖𝕣𝕒𝕟𝕘

*Hari:*
Selasa, Kamis, Sabtu
*Jam Pendaftaran:*
20.45 - 21.30

_Medan Perang dimulai tepat setelah pendaftaran berakhir_`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 6, // change for file type
    locationMessage: media.message.locationMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);			
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
	return
		}
		
		
		case ".btc":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			imageToBase64("pic/koi.jpg") // Path to the image
    .then(async(response) => {
		const base64a = `${response}`;
const media = await conn.prepareMessage(senderNumber,{ location: {}}, MessageType.location, {thumbnail: base64a}) // change for file type

			const buttons = [
  {buttonId: '.cekbtc', buttonText: {displayText: 'CEK BTC'}, type: 1}
]

const kaki =`xxelectricxx`;

const teks =`𝕁𝕒𝕕𝕨𝕒𝕝 𝔹𝕒𝕥𝕥𝕝𝕖 ℂ𝕝𝕒𝕟

*Hari:*
Senin dan Jum'at
*Jam Pendaftaran:*
20.45 - 21.30

_Battle clan dimulai tepat setelah pendaftaran berakhir_`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 6, // change for file type
    locationMessage: media.message.locationMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);			
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
	return
			} 
			


case "Bgsd":
case "bgsd":
case "Tolol":
case "tolol":
case "fuck":
case "Fuck":
case "kontol":
case "Kontol":
case "kntl":
case "Kntl":
case "Bgst":
case "bgst":
case "Bangsat":
case "bangsat":

		{
			
				if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			if (!isATON){ 
			console.log("Toxic OFF");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `SANTAI JAMET!!`.replace("", "");
             
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
case ".waifu11":
case ".randomwaifu11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && isMute) return
			try{
              axios.get("https://api.waifu.pics/sfw/waifu")
				.then(async(response) => {
					const link = `${response.data.url}`;		
			let buff = await getBuffer(link)
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.waifu', buttonText: {displayText: 'NEXT'}, type: 1}
]
const text = `This is Your waifu`;
const buttonMessage = {
    contentText: text,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
				  });
		break;	
} catch{
	conn.sendMessage(senderNumber, "Waifu Tidak Ditemukan", MessageType.text, { quoted: message });
	
} break
}

case ".megumin11":
case ".randommegumin11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && isMute) return
              axios.get("https://api.waifu.pics/sfw/megumin")
				.then(async(response) => {
					const link = `${response.data.url}`;		
			let buff = await getBuffer(link)
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.megumin', buttonText: {displayText: 'NEXT'}, type: 1}
]
const text = `Explooooooosion!!`;
const buttonMessage = {
    contentText: text,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
				  });
		break;	
}

case ".neko11":
case ".randomneko11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && isMute) return
              axios.get("https://api.waifu.pics/sfw/neko")
				.then(async(response) => {
					const link = `${response.data.url}`;		
			let buff = await getBuffer(link)
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.neko', buttonText: {displayText: 'NEXT'}, type: 1}
]
const text = `Nyan Nyannn`;
const buttonMessage = {
    contentText: text,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
				  });
		break;	
}

case ".gifsmile11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && isMute) return
              axios.get("https://api.waifu.pics/sfw/smile")
				.then(async(response) => {
					const link = `${response.data.url}`;	
            let buff = await getBuffer(link);					
			const sticker = new WSF.Sticker(buff, { crop: false, animated: true, pack: 'Jangan Lupa Makan', author: 'Riri ~Bot' })
            await sticker.build()
            const sticBuffer = await sticker.get()
			conn.sendMessage(senderNumber, sticBuffer, MessageType.sticker, { quoted: message });
			  });
		    break;	
}

case ".lily11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && isMute) return
           			const riri = RiriList[Math.floor(Math.random() * RiriList.length)];
			const link = riri.url;		
			let buff = await getBuffer(link)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.lily', buttonText: {displayText: 'NEXT'}, type: 1}
]
const text = `Assault Lily Random Image`;
const buttonMessage = {
    contentText: text,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
		break;	
}


case ".quotes2":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
           			const quotes = quotesList2[Math.floor(Math.random() * quotesList2.length)];
			const text = `_"${quotes.quote}"_\n\n - ${quotes.author}`;
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
}

case ".hi3":
case ".honkaixx":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && isMute) return
           			const SE = HI3[Math.floor(Math.random() * HI3.length)];
			const link = SE.url;
            const nama = SE.name;			
			let buff = await getBuffer(link)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.hi3', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
		break;	
}

case ".hololive11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && isMute) return
           			const SE = hololive[Math.floor(Math.random() * hololive.length)];
			const link = SE.url;
            const nama = SE.name;			
			let buff = await getBuffer(link)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.hololive', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
		break;	
}

case ".marin11":
case ".kitagawa11":
case ".kitagawamarin11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
if (!message.key.fromMe && !isOwner && !isPremium) return conn.sendMessage(senderNumber, "Premium Only!", MessageType.text, { quoted: message });
           			const SE = marin[Math.floor(Math.random() * marin.length)];
			const link = SE.url;
            const nama = SE.name;			
			let buff = await getBuffer(link)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.marin', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
		break;	
}

case ".sagiri11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
if (!message.key.fromMe && !isOwner && !isPremium) return conn.sendMessage(senderNumber, "Premium Only!", MessageType.text, { quoted: message });
    zc.getSearch('Izumi Sagiri', Math.floor(Math.random() * 61) + 1).then(async(img) => {
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.sagiri', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.sagiri', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".teriri11":
case ".theresa11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Theresa Apocalypse', Math.floor(Math.random() * 25) + 1).then(async(img) => {
const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.teriri', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.teriri', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".yae11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Yae Sakura', Math.floor(Math.random() * 35) + 1).then(async(img) => {
const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.yae', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.yae', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".bronya11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Bronya Zaychik', Math.floor(Math.random() * 25) + 1).then(async(img) => {
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.bronya', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.bronya', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}
case ".noelle11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Noelle (Genshin Impact)', Math.floor(Math.random() * 27) + 1).then(async(img) => {
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.noelle', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.noelle', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".ayaka11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Kamisato Ayaka', Math.floor(Math.random() * 40) + 1).then(async(img) => {
const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.ayaka', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.ayaka', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".arknight11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Arknights', Math.floor(Math.random() * 99) + 1).then(async(img) => {
	
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.arknight', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.arknight', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".kiana11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Kiana Kaslana', Math.floor(Math.random() * 40) + 1).then(async(img) => {
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.kiana', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.kiana', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".mai11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Sakurajima Mai', Math.floor(Math.random() * 20) + 1).then(async(img) => {
const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.mai', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.mai', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".chitanda11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Chitanda Eru', Math.floor(Math.random() * 60) + 1).then(async(img) => {
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.chitanda', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.chitanda', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}

case ".megumi11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Katou Megumi', Math.floor(Math.random() * 22) + 1).then(async(img) => {
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.megumi', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.megumi', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}
case ".hina11":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}

zc.getSearch('Amano Hina (Tenki no Ko)', Math.floor(Math.random() * 14) + 1).then(async(img) => {
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined || img[num].image != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: '.hina', buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });

	} else{
				const buttons = [
  {buttonId: '.hina', buttonText: {displayText: 'NEXT'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`Ulangi`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
	}
		
		});
		break;
}


case ".quotes2":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
           			const quotes = quotesList2[Math.floor(Math.random() * quotesList2.length)];
			const text = `_"${quotes.quote}"_\n\n - ${quotes.author}`;
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
}

case ".qanime":
case ".quotesanime":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			if (!message.key.fromMe && !isOwner && !isPremium) return conn.sendMessage(senderNumber, "Premium Only!", MessageType.text, { quoted: message });
try{
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        const name = `${quote.character}`;
		const anim = `${quote.anime}`;
		const quotes = `${quote.quote}`;
		const text =`_"${quotes}"_

- ${name}
Anime: ${anim}`;
		conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
})
}
				catch {
					conn.sendMessage(senderNumber, `Server Error, Ulangi lagi Nanti :)`, MessageType.text, { quoted: message });
				}
		break;	
}

case ".qimage":
case ".quotesimage":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			if (!message.key.fromMe && !isOwner && !isPremium) return conn.sendMessage(senderNumber, "Premium Only!", MessageType.text, { quoted: message });
                await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${apikey}`).then(async(image) => {
                  await conn.sendMessage(senderNumber, image, MessageType.image, { quoted: message });
					  });
		break;	
}

case ".saran":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			if (!parameter) return
			try{
			if (parameter == "anime"){
				if (!message.key.fromMe && !isOwner && !isPremium) return conn.sendMessage(senderNumber, "Premium Only!", MessageType.text, { quoted: message });
              
			  axios.get("https://animechan.vercel.app/api/random")
				.then(async(response) => {
		const anim = `${response.data.anime}`;			
		const text =`${anim}`;
		conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
});
break
			} 
			} catch {
		conn.sendMessage(senderNumber, "Error, Coba lagi nanti", MessageType.text, { quoted: message });				
			}
		break;	
}

case ".elainaxx":
case ".randomelainaxx":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			if (!message.key.fromMe && !isOwner && !isPremium) return conn.sendMessage(senderNumber, "Premium Only!", MessageType.text, { quoted: message });
                await getBuffer(`https://api.lolhuman.xyz/api/random/elaina?apikey=${apikey}`).then(async(image) => {
                  await conn.sendMessage(senderNumber, image, MessageType.image, { quoted: message });
					  });
		break;	
}
		case ".prem":
		case ".p":
		case ".premium":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
		if (!message.key.fromMe && !isOwner && !isPremium) return conn.sendMessage(senderNumber, "Premium Only!", MessageType.text, { quoted: message });
		
		if (!parameter)	{
				    await conn.sendMessage(senderNumber, `MENU RANDOM:
waifu
quotes
longhair
					
_Riri Sensei_`, MessageType.text ,{ quoted: message });
		}
		if (parameter == "waifu"){
                await getBuffer(`https://pic.re/image`).then(async(image) => {
                  await conn.sendMessage(senderNumber, image, MessageType.image, { quoted: message });
					  });
		}
		break;		
		}
		
		
				case ".sagirix":
				case ".elainax":
				case ".qimagex":
				case ".quotesanimex":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
const text = `Batas Penggunaan ${command} Habis!`.replace("", "");
             
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
		case ".allmenu":
		case ".menu":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
if(!parameter) {
			const text = `Hai *${pushname}*
Ada yang bisa Riri Bantu?

_Prefik:_ ( . )
*LIST MENU* :

*STICKER MENU*                      
➸ .sticker
➸ .stoimg
➸ .stogif

*RANDOM IMAGE*                             
➸ .waifu
➸ .genshin
➸ .honkai
➸ .akrnight
➸ .lily
➸ .megumin
➸ .neko
➸ .kitagawa
➸ .megumi
➸ .chitanda
➸ .mai
➸ .hina
➸ .hololive

*RANDOM TEKS*   
➸ .randomfact                          
➸ .quotes
➸ .quotes2
➸ .quotes anime

*DOWNLOADER*
➸ .ytdl
➸ .tiktokdl

*CONVERTER*
➸ .pdf

*TRANSLATOR*
➸ .en.id
➸ .id.en
➸ .jp.id
➸ .id.jp

*GROUP MENU*
➸ .hidetag
➸ .group desc

*KALKULATOR* 
➸ .math

*ANIME MENU* 
➸ .whatanime

*BOT MENU* 
➸ .owner
➸ .donate
➸ .about

*OTHER MENU* 
➸ .menu honkai
➸ .menu genshin
➸ .menu koi

_Hitotsuyanagi Riri_`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
}
if(parameter == "honkai"){
				const text = `Hi Captain!
				
➸ .ersignet  
➸ .hi.tierlist`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
} else if (parameter == "genshin"){
				const text = `Hi Traveller!

➸ .buildgi <character name>
contoh: *.buildgi ayaka*

➸ .meterialgi <character name>
contoh: *.materialgi ayaka*`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		} else if (parameter == "koi"){
				const text = `Halo Ksatria Jomblo!

➸ .btc
➸ .btf`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		} else {
			break;
		}
break
		}		
		
			case ".randomteks":
			case ".randommenu":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `*RANDOM TEKS*                             
➸ .quotes
➸ .quotes2
➸ .randomfact

_Hitotsuyanagi Riri_`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		case ".randomimage":
			case ".randommenu2":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `*RANDOM IMAGE*                             
➸ .waifu
➸ .megumin
➸ .neko
➸ .gifsmile
➸ .honkai
➸ .genshin
➸ .arknight
➸ .megumi
➸ .hina
➸ .mai
➸ .kitagawa
➸ .sagiri

_Hitotsuyanagi Riri_`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
					case ".convertm":
					case ".convertmenu":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `*CONVERT MENU*
➸ .pdf

_Hitotsuyanagi Riri_`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
							case ".bugreport":
							
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `*Berhasil Melaporkan!`;
			if (!isGroup){
            const report = `Ada Laporan!
*Dari:* ${pushname}`;
			const id = '6289515275674@s.whatsapp.net' 
			conn.sendMessage(id, report, MessageType.text);}
			else {
			const report = `Ada Laporan!
*Dari:* ${pushname}
*Group:* ${groupName}`;
const id = '6289515275674@s.whatsapp.net' 
			conn.sendMessage(id, report, MessageType.text);
			}
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
							case ".stickerm":
							case ".stickermenu":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `*STICKER MENU*                      
➸ .sticker
➸ .gifsticker
➸ .stoimg
➸ .stogif

_Hitotsuyanagi Riri_`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
							case ".otherm":
							case ".othermenu":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `*OTHER MENU* 
➸ .whatanime                               
➸ .hidetag
➸ .owner
➸ .about
➸ .math

_Hitotsuyanagi Riri_`;

			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}
		
				case "Anjing":
				case "Babi":
				case "Asu":
				case "asu":
				case "Tai":
		{
			
				if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			if (!isATON){ 
			console.log("Toxic OFF");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `Jangan Berkata Kasar!!`;
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}

case ".whatanime":
{
	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
	if (quotedMessage) {
				message.message = quotedMessage;
			}
			
	const gambar = message.message.imageMessage
	if (!gambar) return conn.sendMessage(senderNumber, "Format File Salah!", MessageType.text, { quoted: message });
			
const api = new TraceMoe();					
const imagePath = await conn.downloadAndSaveMediaMessage(message, Math.floor(Math.random() * 1000000));
await api.fetchAnimeFromBuffer(fs.readFileSync(imagePath)).then(response => {
	const Anilist = new anilist();
	Anilist.media.anime(response.result[1].anilist).then(data => {
	const text = `Romaji: ${data.title.romaji}
English: ${data.title.english}`
	conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
	
})
})
fs.unlinkSync(imagePath);
                            break
}
		
				case ".premiummenu":

		{
			
			if (!message.key.fromMe && !isOwner && !isPremium){
			  const buttons = [
  {buttonId: '.donate', buttonText: {displayText: 'Premium Now'}, type: 1}
]
const buttonMessage = {
    contentText: `*[ MENU PREMIUM ]*

Kamu tidak terdeteksi sebagai user premium, command tidak bisa digunakan!

➸ .randomwaifu
➸ .randomelaina
➸ .randomsagiri
➸ .quotesimage
➸ .quotesanime`,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 1 
}
await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage)
break	
			}
const text = `*[ MENU PREMIUM ]*

➸ .randomwaifu
➸ .randomelaina
➸ .randomsagiri
➸ .quotesimage
➸ .quotesanime

_Hitotsuyanagi Riri_`;
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}

case ".eatriri":

		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `
_Riri Hitotsuyanagi_`;
			const arelial = fs.readFileSync("pic/makan.jpg");
		    await conn.sendMessage(senderNumber, arelial, MessageType.image, { quoted: message, caption: text });
			break;
		}


		case ".sticker":
		case ".stiker":
		case ".s":
		{
			if (isBlocked){ 
			console.log("Blocked Message Det ected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (quotedMessage) {
				message.message = quotedMessage;
			}
			

			if (parameter) teks = `${parameter}`;
            if (!parameter) teks = "Jangan Lupa Makan";

			
			
			const gambar = message.message.imageMessage
			const video = message.message.videoMessage
			
			if (!gambar && !video) return conn.sendMessage(senderNumber, "Format File Salah!", MessageType.text, { quoted: message });
			
            if (message.message.imageMessage) {
			const imagePath = await conn.downloadAndSaveMediaMessage(message, Math.floor(Math.random() * 1000000));
			const sticker = new WSF.Sticker("./" + imagePath, { crop: false, pack: teks, author: 'Riri ~Bot' });
			await sticker.build();
			fs.unlinkSync(imagePath);
			const bufferImage = await sticker.get();
			conn.sendMessage(senderNumber, bufferImage, MessageType.sticker, { quoted: message });
			break;
			} else {
			
			if (message.message.videoMessage.seconds > 8) {
				conn.sendMessage(senderNumber, "Riri hanya bisa membuat gif maksimal 8 detik :(", MessageType.text, { quoted: message });
				break;	
			}

			const imagePath = await conn.downloadAndSaveMediaMessage(message, Math.floor(Math.random() * 1000000));
			const sticker = new WSF.Sticker("./" + imagePath, { animated: true, pack: teks, author: 'Riri ~Bot' });
			await sticker.build();
			fs.unlinkSync(imagePath);
			const bufferImage = await sticker.get();
			conn.sendMessage(senderNumber, bufferImage, MessageType.sticker, { quoted: message });
			break;
			}
			
			
			
		}
		
		

         case ".about":
		 case ".tentang":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `*Name:* Riri Hitotsuyanagi
*Birthday:* June 19
*Gender:* Female
*Blood:* A
*Owner:* Arelial
*Skill:* Charisma

_Team Hitotsuyanagi_`;
            const ririAb = fs.readFileSync("pic/riri1.jpg");
		    await conn.sendMessage(senderNumber, ririAb, MessageType.image, { quoted: message, caption: text });
			break;
		}	
		
		         case ".hi.tierlist":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const text = `_tierlist hanya sebagai referensi_`;
            const ririAb = fs.readFileSync("database/er/tier.jpg");
		    await conn.sendMessage(senderNumber, ririAb, MessageType.image, { quoted: message, caption: text });
			break;
		}	
		
		         case ".buildgi":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 if (!parameter) return conn.sendMessage(senderNumber, `Format Salah!\nContoh: *.buildgi ayaka*`, MessageType.text, { quoted: message });
			const ririAb = "pic/thumb.jpg";
			imageToBase64(ririAb).then(async(response) => {
            const thumb = `${response}`; 
			const text = `Build ${parameter}`;
		try {
            const build = fs.readFileSync(`database/buildgi/${parameter}.jpeg`);
		    await conn.sendMessage(senderNumber, build, MessageType.image, { quoted: message, caption: text, thumbnail: thumb });
		} catch (e) {
			conn.sendMessage(senderNumber, "Karakter tidak ditemukan!", MessageType.text, { quoted: message });
		}
			});
			break;
			
		}	
		
				         case ".materialgi":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 if (!parameter) return conn.sendMessage(senderNumber, `Format Salah!\nContoh: *.materialgi ayaka*`, MessageType.text, { quoted: message });
			const ririAb = "pic/thumb.jpg";
			imageToBase64(ririAb).then(async(response) => {
            const thumb = `${response}`; 
			const text = `Material Ascend dan Talent ${parameter}`;
		try {
            const build = fs.readFileSync(`database/materialgi/${parameter}.jpg`);
		    await conn.sendMessage(senderNumber, build, MessageType.image, { quoted: message, caption: text, thumbnail: thumb });
		} catch (e) {
			conn.sendMessage(senderNumber, "Karakter tidak ditemukan!", MessageType.text, { quoted: message });
		}
			});
			break;
			
		}	
		
		         case ".er":
				 case ".elysianrealm":
				 case ".ersignet":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 if (!parameter){
				 
				  const rows = [
        {title: 'Infinite Ouroboros', rowId: ".er io"},
		{title: 'Miss Pink Elf♪', rowId: ".er ely"},
		{title: 'Palatinus Equinox', rowId: ".er pe"},
		{title: 'Spina Astera', rowId: ".er ritasa"},
		{title: 'Herrscher of Flamescion', rowId: ".er hof"},
		{title: 'SILVERWING: N-EX', rowId: ".er sw"},
		{title: 'Dea Anchora', rowId: ".er dea"},
		{title: 'Herrscher of YATTA', rowId: ".er hos"},
		{title: 'Argent Knight: Artemis', rowId: ".er aka"},
		{title: 'Starchasm Nyx', rowId: ".er nyx"},
		{title: 'Herrscher of Reason', rowId: ".er hor"},
		{title: 'Prinzessin der Verurteilung', rowId: ".er faisal"},
		{title: 'Herrscher of Thunder', rowId: ".er hot"},
		{title: 'Midnight Absinthe', rowId: ".er ma"},
		{title: 'Valkyrie Bladestrike', rowId: ".er sf"},
		{title: 'Stygian Nymph', rowId: ".er sn"},
		{title: 'Bright Knight: Excelsisn', rowId: ".er bke"},
		{title: 'Valkyrie Gloria', rowId: ".er vg"},
		{title: 'Ritual Imayoh', rowId: ".er ri"},
		{title: 'Luna Kindred', rowId: ".er lk"},
		{title: 'Sweet n Spicy', rowId: ".er snc"}
    ]
    const section = [{ title: 'Klik menu yang kamu inginkan', rows: rows }]
    
    const button = {
        buttonText: 'Pilih Disini',
        description: `Klik Battlesuit yang kamu inginkan`,
        sections: section,
        listType: 1
    }
  const sendMsg = await conn.sendMessage(senderNumber, button, MessageType.listMessage, { quoted: message })
  break;
				 
			 }
			
			const ririAb = "pic/thumb.jpg";
			imageToBase64(ririAb).then(async(response) => {
            const thumb = `${response}`; 
			const text = `Ini Rekomendasi Signet nya Kapten!`;
		try {
            const build = fs.readFileSync(`database/er/${parameter}.jpg`);
		    await conn.sendMessage(senderNumber, build, MessageType.image, { quoted: message, caption: text, thumbnail: thumb });
		} catch (e) {
			conn.sendMessage(senderNumber, "Karakter tidak ditemukan!", MessageType.text, { quoted: message });
		}
			});
			break;
			
		}
	
			   case ".honkai11":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
				 
				  const rows = [
        {title: 'Kiana Kaslana', rowId: ".hi2208 Kiana Kaslana"},
		{title: 'Bronya Zaychik', rowId: ".hi2208 Bronya Zaychik"},
		{title: 'Durandal', rowId: ".hi2208 Durandal"},
		{title: 'Fu Hua', rowId: ".hi2208 Fu Hua"},
		{title: 'Liliya Olenyeva', rowId: ".hi2208 Liliya Olenyeva"},
		{title: 'Rozaliya Olenyeva', rowId: ".hi2208 Rozaliya Olenyeva"},
		{title: 'Raiden Mei', rowId: ".hi2208 Raiden Mei"},
		{title: 'Rita Rossweisse', rowId: ".hi2208 Rita Rossweisse"},
		{title: 'Seele Vollerei', rowId: ".hi2208 Seele Vollerei"},
		{title: 'Theresa Apocalypse', rowId: ".hi2208 Theresa Apocalypse"},
		{title: 'Yae Sakura', rowId: ".hi2208 Yae Sakura"}
    ]
    const section = [{ title: 'Klik Character yang kamu inginkan', rows: rows }]
    
    const button = {
        buttonText: 'Pilih Disini',
        description: `Klik Karakter yang kamu inginkan`,
        sections: section,
        listType: 1
    }
  const sendMsg = await conn.sendMessage(senderNumber, button, MessageType.listMessage, { quoted: message })
  return;
 
}

case ".hi2208":
{
	 
zc.getSearch(parameter, Math.floor(Math.random() * 30) + 1).then(async(img) => {
	
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: `.hi2208 ${parameter}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
return;
	} else {
		
	zc.getSearch(parameter, Math.floor(Math.random() * 10) + 1).then(async(img) => {
	
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: `.hi2208 ${parameter}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
return;
	} else {
		
	zc.getSearch(parameter, Math.floor(Math.random() * 4) + 1).then(async(img) => {
	
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: `.hi2208 ${parameter}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
return;
	} else {
		
	return;	
		
	}	
		
	});
	}
		
		});		
		}
		});
		break;
}
	
		       case ".genshin11":
			   case ".gi11":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
				 
				  const rows = [
        {title: 'Amber', rowId: ".gi2208 Amber (Genshin Impact)"},
		{title: 'Yae Miko', rowId: ".gi2208 Yae Miko"},
		{title: 'Raiden Shogun', rowId: ".gi2208 Raiden Shogun"},
		{title: 'Ganyu', rowId: ".gi2208 ganyu"},
		{title: 'Hu Tao', rowId: ".gi2208 hu tao"},
		{title: 'Yoimiya', rowId: ".gi2208 yoimiya"},
		{title: 'Eula', rowId: ".gi2208 eula"},
		{title: 'Kamisato Ayaka', rowId: ".gi2208 kamisato ayaka"},
		{title: 'Keqing', rowId: ".gi2208 Keqing"},
		{title: 'Fischl ', rowId: ".gi2208 Fischl"},
		{title: 'Barbara ', rowId: ".gi2208 Barbara (Genshin Impact)"},
		{title: 'Sangonomiya Kokomi', rowId: ".gi2208 Sangonomiya Kokomi"}
    ]
    const section = [{ title: 'Klik Character yang kamu inginkan', rows: rows }]
    
    const button = {
        buttonText: 'Pilih Disini',
        description: `Klik Karakter yang kamu inginkan`,
        sections: section,
        listType: 1
    }
  const sendMsg = await conn.sendMessage(senderNumber, button, MessageType.listMessage, { quoted: message })
  return;
 
}

case ".gi2208":
{
	 
zc.getSearch(parameter, Math.floor(Math.random() * 30) + 1).then(async(img) => {
	
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: `.gi2208 ${parameter}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
return;
	} else {
		
	zc.getSearch(parameter, Math.floor(Math.random() * 10) + 1).then(async(img) => {
	
	const num = Math.floor(Math.random() * 23) + 1;
	
	if (img[num] != undefined){
	console.log(img[num]);
	var n1 = img[num].nama;
	var n2 = n1.replace('download ', '');
	var nama = n2.replace(' image', '');
	
			let buff = await getBuffer(img[num].image)
			
			const media = await conn.prepareMessage(senderNumber, buff, MessageType.image)
			
			const buttons = [
  {buttonId: `.gi2208 ${parameter}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
const buttonMessage = {
    contentText: nama,
    footerText: 'Hitotsuyanagi Riri',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage, { quoted: message });
return;
	} else {
		
	return;	
		
	}	
		
		
		});		
		}
		});
		break;
}
		
		case ".stoimg":
case ".toimg":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!quotedMessage || !quotedMessage.stickerMessage || quotedMessage.stickerMessage.mimetype != "image/webp") {
				conn.sendMessage(senderNumber, "Harus me-reply sticker", MessageType.text, { quoted: message });
				break;
			}
			try{

			message.message = quotedMessage;
			const webpImage = await conn.downloadMediaMessage(message);
			const jpgImage = await webpConverter.webpToJpg(webpImage);
			conn.sendMessage(senderNumber, jpgImage, MessageType.image, { quoted: message, caption: "Sticker to Image: Done" });
			break;
			}
			catch{
			message.message = quotedMessage;
			const webpImage = await conn.downloadMediaMessage(message);
			const video = await webpConverter.webpToVideo(webpImage);
			conn.sendMessage(senderNumber, video, MessageType.video, { quoted: message, mimetype: Mimetype.gif });
			break;
			}
		}

		
		case ".stogif":
case ".togif":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!quotedMessage || !quotedMessage.stickerMessage || quotedMessage.stickerMessage.mimetype != "image/webp") {
				conn.sendMessage(senderNumber, "Harus me-reply sticker", MessageType.text, { quoted: message });
				break;
			}

			message.message = quotedMessage;
			const webpImage = await conn.downloadMediaMessage(message);
			const video = await webpConverter.webpToVideo(webpImage);
			conn.sendMessage(senderNumber, video, MessageType.video, { quoted: message, mimetype: Mimetype.gif });
			break;
		}


		case ".pdf":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (message.participant) {
				conn.sendMessage(senderNumber, "Fitur tidak dapat digunakan di dalam grup", MessageType.text, { quoted: message });
				break;
			}

			if (imageMessage) {
				conn.sendMessage(senderNumber, "Kirim tanpa gambar!", MessageType.text, { quoted: message });
				break;
			}

			inPdfInput.push(senderNumber);
			bufferImagesForPdf[senderNumber] = [];

			conn.sendMessage(senderNumber, "Silahkan kirim gambarnya satu persatu! jangan spam ya!", MessageType.text, { quoted: message });
			break;
		}



		case ".quotes":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!parameter){
			const quotes = quotesList[Math.floor(Math.random() * quotesList.length)];
			const text = `_"${quotes.quote}"_\n\n - ${quotes.by}`;
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;}
			//anime
				if (parameter == "anime"){
			   fetch('https://api.rei.my.id/v2/quotes')
    .then(response => response.json())
    .then(quote => {
        const name = `${quote.name}`;
		const anim = `${quote.anime}`;
		const quotes = `${quote.quote}`;
		const text =`_"${quotes}"_

- ${name}
Anime: ${anim}`;
		conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
}).catch((err) => {
    conn.sendMessage(senderNumber, `Server Error, Ulangi lagi Nanti :)`, MessageType.text, { quoted: message });
});} else if ((parameter == "idanime") || (parameter == "wibu")){
		
				fetch('https://api.rei.my.id/v2/quotes')
    .then(response => response.json())
    .then(quote => {
        const name = `${quote.name}`;
		const anim = `${quote.anime}`;
		const quotes = `${quote.quote}`;
		translate(quotes, {from: 'en', to: 'id'}).then(res => {
			
    		const text =`_"${res}"_

- ${name}
Anime: ${anim}`;
		conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
}).catch(err => {
    console.error(err)
})
}).catch((err) => {
    conn.sendMessage(senderNumber, `Server Error, Ulangi lagi Nanti :)`, MessageType.text, { quoted: message });
});}
break
		}
	

		case ".randomfact":
		case ".fact":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			const fact = factList[Math.floor(Math.random() * factList.length)];
			const text = `_${fact}_`
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
		}	
		
		case ".waifu":
		case ".genshin":
		case ".honkai":
		case ".arknight":
		case ".lily":
		case ".megumin":
		case ".neko":
		case ".kitagawa":
		case ".chitanda":
		case ".mai":
		case ".hina":
		case ".hololive":

		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			conn.sendMessage(senderNumber, 'Fitur nonaktif selama bulan ramadhan', MessageType.text, { quoted: message });
			break;
		}


		case ".gifsticker":
		case ".sgif":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (quotedMessage) {
				message.message = quotedMessage;
			}

			if (!message.message.videoMessage || message.message.videoMessage.mimetype != "video/mp4") {
				conn.sendMessage(senderNumber, "_Harus menggunakan video_", MessageType.text, { quoted: message });
				break;
			}

			if (message.message.videoMessage.seconds > 8) {
				conn.sendMessage(senderNumber, "Riri hanya bisa membuat gif maksimal 8 detik :(", MessageType.text, { quoted: message });
				break;	
			}

			const imagePath = await conn.downloadAndSaveMediaMessage(message, Math.floor(Math.random() * 1000000));
			const sticker = new WSF.Sticker("./" + imagePath, { animated: true, pack: "Jangan Lupa Makan", author: 'Riri ~Bot' });
			await sticker.build();
			fs.unlinkSync(imagePath);
			const bufferImage = await sticker.get();
			conn.sendMessage(senderNumber, bufferImage, MessageType.sticker, { quoted: message });
			break;
		}
		
		case ".hidetag":
		{ 
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			if (!message.key.fromMe && !isOwner && !isGroupAdmins || isBlocked) return conn.sendMessage(senderNumber, "Admin only!", MessageType.text, { quoted: message });
			
			if (!isGroup) return conn.sendMessage(senderNumber, "Fitur hanya dapat digunakan di dalam grup!", MessageType.text, { quoted: message });
			if (!parameter) return conn.sendMessage(senderNumber, `Pastikan menggunakan hidetag hanya untuk hal-hal yang penting!`, MessageType.text, { quoted: message });
			try{
			var value = `*${pushname}* : ${parameter}`
			var group = await conn.groupMetadata(senderNumber)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: message
			}
			conn.sendMessage(senderNumber, optionshidetag, MessageType.text)
			}
			catch {
				return
			}
			break;
		}
		
		case ".cekbtf":
		{ 
		if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
        var btf = new Date();
		var day = btf.getDay();
			if (day == 2 || day == 4 || day == 6) return conn.sendMessage(senderNumber, `Halo ${pushname}\nHari ini BTF ya, jangan lupa mendaftar tepat waktu :)`, MessageType.text, { quoted: message });
		    conn.sendMessage(senderNumber, `Halo ${pushname}, Hari ini tidak ada BTF`, MessageType.text, { quoted: message });
			break;
			
		}
		
				case ".cekbtc":
		{ 
		if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
        var btf = new Date();
		var day = btf.getDay();
			if (day == 1 || day == 5) return conn.sendMessage(senderNumber, `Halo ${pushname}\nBattle clan akan diadakan hari ini pukul 21.30)`, MessageType.text, { quoted: message });
		    conn.sendMessage(senderNumber, `Halo ${pushname}, Hari ini tidak ada BTC`, MessageType.text, { quoted: message });
			break;
			
		}
		
				case ".donate":
				case ".donat":
				case ".donet":
		{ 	
			const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'KONFIRMASI DONASI'}, type: 1}
]

const kaki =`Hitotsuyanagi Riri`;

const teks =`═ 〘 DONASI 〙 ═
➥ Pulsa : 082284739859
➥ OVO : 082284739859
➥ Other Payment : .owner

 ©Base Lily Bot
 Script original by 4relial`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 1 // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);	
			
			break;
		}
		
							
		case ".menu2":
				{
					if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
    const rows = [
        {title: 'Random Teks', rowId: ".randommenu"},
        {title: 'Random Image', rowId: ".randommenu2"},
        {title: 'Menu Convert', rowId: '.convertm'},
		{title: 'Menu Sticker', rowId: '.stickerm'},
		{title: 'Menu Premium', rowId: '.premiummenu'},
        {title: 'Menu Lainnya', rowId: '.otherm'}
    ]
    const section = [{ title: 'Klik menu yang kamu inginkan', rows: rows }]
    
    const button = {
        buttonText: 'Pilih Disini',
        description: `\nDaftar Menu \n_Jika menu tidak muncul klik *.allmenu*_\n`,
        sections: section,
        listType: 1
    }
  const sendMsg = await conn.sendMessage(senderNumber, button, MessageType.listMessage, { quoted: message })
  break;
	}
	
			case ".productlist":
				{
    const rows = [
		{title: 'Genshin Impact', rowId: '.productgi'},
        {title: 'Mobile Legend', rowId: '.productml'},
		{title: 'RDP Bulanan', rowId: '.rdpbulanan'},
		{title: 'Azure Student', rowId: '.azuredu'},
		{title: 'Free Fire', rowId: '.epep'}
    ]
    const section = [{ title: 'Klik menu yang kamu inginkan', rows: rows }]
    
    const button = {
        buttonText: 'Pilih Disini',
        description: `Daftar Produk yang Dijual di Riri Store`,
        sections: section,
        listType: 1
    }
  const sendMsg = await conn.sendMessage(senderNumber, button, MessageType.listMessage, { quoted: message })
  break;
	}
	
case ".riristore":
		{
			if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			if (!parameter){

imageToBase64("pic/ririmenu.png") // Path to the image
    .then(async(response) => {
		const base64a = `${response}`;
const media = await conn.prepareMessage(senderNumber,{ location: {}}, MessageType.location, {thumbnail: base64a}) // change for file type

			const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'BELANJA'}, type: 1},
  {buttonId: '.productlist', buttonText: {displayText: 'LIST PRODUK'}, type: 1}
]

const kaki =`LIST PRODUK

➸ .productgi
➸ .productml
➸ .azuredu
➸ .rdpbulanan
➸ .epep

${tampilTanggal2}`;

const teks =`ℝ𝕀ℝ𝕀 𝕊𝕋𝕆ℝ𝔼

Halo ${pushname}, Selamat datang di menu Belanja Riri Store :)

`;

const buttonMessage = {
    contentText: teks,
    footerText: kaki,
    buttons: buttons,
    headerType: 6, // change for file type
    locationMessage: media.message.locationMessage // change for file type
}
const sendMsg = await conn.sendMessage(senderNumber, buttonMessage, MessageType.buttonsMessage);			
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
			} return
		}
		
						case ".owner":
		{ 
		if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			
/******LOAD OF VCARD INPUT******/
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Shirai Yuyu\n' // hmn
            + 'ORG:Owner Bot;\n' // nama lu
            + 'TEL;type=CELL;type=VOICE;waid=6289515275674:+62 895-1527-5674\n' // Ganti no lu
            + 'END:VCARD'
/******END OF VCARD INPUT******/

const sentMsg  = await conn.sendMessage(senderNumber,{displayname: "Miyama Suzune", vcard: vcard},MessageType.contact, { quoted: message});
       break;
		}
		
			case ".banned":
		{
                                 if (!isOwner) return
								try{ 
								
								idnumber = parameter + "@s.whatsapp.net";
								const cekk = blockNumber.includes(idnumber);
								if (cekk) return conn.sendMessage(senderNumber, "Nomor tersebut telah di Banned!", MessageType.text, { quoted: message });
								
                                blockNumber.push(idnumber)
                                fs.writeFileSync('./lily/banned.json', JSON.stringify(blockNumber))
								conn.sendMessage(senderNumber, "Banned Berhasil!", MessageType.text, { quoted: message });
								}
								catch {
									conn.sendMessage(senderNumber, "GAGAL!", MessageType.text, { quoted: message });
								}
									
                           
		break
		}
		
					case ".unbanned":
		{
                                 if (!isOwner) return
								try{ 
								
								idnumber = parameter + "@s.whatsapp.net";
								const cekk = blockNumber.includes(idnumber);
								if (!cekk) return conn.sendMessage(senderNumber, "Nomor tidak di Banned!", MessageType.text, { quoted: message });
								
                                blockNumber.splice(idnumber, 1)
                                fs.writeFileSync('./lily/banned.json', JSON.stringify(blockNumber))
								conn.sendMessage(senderNumber, "Banned Berhasil!", MessageType.text, { quoted: message });
								}
								catch {
									conn.sendMessage(senderNumber, "GAGAL!", MessageType.text, { quoted: message });
								}
									
                           
		break
		}
		
			case ".mute":
		{
                     if (!message.key.fromMe && !isOwner && !isGroupAdmins || isBlocked) return
			if (!isGroup) return conn.sendMessage(senderNumber, "Fitur hanya dapat digunakan di dalam grup!", MessageType.text, { quoted: message });
						if (!parameter) {
				conn.sendMessage(senderNumber, "input salah!", MessageType.text, { quoted: message });
				break;
			}
			if (parameter == "enable"){
				  if (isMute) return await conn.sendMessage(senderNumber, "Riri sudah dalam Silent Mode!", MessageType.text, { quoted: message });
                    mutebot.push(groupId)
                    fs.writeFileSync('./lily/mutegroup.json', JSON.stringify(mutebot))
                    await conn.sendMessage(senderNumber, "Silent Mode : ON", MessageType.text, { quoted: message });
			} else if (parameter == "disable"){
				  if (!isMute) return await conn.sendMessage(senderNumber, "Riri tidak sedang dalam Silent Mode!", MessageType.text, { quoted: message });
					mutebot.splice(groupId, 1)
                    fs.writeFileSync('./lily/mutegroup.json', JSON.stringify(mutebot))
                    await conn.sendMessage(senderNumber, "Silent Mode : OFF", MessageType.text, { quoted: message });
				} else{
					conn.sendMessage(senderNumber, "Format Salah!", MessageType.text, { quoted: message });
				}
                   
				   
		break
		}
					case ".cwkid11":
		{
            
					conn.sendMessage(senderNumber, `${groupId}\n${groupDesc}\n${senderNumber}\n${groupAdmins}`, MessageType.text, { quoted: message });
                   
				   
		break
		}
		
							case ".igdl":
		{
            	if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 
				if (!parameter) {
				conn.sendMessage(senderNumber, "input salah!", MessageType.text, { quoted: message });
				break;}
				try{
let links = await instagramGetUrl(parameter);
console.log(links);
conn.sendMessage(senderNumber, `${links}`, MessageType.text, { quoted: message });
				} catch (e) {
					 console.log("[ERROR] " + e.message)
					conn.sendMessage(senderNumber, `Link Salah atau Private!`, MessageType.text, { quoted: message });
				}
                   
				   
		break
		}
		
		
		case ".antitoxic":
{
       if (!message.key.fromMe && !isOwner && !isGroupAdmins || isBlocked) return conn.sendMessage(senderNumber, "Admin only!", MessageType.text, { quoted: message });
			if (!isGroup) return conn.sendMessage(senderNumber, "Fitur hanya dapat digunakan di dalam grup!", MessageType.text, { quoted: message });
						if (!parameter) {
				conn.sendMessage(senderNumber, "input salah!", MessageType.text, { quoted: message });
				break;
			}
			if (parameter == "on"){
				  if (isATON) return await conn.sendMessage(senderNumber, "Anti Toxic sudah Tidak Aktif!", MessageType.text, { quoted: message });
                    antitxc.push(groupId)
                    fs.writeFileSync('./lily/antitoxic.json', JSON.stringify(antitxc))
                    await conn.sendMessage(senderNumber, "Anti Toxic : ON", MessageType.text, { quoted: message });
			} else if (parameter == "off"){
				  if (!isATON) return await conn.sendMessage(senderNumber, "Anti Toxic sudah Aktif!", MessageType.text, { quoted: message });
					antitxc.splice(groupId, 1)
                    fs.writeFileSync('./lily/antitoxic.json', JSON.stringify(antitxc))
                    await conn.sendMessage(senderNumber, "Anti Toxic : OFF", MessageType.text, { quoted: message });
				} else{
					conn.sendMessage(senderNumber, "Format Salah!", MessageType.text, { quoted: message });
				}
                   
				   
		break
		
}

	case ".group":
				{
					if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 		if (!parameter) return;
			if (parameter == "desc"){
			   await conn.sendMessage(senderNumber, `${groupDesc}`, MessageType.text, { quoted: message });	
			} else if (parameter == "admin"){		
				 await conn.sendMessage(senderNumber, `${groupAdmins}`, MessageType.text, { quoted: message });
			} else if (parameter == "id"){	

if (!owner) return;			
				 await conn.sendMessage(senderNumber, `${groupId}`, MessageType.text, { quoted: message });
			} else {
				break
			}				
			break 
				}

				
					case ".en.id":
				{
					if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 		if (!parameter) return;
					
				translate(parameter, {from: 'en', to: 'id'}).then(res => {
				conn.sendMessage(senderNumber, res, MessageType.text, { quoted: message });
				});
					
			break 
				}
				
									case ".id.en":
				{
					if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 		if (!parameter) return;
					
				translate(parameter, {from: 'id', to: 'en'}).then(res => {
				conn.sendMessage(senderNumber, res, MessageType.text, { quoted: message });
				});
					
			break 
				}
				
													case ".jp.id":
				{
					if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 		if (!parameter) return;
					
				translate(parameter, {from: 'ja', to: 'id'}).then(res => {
				conn.sendMessage(senderNumber, res, MessageType.text, { quoted: message });
				});
					
			break 
				}
								case ".id.jp":
				{
					if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 		if (!parameter) return;
					
				translate(parameter, {from: 'id', to: 'ja'}).then(res => {
				conn.sendMessage(senderNumber, res, MessageType.text, { quoted: message });
				});
					
			break 
				}
				
					case ".tiktok":
					case ".tiktokdl":
				{
					if (isBlocked){ 
			console.log("Blocked Message Detected");
			return;}
			 if (!message.key.fromMe && !isOwner && !isGroupAdmins && isMute) return
			 		if (!parameter) return conn.sendMessage(senderNumber, `Format salah!`, MessageType.text, { quoted: message })
					
		tiktok.tiktokdownload(parameter)
     .then(async(result) => {
          console.log(result)
		  nowm = result.nowm
		    await getBuffer(nowm).then(async(video) => {
                  await conn.sendMessage(senderNumber, video, MessageType.video, { quoted: message });
					  }).catch(e => { console.log(e)
	 conn.sendMessage(senderNumber, e, MessageType.text, { quoted: message });})
     })
     .catch(e => { console.log(e)
	 conn.sendMessage(senderNumber, e, MessageType.text, { quoted: message });})
					
			break 
				}
				
				
}
}
