/*
* Recodado por Lucas R. e construido em homenagem ao Legião Z.
* Puedes usar y dar forma a este bot, PERO NO QUITES créditos.
* Evite quitar cosas como Legion Link, gracias!
*/
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const sharp = require('sharp')
const math = require('mathjs')
const search = require("simple-play-store-search")
const google = require('google-it')
const isPorn = require('is-porn')
const imgsearch = require('node-reverse-image-search')
const imgbbUploader = require('imgbb-uploader')
const moment = require('moment-timezone')
moment.tz.setDefault('America/Sao_Paulo').locale('pt_BR')
const get = require('got')
const request = require('request')
const color = require('./lib/color')
const { spawn, exec, execFile } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { randomNimek, sleep, wall, tulis, ss } = require('./lib/functions')
const { owner, donate, down, help, admins, adult, readme, lang, convh } = require('./lib/help')
const { stdout } = require('process')
const bent = require('bent')
const { doing } = require('./lib/translate.js')
const { meme, msgFilter, translate, killo } = require('./lib')
const { uploadImages } = require('./lib/fether')
const feature = require('./lib/poll')
const { sobre } = require('./lib/sobre')
const BrainlySearch = require('./lib/brainly')
const { removeBackgroundFromImageBase64 } = require('remove.bg')
const fetch = require('node-fetch');
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const exsv = JSON.parse(fs.readFileSync('./lib/exclusive.json'))
const faki = JSON.parse(fs.readFileSync('./lib/fake.json'))
const bklist = JSON.parse(fs.readFileSync('./lib/blacklist.json'))
const atbk = JSON.parse(fs.readFileSync('./lib/anti.json'))
const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'


module.exports = kconfig = async (kill, message) => {
    try {
		const { type, id, from, t, sender, author, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const double = Math.floor(Math.random() * 2) + 1
        const four = Math.floor(Math.random() * 4) + 1
        const triple = Math.floor(Math.random() * 3) + 1
        const cinco = Math.floor(Math.random() * 5) + 1
        const six = Math.floor(Math.random() * 6) + 1
        const seven = Math.floor(Math.random() * 7) + 1
		const lvpc = Math.floor(Math.random() * 101) + 1
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const processTime = (timestamp, now) => { return moment.duration(now - moment(timestamp * 1000)).asSeconds() }
        const botNumber = await kill.getHostNumber()
        const blockNumber = await kill.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await kill.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const ownerNumber = '55189****@c.us'
        const isOwn = sender.id
		const isOwner = isOwn.includes(ownerNumber)
        global.pollfile = 'poll_Config_'+chat.id+'.json'
        global.voterslistfile = 'poll_voters_Config_'+chat.id+'.json'
		global.client = kill
		const isLeg = exsv.includes(chatId)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)


        // Bot Prefix
        const prefix = '/'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const url = args.length !== 0 ? args[0] : ''
        const uaOverride = process.env.UserAgent
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
		const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		
		
        const mess = {
            wait: '¿Puedes esperar un rato? Realizar este tipo de comando lleva algún tiempo.',
            error: {
                St: '¡Lo usaste mal jaja! \ Para usar esto, envía o etiqueta una foto con este mensaje.',
                Ki: 'Para eliminar administradores, primero debe eliminar su ADM.',
                Ad: '¡Errores! No se puede agregar, puede deberse a la limitación de agregar o mis errores.',
                Go: 'Por qué, solo el propietario de un grupo puede usar este tipo de comando.',
				Kl: '¡Ups! Este es solo mi creador, no puedes acceder.',
				Ga: 'Solo los administradores pueden usarlo, ¡asique chupa nepe para serlo!',
				Gp: 'Lo siento, pero este es un comando para grupos.',
				Ac: 'Solo los grupos que permiten contenido +18 pueden usarlo pajero de mierda, si usted es el propietario y desea esto, use / nsfw enable o use en PV.',
				Ba: 'Estimado administrador, si desea que use estos comandos, debe dejarme ser un admin!',
                Iv: '¿Este enlace es correcto? Me parece mal...'
            }
        }
	

		// ANTI GRUPOS && ANTI PORNO
        if (isGroupMsg && isLeg && !isGroupAdmins && !isOwner){
            if (chats.match(/(https?:\/\/chat.whatsapp.com)/gi)) {
				console.log('Verificando o link de grupo recebido.')
                const check = await kill.inviteInfo(chats)
                if (check.status == 200) {
                    kill.removeParticipant(groupId, sender.id)
					console.log('Era un enlace real, así que eliminé el ' + sender.id)
                } else {
                    console.log('¡Enlace de grupo recibido! Pero es falso, no plantea amenazas.')
                }
			} else if (chats.match(/\bhttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)) {
				const chatpn = chats.match(/\bhttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)
				const flnrl = new URL(chatpn)
				console.log('Comprobación de pornografía en el enlace recibido...\n' + flnrl)
				isPorn(flnrl.hostname, function(error, status) {
					if (status == true) {
						kill.removeParticipant(groupId, sender.id)
						console.log('Había pornografía, así que eliminé el ' + sender.id)
					}
				})
			}
		} else {
            if (chats.match(/(https?:\/\/chat.whatsapp.com)/gi)) {
				console.log('Se recibió un enlace de grupo, pero era de alguien en la Lista Blanca o en el PV.')
			}
		}
		

        // ANTI FLOOD PRIVADO
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) {
        await kill.reply(from, 'EI! Espere 10 segundos antes de usar otro comandos!', id)
		return console.log(color('FLOOD AS', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'de', color(pushname))
		}
		
		
		// ANTI FLOOD GRUPOS
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) {
		await kill.reply(from, 'EI! Espere 10 segundos antes de usar otros comandos!', id)
		return console.log(color('FLOOD AS', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'de', color(pushname), 'em', color(name || formattedTitle))
		}
		
		
        // MENSAGENS
        if (!isCmd && !isGroupMsg) { return console.log('> MENSAGEM AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname)) }
        if (!isCmd && isGroupMsg) { return console.log('> MENSAGEM AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname), 'em', color(name || formattedTitle)) }
		
		// COMANDOS
        if (isCmd && !isGroupMsg) { console.log(color(`> COMANDO "/${command} [${args.length}]" AS`), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color(`> COMANDO "/${command} [${args.length}]" AS`), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname), 'em', color(name || formattedTitle)) }
		

        // Impede SPAM
        msgFilter.addFilter(from)
	

        switch(command) {


        case 'sticker':
        case 'stiker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
				sharp(mediaData)
				.resize(512, 512, {
					fit: sharp.fit.contain
				})
				.toBuffer()
				.then(async (resizedImageBuffer) => {
					let resizedImageData = resizedImageBuffer.toString('base64');
					let resizedBase64 = `data:${mimetype};base64,${resizedImageData}`;
					await kill.sendImageAsSticker(from, resizedBase64)
				})
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
				sharp(mediaData)
				.resize(512, 512, {
					fit: sharp.fit.contain
				})
				.toBuffer()
				.then(async (resizedImageBuffer) => {
					let resizedImageData = resizedImageBuffer.toString('base64');
					let resizedBase64 = `data:${quotedMsg.mimetype};base64,${resizedImageData}`;
					await kill.sendImageAsSticker(from, resizedBase64)
				})
            } else if (args.length == 1) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await kill.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Erro: ', err))
                } else {
                    kill.reply(from, mess.error.Iv, id)
                }
            } else {
                    kill.reply(from, mess.error.St, id)
            }
            break
			

		case 'ttp':
			if (args.length == 0) return kill.reply(from, 'Cadê a frase né?', id)
			axios.get(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(5)}`)
			.then(res => {
				kill.sendImageAsSticker(from, res.data.result)
			})
			break
			
			
		case 'about':
			await kill.sendFile(from, './lib/media/img/iris.png', 'iris.png', sobre, id)
			break

			
        case 'stickernobg':
			if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './lib/media/img/noBg.png'
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'API DO SITE REMOVE.BG', size: 'auto', type: 'auto', outFile }) // ponga su propia api allí, tenga cuidado con el límite mensual
                    await fs.writeFile(outFile, result.base64img)
                    await kill.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
					await kill.reply(from, 'Asegúrese de evitar usar esto cuando no lo necesite,', id)
                } catch(err) {
                    console.log(err)
					await kill.reply(from, 'Ups! Algo salió mal con ese comando!', id)
                }
            }
            break


        case 'stickergif':
        case 'stikergif':
        case 'gif':
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 15 || mimetype === 'image/gif' && message.duration < 15) {
                    var mediaData = await decryptMedia(message, uaOverride)
                    kill.reply(from, mess.wait, id)
                    var filename = `./lib/media/stickergif.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./lib/media/stickergf.gif --fps=15 --scale=256:256`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./lib/media/stickergf.gif', { encoding: "base64" })
                        await kill.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            kill.reply(from, 'Aff! La conversión tiene errores, tal vez sea el tamaño del gif o su peso.', id)
                        })
                    })
                } else {
                    kill.reply(from, `Si recibe esto, considere 2 razones.\n\n1 - Esto no es un gif o video.\n\n2 - O gif o video dura más de 15 segundos, por encima del límite que puedo convertir`, id)
                }
            } else if (quotedMsg) {
                if (quotedMsg.mimetype == 'video/mp4' && quotedMsg.duration < 15 || quotedMsg.mimetype == 'image/gif' && quotedMsg.duration < 15) {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                    kill.reply(from, mess.wait, id)
                    var filename = `./lib/media/stickergif.${quotedMsg.mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./lib/media/stickergf.gif --fps=15 --scale=256:256`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./lib/media/stickergf.gif', { encoding: "base64" })
                        await kill.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            kill.reply(from, 'Aff! La conversión tiene errores, tal vez sea el tamaño del gif o su peso.', id)
                        })
                    })
                } else {
                    kill.reply(from, `Si recibe esto, considere 2 razones.\n\n1 - Esto no es un gif o video.\n\n2 - O gif o video dura más de 15 segundos, por encima del límite que puedo convertir.`, id)
                }
			} else {
                kill.reply(from, mess.error.St, id)
            }
            break
	

		case 'simg':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
				kill.reply(from, 'Espera, tarda más de 20 segundos.\n\n *NO USAR OTRA VEZ * hasta que termine, de lo contrario todas las funciones serán bloqueadas por IP.', id)
				const sendres = (results) => {
					const ttile = results[0].title.replace('<span>', '').replace('</span>', '')
					const ttscig = results[1].title.replace('<span>', '').replace('</span>', '')
					kill.reply(from, `*${ttile}*\n\n*Titulo >* ${ttscig}\n\n${results[1].url}`, id)
					console.log(results)
				}
                var seaimg = './lib/media/img/imagesearch.jpg'
                await fs.writeFile(seaimg, mediaData)
				const upimg = await imgbbUploader("API DA IMGBB", seaimg) // Pon una api imgur para que tus fotos no vayan a mi cuenta
				console.log(upimg.url)
				await sleep(10000)
				const resimg = await imgsearch(upimg.url, sendres)
			} else {
				await kill.reply(from, 'Amigo(a), esto solo funciona con imágenes.', id)
			}
			break
			

		case 'upimg':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                var uplimg = './lib/media/img/imageupl.jpg'
                await fs.writeFile(uplimg, mediaData)
				const sdimg = await imgbbUploader("API DO SITE IMGBB", uplimg) // Pon una api imgbb para tus fotos y ve a mi cuenta
				console.log(sdimg.url_viewer)
				await kill.reply(from, `*OBS!* _Este enlace tiene una duración de 7 días, después de los cuales la imagen se eliminará automáticamente del servidor.._\n\n${sdimg.url_viewer}`, id)
			} else {
				await kill.reply(from, 'Amigo(a), esto solo funciona con imágenes.', id)
			}
			break
			
			
        case 'makesticker':
            if (args.length == 0) return kill.reply(from, '¡Faltaba algo para usar como referencia!', id)
            const stkm = await fetch(`http://api.fdci.se/rep.php?gambar=${body.slice(7)}`)
			const stimg = await stkm.json()
            let stkfm = stimg[Math.floor(Math.random() * stimg.length) + 1]
			console.log(stkfm)
            await kill.sendStickerfromUrl(from, stkfm)
			.catch(() => {
                kill.reply(from, 'No se ha recibido ninguna imagen o el servidor está desconectado, inténtalo más tarde', id)
            })
            break
			
			
		case 'morte':
		case 'death':
            if (args.length == 0) return kill.reply(from, 'Ponga un nombre, solo uno, sin apellido ni nombres completos, especialmente por su seguridad!', id)
			const predea = await axios.get(`https://api.agify.io/?name=${args[0]}`)
			await kill.reply(from, `Personas con este nombre "${predea.data.name}" tienden a morir en ${predea.data.age} años de edad.`, id)
			break			
			
			
	    case 'oculto':
            if (!isGroupMsg) return kill.reply(from, 'Apenas grupos!', id)
            const eur = await kill.getGroupMembers(groupId)
            const surpresa = eur[Math.floor(Math.random() * eur.length)]
			console.log(surpresa.id)
    	    var xvid = ["Negoes blancos y feministas", `${pushname} afeitarse en la bañera`, `${pushname} comiendo mi culo`, `${pushname} quieres comerme que hacer?`, "lolis desnuda y traviesa", "Ositos de peluche peludos y excitados "," adm mamá cocinada bajo presión "," Coño inflable de 500 cm de la muñeca china de la compañía lolita","cornudo domesticado golpeándome con mi cara en la webcam", "tiger vip de honey pussy", "belle delphine dando su culo en el bar de la esquina", "haciendo anal en negro", "africanos desnudos y chupando pollas", "anal africano "," comiéndome a mi tía "," lgbts besándose "," tío guapo que se quita la ropa "," gays haciéndose tripas "," pornografía de perros "," cortos años de gran polla "," Enanos gay peludos " , "Enanos gays con penetradores de botín", "Osos peludos de peluche", "Jailson Mendes", "Ver a mi amigo comerse a su esposa", "Lluvia dorada"]
            const surpresa2 = xvid[Math.floor(Math.random() * xvid.length)]
            await kill.sendTextWithMentions(from, `*EQUIPE ❌VIDEOS*\n\n_usuario de llanta @${surpresa.id.replace(/@c.us/g, '')} ..._\n\n_Soy de la administración de Xvideos y nos dimos cuenta de que no ha iniciado sesión en su cuenta durante más de 2 semanas y decidimos verificar si todo está bien con nuestro usuario más activo (a)._ \n\n_Desde la última vez que visitó nuestro sitio, ha buscado cientos de veces_ *"${surpresa2}"* _(creemos que es tu favorito), venimos a decir que se agregaron y estamos seguros que te gustará mucho._ \n_Te esperamos allí!_\n\n_Para nuestro usuario(a) favorito(a), con cariño, Equipo Xvideos._`)
            await sleep(2000)
            break
			
			
		case 'gender':
		case 'genero':
            if (args.length == 0) return kill.reply(from, 'Ponga un nombre, solo uno, sin apellido ni nombres completos, especialmente por su seguridad!', id)
			const seanl = await axios.get(`https://api.genderize.io/?name=${args[0]}`)
			const gender = seanl.data.gender.replace('female', 'mulheres').replace('male', 'homens')
			await kill.reply(from, `O nome "${seanl.data.name}" es más utilizado por ${gender}.`, id)
			break
			
			
        case 'detector' :
            if (!isGroupMsg) return kill.reply(from, 'Apenas grupos!', id)
			await kill.reply(from, 'Calculando foto de los participantes del grupo...', id)
            await sleep(3000)
            const eu = await kill.getGroupMembers(groupId)
            const gostosa = eu[Math.floor(Math.random() * eu.length)]
			console.log(gostosa.id)
            await kill.sendTextWithMentions(from, `*ＤＥＴＥＣＴＯＲ ＤＥ ＧＯＳＴＯＳＡＳ👩‍⚕️*\n\n*pipipipi*\n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipi*\n\n@${gostosa.id.replace(/@c.us/g,'')}*PARE(O)ALLÍ*\n\n*ACABAS DE RECIBIR DOS MULTA*\n\n*1 por no decir buenos días, buenas tardes, buenas noches y otra por estar muy*\n\n*caliente (o)*\n\n*valor de la multa:*\n\n*FOTO DE TETINHA EN PV kkkkk*`)
            await sleep(2000)
            break			

			
			
		case 'math':
            if (args.length == 0) return kill.reply(from, 'No especificaste una cuenta de matemáticas.', id)
            const mtk = body.slice(6)
            if (typeof math.evaluate(mtk) !== "number") {
            kill.reply(from, `¿Incluso abriste una cuenta? No parece un.`, id)
			} else {
				kill.reply(from, `_La ecuacion:_\n\n*${mtk}*\n\n_tem resultado de:_\n\n*${math.evaluate(mtk)}*`, id)
			}
			break
			
			
		case 'inverter':
            if (args.length == 0) return kill.reply(from, 'No especificó una frase para invertir.', id)
			const inver = body.slice(10).split('').reverse().join('')
			await kill.reply(from, inver, id)
			break
			
			
		case 'contar':
            if (args.length == 0) return kill.reply(from, 'Esto tiene 0 letras, después de todo, no hay texto.', id)
			const count = body.slice(8).length
			await kill.reply(from, `O texto possui ${count} letras.`, id)
			break
			
			
        case 'giphy':
			gark = body.trim().split(/ +/).slice(1)
			const link = gark.length !== 0 ? gark[0] : ''
            if (gark.length !== 1) return kill.reply(from, `Ownt, ¿te olvidaste de insertar el enlace?`, id)
            const isGiphy = link.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
            const isMediaGiphy = link.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
            if (isGiphy) {
                const getGiphyCode = link.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                if (!getGiphyCode) { return kill.reply(from, '¡Que pena! Su código de descarga está demasiado lejos, pero tal vez si lo intentas de nuevo * solo 1 vez más...*', id) }
                const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                kill.sendGiphyAsSticker(from, smallGifUrl)
                .catch((err) => kill.reply(from, `Un pajarito me dijo que este error está relacionado con el envío de la pegatina...`, id))
            } else if (isMediaGiphy) {
                const gifUrl = link.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                if (!gifUrl) { return kill.reply(from, '¡Que pena! Su código de descarga está demasiado lejos, pero tal vez si lo intentas de nuevo * solo 1 vez más...*', id) }
                const smallGifUrl = link.replace(gifUrl[0], 'giphy-downsized.gif')
                kill.sendGiphyAsSticker(from, smallGifUrl)
                .catch(() => {
                    kill.reply(from, `Un pajarito me dijo que este error está relacionado con el envío de la pegatina...`, id)
                })
            } else {
                await kill.reply(from, 'Lo siento, pero solo puedo aceptar enlaces de giphy.', id)
            }
            break


		case 'msg':
            if (args.length == 0) return kill.reply(from, 'Olvidaste ingresar un mensaje... e.e', id)
			await kill.sendText(from, `${body.slice(5)}`)
			break
			
			
		case 'id':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
			kill.reply(from, `El ID de grupo es ${groupId}`, id)
			break
			
        case 'fake':
			if (isGroupMsg && isGroupAdmins) {
				if (args.length !== 1) return kill.reply(from, 'Olvidaste ponértelo si quieres que se active [on], o desactivado [off].', id)
				if (args[0] == 'on') {
					faki.push(chatId)
					fs.writeFileSync('./lib/fake.json', JSON.stringify(faki))
					kill.reply(from, 'Anti-Fakes habilitado.', id)
				} else if (args[0] == 'off') {
					let yath = faki.indexOf(chatId)
					faki.splice(yath, 1)
					fs.writeFileSync('./lib/fake.json', JSON.stringify(faki))
					kill.reply(from, 'Anti-fakes desabilitado.', id)
				}
			} else if (isGroupMsg && isOwner) {
				if (args.length !== 1) return kill.reply(from, 'Olvidaste ponértelo si quieres que se active [on], ou desactivado [off].', id)
				if (args[0] == 'on') {
					faki.push(chatId)
					fs.writeFileSync('./lib/fake.json', JSON.stringify(faki))
					kill.reply(from, 'Anti-Fakes habilitado.', id)
				} else if (args[0] == 'off') {
					let yath = faki.indexOf(chatId)
					faki.splice(yath, 1)
					fs.writeFileSync('./lib/fake.json', JSON.stringify(faki))
					kill.reply(from, 'Anti-fakes desabilitado.', id)
				}
            } else {
                kill.reply(from, mess.error.Ga, id)
            }
            break
			
			
        case 'blacklist':
            if (isGroupMsg && isGroupAdmins) {
				if (args.length !== 1) return kill.reply(from, 'Defina entre on e off!', id)
				if (args[0] == 'on') {
					bklist.push(chatId)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números activados.\nUse /bklist (Número) para adicionar números.', id)
				} else if (args[0] == 'off') {
					let exclu = bklist.indexOf(chatId)
					bklist.splice(exclu, 1)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números offline.', id)
				}
			} else if (isGroupMsg && isOwner) {
				if (args.length !== 1) return kill.reply(from, 'Defina entre on e off!', id)
				if (args[0] == 'on') {
					bklist.push(chatId)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números activados.\nUse /bklist (Número) para adicionar números.', id)
				} else if (args[0] == 'off') {
					let exclu = bklist.indexOf(chatId)
					bklist.splice(exclu, 1)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números offline.', id)
				}
            } else {
                kill.reply(from, mess.error.Ga, id)
            }
            break	
		
			
        case 'bklist':
            if (isGroupMsg && isGroupAdmins) {
				if (args[0] == 'on') {
					if (args.length == 0) return kill.reply(from, 'Debes definir [on e off] y luego el número de la persona.', id)
					const bkls = body.slice(11) + '@c.us'
					atbk.push(bkls)
					fs.writeFileSync('./lib/anti.json', JSON.stringify(atbk))
					await kill.reply(from, 'Número adicionado a black-list', id)
				} else if (args[0] == 'off') {
					if (args.length == 0) return kill.reply(from, 'Debes configurar [on e off] y luego el número de la persona.', id)
					const bkls = body.slice(11) + '@c.us'
					let blks = atbk.indexOf(bkls)
					atbk.splice(blks, 1)
					fs.writeFileSync('./lib/anti.json', JSON.stringify(atbk))
					await kill.reply(from, 'Número removido da black-list', id)
				} else {
					await kill.reply(from, 'Debes configurar [on e off] y luego el número de la persona.', id)
				}
			} else if (isGroupMsg && isOwner) {
				if (args[0] == 'on') {
					if (args.length == 0) return kill.reply(from, 'Debes configurar [on e off] y luego el número de la persona.', id)
					const bkls = body.slice(11) + '@c.us'
					atbk.push(bkls)
					fs.writeFileSync('./lib/anti.json', JSON.stringify(atbk))
					await kill.reply(from, 'Número adicionado a black-list', id)
				} else if (args[0] == 'off') {
					if (args.length == 0) return kill.reply(from, 'Debes configurar [on e off] y luego el número de la persona.', id)
					const bkls = body.slice(11) + '@c.us'
					let blks = atbk.indexOf(bkls)
					atbk.splice(blks, 1)
					fs.writeFileSync('./lib/anti.json', JSON.stringify(atbk))
					await kill.reply(from, 'Número removido da black-list', id)
				} else {
					await kill.reply(from, 'Debes configurar [on e off] y luego el número de la persona.', id)
				}
            } else {
                kill.reply(from, mess.error.Ga, id)
            }
            break
			
			
		case 'onlyadms':
			onar = body.trim().split(/ +/).slice(1)
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
			if (onar.length !== 1) return kill.reply(from, `Olvidaste ponértelo si quieres que se active [On], o desactivar [Off].`, id)
            if (onar[0] == 'on') {
				kill.setGroupToAdminsOnly(groupId, true).then(() => kill.sendText(from, '¡Aquí está la prueba del poder de admin! \ NEl silenciador :O'))
			} else if (onar[0] == 'off') {
				kill.setGroupToAdminsOnly(groupId, false).then(() => kill.sendText(from, 'Y los miembros ordinarios pueden empezar a meterse de nuevo! e.e'))
			} else {
				kill.reply(from, `Olvidaste ponértelo si quieres que se active [On], o desactivar [Off].`, id)
			}
			break
			
			
		case 'legiao':
			if (isGroupMsg) return kill.reply(from, 'Puede ser que este grupo no permita enlaces, así que use ese comando en el PV, ¿de acuerdo?', id)
			kill.sendLinkWithAutoPreview(from, 'wa.me/50769258167', 'Genial que te hayas interesado en contactar a Abbadon!\nAqui esta su whats!', id)
			break
			
			
		case 'revoke':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
			await kill.revokeGroupInviteLink(groupId).then(() => kill.reply(from, 'Allí se cumplió tu orden! e.e', id))
			break
			
			
        case 'slogan':
            if (args.length == 0) return kill.reply(from, 'Cade a frase?', id)
            const slog = await axios.get(`http://api.haipbis.xyz/randomcooltext?text=${body.slice(8)}`)
			await kill.sendFileFromUrl(from, slog.data.image, slog.data.text, 'Elegante no es?', id)
            break
			
			
		case 'setimage':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
			if (isMedia && type == 'image' || isQuotedImage) {
				const dataMedia = isQuotedImage ? quotedMsg : message
				const _mimetype = dataMedia.mimetype
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
				const picgp = await kill.getProfilePicFromServer(chat.id)
				if (picgp == undefined) {
					var backup = errorurl
				} else {
					var backup = picgp
				}
				await kill.sendFileFromUrl(from, backup, 'group.png', 'En caso de que cambies de opinión...', id)
				await kill.setGroupIcon(groupId, imageBase64)
			} else if (args.length == 1) {
				if (!isUrl(url)) { await kill.reply(from, '¿Estás seguro de que este es un enlace solo a la foto??', id) }
				const picgpo = await kill.getProfilePicFromServer(chat.id)
				if (picgpo == undefined) {
					var back = errorurl
				} else {
					var back = picgpo
				}
				await kill.sendFileFromUrl(from, back, 'group.png', 'En caso de que cambies de opinión...', id)
				kill.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
				? kill.reply(from, 'Eso es lo que pensé, no hay fotos en este enlace o el enlace contiene demasiadas fotos.', id)
				: kill.reply(from, '¡Eso! Ahora el grupo tiene una nueva cara jaja!', id))
			} else {
				kill.reply(from, `Creo que lo estás usando mal en!`)
			}
			break			

			
		case 'img':
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                kill.reply(from, `Espera, puede que tarde un poco hacerte una paja...`, id)
                const stickerImage = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await kill.sendFile(from, stickerImage, '', 'Disfruta gay, aquí tienes tu foto! :D', id)
			} else if (!quotedMsg) return kill.reply(from, `Lo siento, esto es solo para sticker...`, id)
			break	


        case 'randomanime':
            const nime2 = await randomNimek('anime')
			console.log(nime2.data)
            await kill.sendFileFromUrl(from, nime2, ``, 'Ui Ui paja...', id)
            break


        case 'frase':
            if (double == 1) {
				const skya = await axios.get('https://mhankbarbar.tech/api/quotesnime/random').json() 
				const quot = skya.data.data.quote
				kill.reply(from, mess.wait, id)
				await sleep(5000)
				translate(quot, 'pt')
					.then((quote) => kill.reply(from, `➸ *Frase* : ${quote}\n➸ *Personagem* : ${skya.data.data.chara}\n➸ *Anime* : ${skya.data.data.anime}`, id))
			} else if (double == 2) {
				const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
				await kill.sendFileFromUrl(from, aiquote.data, 'quote.jpg', '~No entendí nada, pero sigamos el guión jajaja....~\n\n❤️' , id )
			}
            break


        case 'make':
            if (args.length == 0) return kill.reply(from, `Debes ingresar una frase después del comando.`, id)
            const nulisq = body.slice(6)
            const nulisp = await tulis(nulisq)
            await kill.sendImage(from, `${nulisp}`, '', 'Hermoso diario este tuyo en amigo...', id)
            .catch(() => {
                kill.reply(from, 'lo siento, la imagen no quiso enviarse o el servidor denegó el acceso...', id)
            })
            break


        case 'neko':
            const nekol = Math.floor(Math.random() * 4) + 1
            if (nekol == 1) {
				const neko5 = await axios.get(`https://nekos.life/api/v2/img/kemonomimi`)
				await kill.sendFileFromUrl(from, neko5.data.url, ``, `Nekoooo chann`, id)
            } else if (nekol == 2) {
				const neko2 = await axios.get(`https://nekos.life/api/v2/img/neko`)
				await kill.sendFileFromUrl(from, neko2.data.url, ``, `Nekooo`, id)
            } else if (nekol == 3) {
				const neko3 = await axios.get(`https://nekos.life/api/v2/img/ngif`)
				await kill.sendFileFromUrl(from, neko3.data.url, ``, `Nekooo`, id)
            } else if (nekol == 4) {
				const neko4 = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
				await kill.sendFileFromUrl(from, neko4.data.url, ``, `Nekooo`, id)
			}
            break


        case 'image':
            if (args.length == 0) return kill.reply(from, 'Faltou um nome!', id)
            const linp = await fetch(`http://api.fdci.se/rep.php?gambar=${body.slice(7)}`)
			const pint = await linp.json()
            let erest = pint[Math.floor(Math.random() * pint.length) + 1]
			console.log(erest)
            await kill.sendFileFromUrl(from, erest, '', 'Fueron muchos pero espero que les guste la imagen que elegí ^^!', id)
			.catch(() => {
                kill.reply(from, 'No se ha recibido ninguna imagen o el servidor está desconectado, inténtalo más tarde.', id)
            })
            break
			
			
        case 'yaoi':
            const yam = await fetch(`http://api.fdci.se/rep.php?gambar=yaoi`)
			const yaoi = await yam.json()
            let flyaoi = yaoi[Math.floor(Math.random() * yaoi.length) + 1]
            await kill.sendFileFromUrl(from, flyaoi, '', 'Tururu...', id)
			.catch(() => {
                kill.reply(from, 'No se ha recibido ninguna imagen o el servidor está desconectado, inténtalo más tarde.', id)
            })
            break


        case 'life': 
            const dia = await axios.get(`https://docs-jojo.herokuapp.com/api/fml`)
			var acon = dia.data.result.fml
            await sleep(5000)
            translate(acon, 'pt')
                .then((lfts) => kill.reply(from, lfts, id))
			break


        case 'fox':
            const fox = await axios.get(`https://some-random-api.ml/img/fox`)
			await kill.sendFileFromUrl(from, fox.data.link, ``, 'Que lindo zorro <3', id)
			break


        case 'wiki':
            if (args.length == 0) return kill.reply(from, 'Por favor escriba correctamente.', id)
            const wiki = await axios.get(`https://docs-jojo.herokuapp.com/api/wiki?q=${body.slice(6)}`)
			var wikit = wiki.data.result
			console.log(wikit)
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(wikit, 'pt')
                .then((resulta) => kill.reply(from, resulta, id))
            break
			
			
        case 'nasa':
        	if (args[0] == '-data') {
            	const nasa = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${args[1]}`)
				console.log(nasa.data.title)
				const explic = nasa.data.explanation
				await sleep(4000)
            	translate(explic, 'pt')
            	.then((result) => kill.sendFileFromUrl(from, `${nasa.data.url}`, '', `Titulo: ${nasa.data.title}\n\nData: ${nasa.data.date}\n\nMateria: ${result}`, id))
			} else {
            	const nasa = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
				console.log(nasa.data.title)
				const explic = nasa.data.explanation
				await sleep(4000)
            	translate(explic, 'pt')
            	.then((result) => kill.sendFileFromUrl(from, `${nasa.data.url}`, '', `Titulo: ${nasa.data.title}\n\nData: ${nasa.data.date}\n\nMateria: ${result}`, id))
			}
			break
			
			
        case 'stalkig':
            if (args.length == 0) return kill.reply(from, 'Nombre de usuario de Cade correcto?', id)
            const ig = await axios.get(`http://arugaz.my.id/api/media/stalkig?user=${body.slice(9)}`)
			var insta = ig.data.result.biography
            await kill.sendFileFromUrl(from, `${ig.data.result.profile_picture}`, ``, `Username: ${ig.data.result.username}\n\nNome: ${ig.data.result.fullname}\n\nbio: ${insta}\n\nSeguidores: ${ig.data.result.followers}\n\nSeguindo: ${ig.data.followings}`, id)
            break
			

        case 'stalktw':
            if (args.length == 0) return kill.reply(from, 'Nombre de usuario de Cade correcto?', id)
            const tw = await axios.get(`http://arugaz.my.id/api/media/stalktwitt?user=${body.slice(9)}`)
			var insta = tw.data.result.biography
            await kill.sendFileFromUrl(from, `${tw.data.result.profile_picture}`, ``, `Username: ${tw.data.result.username}\n\nNome: ${tw.data.result.fullname}\n\nbio: ${insta}\n\nSeguidores: ${tw.data.result.followers}\n\nSeguindo: ${tw.data.followings}`, id)
            break
			
			

        case 'twitter':
            if (args.length == 0) return kill.reply(from, 'Cade el enlace a la derecha?', id)
            const twi = await axios.get(`http://arugaz.my.id/api/media/twvid?url=${body.slice(4)}`)
			await kill.sendFileFromUrl(from, twi.data.result.videos, ``, 'Es un gran video jaja!\n~Pero que diablos fue eso...~', id)
			.catch(() => {
						kill.reply(from, 'Esa no! Impidieron mi acceso!\nQue desalmado!', id)
					})
            break


        case 'ig':
            if (args.length == 0) return kill.reply(from, 'Cae el enlace a la derecha?', id)
            const iga = await axios.get(`https://arugaz.my.id/api/media/ig?url=${body.slice(4)}`)
			await kill.sendFileFromUrl(from, iga.data.result, ``, 'Es un gran video jaja!\n~Pero que diablos fue eso...~', id)
			.catch(() => {
						kill.reply(from, 'Esa no! Impidieron mi acceso!\nQue desalmados!', id)
					})
            break
			
			
		case 'fb':
			if (args.length == 0) return kill.reply(from, 'Olvidaste insertar un enlace de facebook?', id)
            const fb = await axios.get(`http://arugaz.my.id/api/media/facebook?url=${body.slice(4)}`)
			const fbdw = fb.data.result.linkSD
            await kill.sendFileFromUrl(from, fbdw, 'video.mp4', 'Excelente video!\n~Pero que diablos paso?...~', id)
			.catch(() => {
						kill.reply(from, 'Dios mío, algún tipo de fuerza maligna me impidió terminar el comando!', id)
					})
            break


         case 'mp3':
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
            axios.get(`http://st4rz.herokuapp.com/api/yta2?url=${body.slice(5)}`)
            .then(async(rest) => {
					var m3pa = rest.data.result
					var m3ti = rest.data.title
					var m3tu = rest.data.thumb
					var m3fo = rest.data.ext
					await kill.sendFileFromUrl(from, m3tu, '', `Titulo: ${m3ti}\nFormato:${m3fo}\n\nEspero haberlo hecho bien y ... ¡ahora solo espera! Pero evita usar de nuevo hasta que termine emm!`, id)
					await kill.sendFileFromUrl(from, m3pa, '', '', id)
                })
			break


        case 'mp4':
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
            axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=${body.slice(5)}`)
            .then(async(rest) => {
					var mp4 = rest.data.result
					var tmp4 = rest.data.title
					var m4tu = rest.data.thumb
					var m4fo = rest.data.ext
					await kill.sendFileFromUrl(from, m4tu, '', `Titulo: ${tmp4}\nFormato:${m4fo}\n\nEspero haberlo hecho bien y ... ¡ahora solo espera! Pero evita usar de nuevo hasta que termine emm!`, id)
					await kill.sendFileFromUrl(from, mp4, `video.mp4`, tmp4, id)
                })
			break
			
        case 'video':
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamentente.', id)
            axios.get(`https://arugaz.my.id/api/media/ytsearch?query=${body.slice(7)}`)
            .then(async (res) => {
				const vyre = res.data.result[0].uploadDate
				if (vyre == '' || vyre == 'null' || vyre == null || vyre == undefined || vyre == 'undefined') {
					var videore = 'Indefinido'
				} else if (vyre.endsWith('years ago')) {
                    var videore = vyre.replace('years ago', 'Anos atrás')
				} else if (vyre.endsWith('hours ago')) {
                    var videore = vyre.replace('hours ago', 'Horas atrás')
				} else if (vyre.endsWith('minutes ago')) {
                    var videore = vyre.replace('minutes ago', 'Minutos atrás')
				} else if (vyre.endsWith('day ago')) {
                    var videore = vyre.replace('day ago', 'Dia atrás')
				} else if (vyre.endsWith('months ago')) {
                    var videore = vyre.replace('months ago', 'Meses atrás')
				} else if (vyre.endsWith('seconds ago')) {
                    var videore = vyre.replace('seconds ago', 'Segundos atrás')
				}
				const size = await axios.get(`http://st4rz.herokuapp.com/api/ytv?url=http://youtu.be/${res.data.result[0].id}`)
				const fsize = size.data.filesize.replace(' MB', '').replace('Download  ', 'Imposible calcular')
				console.log(fsize)
				const impo = size.data.filesize.replace('Download  ', 'un peso mucho mayor que no puedo calcular')
				if (fsize >= 16.0 || size.data.filesize.endsWith('Download  ') || size.data.filesize.endsWith('GB')) {
					kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de carga de videos es de 16 MB, y este tiene ${impo.replace('    ', ' ')}.`, id)
				} else {
					await kill.sendFileFromUrl(from, `${res.data.result[0].thumbnail}`, ``, `Titulo: ${res.data.result[0].title}\n\nDuração: ${res.data.result[0].duration} segundos\n\nFoi feito a: ${videore}\n\nVisualizações: ${res.data.result[0].viewCount}\n\nPeso: ${size.data.filesize}\n\nEspero que eu tenha acertado e...agora é so esperar! Mas evite usar novamente até que eu termine emm!`, id)
					console.log(res.data.result[0].title)
					axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=https://youtu.be/${res.data.result[0].id}`)
					.then(async(rest) => {
						var mp4 = rest.data.result
						var tmp4 = rest.data.title
						await kill.sendFileFromUrl(from, mp4, `video.mp4`, tmp4, id)
					})
				}
			})
            break
			
			
        case 'play':
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
            axios.get(`https://arugaz.my.id/api/media/ytsearch?query=${body.slice(6)}`)
            .then(async (res) => {
				const pyre = res.data.result[0].uploadDate
				if (pyre == '' || pyre == 'null' || pyre == null || pyre == undefined || pyre == 'undefined') {
					var playre = 'Indefinido'
				} else if (pyre.endsWith('years ago')) {
                    var playre = pyre.replace('years ago', 'Anos atrás')
				} else if (pyre.endsWith('hours ago')) {
                    var playre = pyre.replace('hours ago', 'Horas atrás')
				} else if (pyre.endsWith('minutes ago')) {
                    var playre = pyre.replace('minutes ago', 'Minutos atrás')
				} else if (pyre.endsWith('day ago')) {
                    var playre = pyre.replace('day ago', 'Dia atrás')
				} else if (pyre.endsWith('months ago')) {
                    var playre = pyre.replace('months ago', 'Meses atrás')
				} else if (pyre.endsWith('seconds ago')) {
                    var playre = pyre.replace('seconds ago', 'Segundos atrás')
				}
				const asize = await axios.get(`http://st4rz.herokuapp.com/api/yta?url=http://youtu.be/${res.data.result[0].id}`)
				const afsize = asize.data.filesize.replace(' MB', '')
				console.log(afsize)
				if (afsize >= 16.0 || asize.data.filesize.endsWith('GB')) {
					kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${asize.data.filesize}.`, id)
				} else {
					await kill.sendFileFromUrl(from, `${res.data.result[0].thumbnail}`, ``, `Titulo: ${res.data.result[0].title}\n\nDuração: ${res.data.result[0].duration} segundos\n\nFoi feito a: ${playre}\n\nPuntos de vista: ${res.data.result[0].viewCount}\n\nEspero haberlo hecho bien y ... ¡ahora solo espera! Pero evita usarlo de nuevo hasta que termine emm!`, id)
					console.log(res.data.result[0].title)
					axios.get(`http://st4rz.herokuapp.com/api/yta2?url=http://youtu.be/${res.data.result[0].id}`)
					.then(async(rest) => {
						var m3pa = rest.data.result
						var m3ti = rest.data.title
						await kill.sendFileFromUrl(from, m3pa, '', '', id)
					})
				}
			})
            break
			

		case 'qr':
			const qrco = body.slice(4)
			await kill.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrco}`, '', 'Su mensaje fue insertado en este Código QR, disfrútelo.\n\nB KillovSky - Íris.', id)
			break


		case 'send':
			if (args.length == 0) return kill.reply(from, '¿Olvidaste poner un enlace de imagen jaja?!', id)
			const file = body.slice(6)
			if (file.endsWith('.jpg')) {
				await kill.sendFileFromUrl(from, file, '', '', id)
				.catch(() => {
					kill.reply(from, '¡Ah! Esto no parece ser una imagen o puede ser más grande de lo esperado...', id)
				})
			} else if (file.endsWith('.png')) {
				await kill.sendFileFromUrl(from, file, '', '', id)
				.catch(() => {
					kill.reply(from, '¡Ah! Esto no parece ser una imagen o puede ser más grande de lo esperado...', id)
				})
            } else {
                kill.reply(from, 'Lo sentimos, solo se permiten fotos, exclusivamente .jpg e .png ^^', id)
            }
			break
			
			
        case 'quote':
		    arks = body.trim().split(/ +/).slice(1)
            ark = body.trim().substring(body.indexOf(' ') + 1)
            if (arks.length >= 1) {
                const quotes = ark.split('|')[0]
                const qauth = ark.split('|')[1]
                kill.reply(from, '¡Entendido! Espere a que se complete el comando.!', id)
                const quoteimg = await killo.quote(quotes, qauth)
				console.log(quoteimg)
                await kill.sendFileFromUrl(from, quoteimg, '', 'Compreensivel.', id)
                .catch(() => {
					kill.reply(from, '¡Guauu! Parece que me negaron subir la foto....', id)
				})
            } else {
                kill.reply(from, `¿Realmente lo estás usando correctamente?`)
            }
            break		


       case 'translate':
            if (args.length != 1) return kill.reply(from, `Esto es demasiado pequeño para traducirlo...`, id)
            if (!quotedMsg) return kill.reply(from, `Olvidaste marcar el mensaje para traducir.`, id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(quoteText, args[0])
                .then((result) => kill.reply(from, result, id))
                .catch(() => kill.reply(from, 'Bloqueo de IP de Google o error de traducción...'))
            break


        case 'tts': // Esto es enorme, haz qué, soy de Bahía para jugar en otro juego
            if (args.length == 1) return kill.reply(from, 'Comprensible, pero no utilizable, olvidó definir el idioma y la frase.')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
			const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const ttsAf = require('node-gtts')('af')
            const ttsSq = require('node-gtts')('sq')
			const ttsHy = require('node-gtts')('hy')
            const ttsCa = require('node-gtts')('ca')
			const ttsZh = require('node-gtts')('zh')
			const ttsCn = require('node-gtts')('zh-cn')
			const ttsTw = require('node-gtts')('zh-tw')
			const ttsYu = require('node-gtts')('zh-yue')
			const ttsHr = require('node-gtts')('hr')
			const ttsCs = require('node-gtts')('cs')
            const ttsDa = require('node-gtts')('da')
            const ttsNl = require('node-gtts')('nl')
			const ttsAu = require('node-gtts')('en-au')
            const ttsUk = require('node-gtts')('en-uk')
			const ttsUs = require('node-gtts')('en-us')
			const ttsEo = require('node-gtts')('eo')
			const ttsFi = require('node-gtts')('fi')
			const ttsFr = require('node-gtts')('fr')
			const ttsEl = require('node-gtts')('el')
			const ttsHt = require('node-gtts')('ht')
            const ttsHi = require('node-gtts')('hi')
            const ttsHu = require('node-gtts')('hu')
			const ttsIs = require('node-gtts')('is')
            const ttsIt = require('node-gtts')('it')
            const ttsKo = require('node-gtts')('ko')
            const ttsLa = require('node-gtts')('la')
			const ttsLv = require('node-gtts')('lv')
            const ttsMk = require('node-gtts')('mk')
			const ttsNo = require('node-gtts')('no')
			const ttsPl = require('node-gtts')('pl')
			const ttsRo = require('node-gtts')('ro')
			const ttsSr = require('node-gtts')('sr')
			const ttsSk = require('node-gtts')('sk')
			const ttsEs = require('node-gtts')('es')
            const ttsSp = require('node-gtts')('es-es')
            const ttsSu = require('node-gtts')('es-us')
			const ttsSw = require('node-gtts')('sw')
            const ttsSv = require('node-gtts')('sv')
			const ttsTa = require('node-gtts')('ta')
			const ttsTh = require('node-gtts')('th')
			const ttsTr = require('node-gtts')('tr')
			const ttsVi = require('node-gtts')('vi')
			const ttsCy = require('node-gtts')('cy')
            const ttsDe = require('node-gtts')('de')
            const ttsBr = require('node-gtts')('pt-br')
			const ttsPt = require('node-gtts')('pt')
            const ttsRu = require('node-gtts')('ru')
            const dataText = body.slice(8)
            if (dataText === '') return kill.reply(from, '¡Ahora tenemos un baka! Olvidaste poner la frase para hablar.', id)
            if (dataText.length > 500) return kill.reply(from, 'Lo siento, pero el límite es de 500 letras....', id)
            var dataBhs = body.slice(5, 7)
			if (dataBhs == 'id') {
                ttsId.save('./lib/media/tts/resId.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./lib/media/tts/resEn.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./lib/media/tts/resJp.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resJp.mp3', id)
                })
            } else if (dataBhs == 'de') {
                ttsDe.save('./lib/media/tts/resDe.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resDe.mp3', id)
                })
            } else if (dataBhs == 'br') {
                ttsBr.save('./lib/media/tts/resBr.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resBr.mp3', id)
                })
            } else if (dataBhs == 'ru') {
                ttsRu.save('./lib/media/tts/resRu.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resRu.mp3', id)
                })
			} else if (dataBhs == 'ar') {
                ttsAr.save('./lib/media/tts/resAr.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resAr.mp3', id)
                })
            } else if (dataBhs == 'pt') {
                ttsPt.save('./lib/media/tts/resPt.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resPt.mp3', id)
                })
            } else if (dataBhs == 'af') {
                ttsAf.save('./lib/media/tts/resAf.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resAf.mp3', id)
                })
            } else if (dataBhs == 'sq') {
                ttsSq.save('./lib/media/tts/resSq.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resSq.mp3', id)
                })
            } else if (dataBhs == 'hy') {
                ttsHy.save('./lib/media/tts/resHy.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resHy.mp3', id)
                })
            } else if (dataBhs == 'ca') {
                ttsCa.save('./lib/media/tts/resCa.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resCa.mp3', id)
                })
            } else if (dataBhs == 'zh') {
                ttsZh.save('./lib/media/tts/resZh.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resZh.mp3', id)
                })		
            } else if (dataBhs == 'cn') {
                ttsCn.save('./lib/media/tts/resCn.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resCn.mp3', id)
                })
            } else if (dataBhs == 'tw') {
                ttsTw.save('./lib/media/tts/resTw.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resTw.mp3', id)
                })
            } else if (dataBhs == 'yu') {
                ttsYu.save('./lib/media/tts/resYue.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resYue.mp3', id)
                })
			} else if (dataBhs == 'hr') {
                ttsHr.save('./lib/media/tts/resHr.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resHr.mp3', id)
                })
            } else if (dataBhs == 'cs') {
                ttsCs.save('./lib/media/tts/resCs.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resCs.mp3', id)
                })
            } else if (dataBhs == 'da') {
                ttsDa.save('./lib/media/tts/resDa.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resDa.mp3', id)
                })
            } else if (dataBhs == 'nl') {
                ttsNl.save('./lib/media/tts/resNl.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resNl.mp3', id)
                })
            } else if (dataBhs == 'au') {
                ttsAu.save('./lib/media/tts/resAu.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resAu.mp3', id)
                })
            } else if (dataBhs == 'uk') {
                ttsUk.save('./lib/media/tts/resUk.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resUk.mp3', id)
                })
            } else if (dataBhs == 'us') {
                ttsUs.save('./lib/media/tts/resUs.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resUs.mp3', id)
                })
            } else if (dataBhs == 'eo') {
                ttsEo.save('./lib/media/tts/resEo.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resEo.mp3', id)
                })
            } else if (dataBhs == 'fi') {
                ttsFi.save('./lib/media/tts/resFi.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resFi.mp3', id)
                })
            } else if (dataBhs == 'fr') {
                ttsFr.save('./lib/media/tts/resFr.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resFr.mp3', id)
                })
            } else if (dataBhs == 'el') {
                ttsEl.save('./lib/media/tts/resEl.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resEl.mp3', id)
                })
            } else if (dataBhs == 'ht') {
                ttsHt.save('./lib/media/tts/resJp.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resHt.mp3', id)
                })
            } else if (dataBhs == 'hi') {
                ttsHi.save('./lib/media/tts/resHi.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resHi.mp3', id)
                })
            } else if (dataBhs == 'hu') {
                ttsHu.save('./lib/media/tts/resHu.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resHu.mp3', id)
                })
            } else if (dataBhs == 'is') {
                ttsIs.save('./lib/media/tts/resIs.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resIs.mp3', id)
                })
			} else if (dataBhs == 'it') {
                ttsIt.save('./lib/media/tts/resIt.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resIt.mp3', id)
                })
            } else if (dataBhs == 'ko') {
                ttsKo.save('./lib/media/tts/resKo.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resKo.mp3', id)
                })
            } else if (dataBhs == 'la') {
                ttsLa.save('./lib/media/tts/resLa.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resLa.mp3', id)
                })
            } else if (dataBhs == 'lv') {
                ttsLv.save('./lib/media/tts/resLv.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resLv.mp3', id)
                })
            } else if (dataBhs == 'mk') {
                ttsMk.save('./lib/media/tts/resMk.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resMk.mp3', id)
                })
            } else if (dataBhs == 'no') {
                ttsNo.save('./lib/media/tts/resNo.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resNo.mp3', id)
                })
            } else if (dataBhs == 'pl') {
                ttsPl.save('./lib/media/tts/resPl.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resPl.mp3', id)
                })		
            } else if (dataBhs == 'ro') {
                ttsRo.save('./lib/media/tts/resRo.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resRo.mp3', id)
                })
            } else if (dataBhs == 'sr') {
                ttsSr.save('./lib/media/tts/resSr.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resSr.mp3', id)
                })
            } else if (dataBhs == 'sk') {
                ttsSk.save('./lib/media/tts/resSk.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resSk.mp3', id)
                })
			} else if (dataBhs == 'es') {
                ttsEs.save('./lib/media/tts/resEs.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resEs.mp3', id)
                })
            } else if (dataBhs == 'sp') {
                ttsSp.save('./lib/media/tts/resSp.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resSp.mp3', id)
                })
            } else if (dataBhs == 'su') {
                ttsSu.save('./lib/media/tts/resSu.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resSu.mp3', id)
                })
            } else if (dataBhs == 'sw') {
                ttsSw.save('./lib/media/tts/resSw.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resSk.mp3', id)
                })
            } else if (dataBhs == 'sv') {
                ttsSv.save('./lib/media/tts/resSv.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resSv.mp3', id)
                })
            } else if (dataBhs == 'ta') {
                ttsTa.save('./lib/media/tts/resTa.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resTa.mp3', id)
                })
            } else if (dataBhs == 'tr') {
                ttsTr.save('./lib/media/tts/resTr.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resTr.mp3', id)
                })
            } else if (dataBhs == 'vi') {
                ttsVi.save('./lib/media/tts/resVi.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resVi.mp3', id)
                })
            } else if (dataBhs == 'cy') {
                ttsCy.save('./lib/media/tts/resCy.mp3', dataText, function () {
                    kill.sendPtt(from, './lib/media/tts/resCy.mp3', id)
                })
            } else {
                kill.reply(from, `Hmm, '${body.slice(5, 7)}' no es un idioma compatible, para tipos de idiomas compatibles / idiomas.`, id)
            }
            break


        case 'idiomas':
            kill.sendText(from, lang, id)
            break
			
			
		case 'resposta':
			if (args.length == 0) return kill.reply(from, 'Falta una frase para agregar.', id)
			fs.appendFile('./lib/reply.txt', `\n${body.slice(10)}`)
			await kill.reply(from, 'Frase adicionada a Íris.', id)
			break


        case 'speak':
			const sppt = require('node-gtts')('pt-br')
			try {
				const spiris = await axios.get(`http://simsumi.herokuapp.com/api?text=${body.slice(7)}&lang=pt`)
				const a = spiris.data.success
				if (a == '') {
					console.log('Request falhou, usando respostas locais...')
					let rfua = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repy = rfua[Math.floor(Math.random() * rfua.length)]
					let resfl = repy.replace('%name$', '${name}').replace('%battery%', '${lvpc}')
					console.log(resfl)
					sppt.save('./lib/media/tts/resPtm.mp3', resfl, function () {
					kill.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
					})		
				} else {
					sppt.save('./lib/media/tts/resPtm.mp3', a, function () {
						kill.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
					})
				}
			} catch (error) {
					console.log('Request falhou, usando respostas locais...')
					let rfua = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repy = rfua[Math.floor(Math.random() * rfua.length)]
					let resfl = repy.replace('%name$', '${name}').replace('%battery%', '${lvpc}')
					console.log(resfl)
					sppt.save('./lib/media/tts/resPtm.mp3', resfl, function () {
					kill.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
					})
			}
			break
			

        case 'iris':
			try {
				const iris = await axios.get(`http://simsumi.herokuapp.com/api?text=${body.slice(6)}&lang=pt`)
				if (iris.data.success == '') {
					console.log('Request falhou, usando respostas locais...')
					let rndrl = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repl = rndrl[Math.floor(Math.random() * rndrl.length)]
					let resmf = repl.replace('%name$', `${name}`).replace('%battery%', `${lvpc}`)
					console.log(resmf)
					kill.reply(from, resmf, id)
				} else {
					await kill.reply(from, iris.data.success, id)
				}
			} catch (error) {
					console.log('Request falhou, usando respostas locais...')
					let rndrl = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repl = rndrl[Math.floor(Math.random() * rndrl.length)]
					let resmf = repl.replace('%name$', `${name}`).replace('%battery%', `${lvpc}`)
					console.log(resmf)
					kill.reply(from, resmf, id)
			}
			break


        case 'wallpaper':
            if (args.length == 0) return kill.reply(from, 'Necesitas decirme que quiere tu fondo de pantalla!', id)
            const quere = body.slice(6)
            const wallp = await wall(quere)
            console.log(wallp)
            await kill.sendFileFromUrl(from, wallp, 'wallp.jpg', '', id)
            break


        case 'ping':
            kill.sendText(from, `Apestar!\n_Mi velocidad es${processTime(t, moment())} segundos._`)
            break


        case 'criador':
            kill.sendContact(from, '50769258167')
			kill.reply(from, 'Si no responde, es porque esta ocupado.', id)
            break


        case 'donate':
		case 'doar':
            kill.sendText(from, donate, id)
            kill.sendContact(from, '50769258167')
            break


        case 'roll':
            const dice = Math.floor(Math.random() * 6) + 1
            await kill.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png')
            break


        case 'flip':
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
               kill.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png')
            } else {
               kill.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png')
            }
            break


       case 'poll':
            feature.getpoll(kill, message, pollfile, voterslistfile)
            break    


       case 'vote' :
            feature.voteadapter(kill, message, pollfile, voterslistfile)
            break


       case 'newpoll':
            feature.adminpollreset(kill, message, message.body.slice(9), pollfile, voterslistfile)
            break


       case 'ins': 
            feature.addcandidate(kill, message, message.body.slice(5), pollfile, voterslistfile)
            break


        case 'nsfw':
       	    const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (args.length !== 1) return kill.reply(from, 'Establecer habilitar o deshabilitar', id)
			if (isGroupMsg && isGroupOwner) {
				if (args[0].toLowerCase() == 'enable') {
					nsfw_.push(chat.id)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos NSFW habilitados en este grupo!', id)
				} else if (args[0].toLowerCase() == 'disable') {
					nsfw_.splice(chat.id, 1)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos NSFW habilitados en este grupo.', id)
				} else {
					kill.reply(from, 'Establecer habilitar o deshabilitar', id)
				}
			} else if (isGroupMsg && isOwner) {
				if (args[0].toLowerCase() == 'enable') {
					nsfw_.push(chat.id)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos NSFW habilitados en este grupo!', id)
				} else if (args[0].toLowerCase() == 'disable') {
					nsfw_.splice(chat.id, 1)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos NSFW habilitados en este grupo.', id)
				} else {
					kill.reply(from, 'Establecer habilitar o deshabilitar', id)
				}
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores usan este comando asique no sea arrecho...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'welcome':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
			if (!isOwner) return kill.reply(from, mess.error.Kl, id)
            if (args.length !== 1) return kill.reply(from, 'Olvidaste ponértelo si quieres que se active [on], o desactivar [off].', id)
			if (args[0] == 'on') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                kill.reply(from, '¡Hecho! Se han activado las funciones Bienvenida y Adiós.', id)
			} else if (args[0] == 'off') {
				let welcom = welkom.indexOf(chatId)
                welkom.splice(welcom, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                kill.reply(from, '¡Entendido! Desactivé las opciones de Bienvenida y Adiós.', id)
            } else {
                kill.reply(from, 'Olvidaste ponértelo si quieres que se active [on], o desactivar [off].', id)
            }
            break
			
			
		case 'macaco':
			var item = ["macaco", "gorila", "chimpanzé", "orangotango", "babuino"]
    	    var esco = item[Math.floor(Math.random() * item.length)]
			console.log(esco)
			var maca = "https://api.fdci.se/rep.php?gambar=" + esco
			axios.get(maca)
			    .then((result) => {
				var mon = JSON.parse(JSON.stringify(result.data))
				var nkey = mon[Math.floor(Math.random() * mon.length)]
              	kill.sendFileFromUrl(from, nkey, "", "Saludos soy el dios mono y vine a bendecir.", id)
			})
			break
			
			
		case 'ball':
			const ball = await axios.get('https://nekos.life/api/v2/img/8ball')
			await kill.sendFileFromUrl(from, ball.data.url, '', '', id)
			break
			
			
		case 'cafune':
			if (double == 1) {
				const cfne = await axios.get('https://nekos.life/api/v2/img/pat')
				await kill.sendFileFromUrl(from, cfne.data.url, '', '', id)
			} else if (double == 2) {
				const cfne = await axios.get('https://nekos.life/api/v2/img/cuddle')
				await kill.sendFileFromUrl(from, cfne.data.url, '', '', id)
			}
			break			
			
			
		case 'quack':
			const patu = await axios.get('https://nekos.life/api/v2/img/goose')
			await kill.sendFileFromUrl(from, patu.data.url, '', '', id)
			break
			

		case 'poke':
			const teco = await axios.get('https://nekos.life/api/v2/img/poke')
			await kill.sendFileFromUrl(from, teco.data.url, '', '', id)
			break
			

		case 'cocegas':
			const cocegas = await axios.get('https://nekos.life/api/v2/img/tickle')
			await kill.sendFileFromUrl(from, cocegas.data.url, '', '', id)
			break
			
			
		case 'feed':
			const feed = await axios.get('https://nekos.life/api/v2/img/tickle')
			await kill.sendFileFromUrl(from, feed.data.url, '', '', id)
			break
			
			
		case 'baka':
			const baka = await axios.get('https://nekos.life/api/v2/img/baka')
			await kill.sendFileFromUrl(from, baka.data.url, '', '', id)
			break
			
			
		case 'lizard':
		case 'lagarto':
			const lizard = await axios.get('https://nekos.life/api/v2/img/lizard')
			await kill.sendFileFromUrl(from, lizard.data.url, '', '', id)
			break
			

        case 'google':
            if (args.length == 0) return kill.reply(from, `Escribe algo para buscar.`, id)
		    const googleQuery = body.slice(8)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Resultados da pesquisa Google de: ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n*Titulo >* ${results[i].title}\n\n*descripción >* ${results[i].snippet}\n\n*Link >* ${results[i].link}`
            }
                kill.reply(from, vars, id)
            }).catch(e => {
                kill.reply(from, 'Error al buscar en google.', id)
            })
            break
			
			
       case 'clima':
       		if (args.length == 0) return kill.reply(from, 'Ingrese el nombre de su ciudad.', id)
            try {
				const clima = await axios.get(`https://pt.wttr.in/${body.slice(7)}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
				await kill.sendFileFromUrl(from, `https://wttr.in/${body.slice(7)}.png`, '', `La foto de arriba contiene un pronóstico de 2 días, el mensaje de abajo es el clima ahora.\n\n${clima.data}`, id)
            } catch {
                kill.reply(from, 'extraño...\nAsegúrate de no usar acentos bien?', id)
            }
            break
			
			
        case 'boy':
    	    var hite = ["eboy", "garoto", "homem", "men", "garoto oriental", "japanese men", "pretty guy", "homem bonito"];
    	    var hesc = hite[Math.floor(Math.random() * hite.length)];
			var men = "https://api.fdci.se/rep.php?gambar=" + hesc;
			axios.get(men)
            	.then((result) => {
				var h = JSON.parse(JSON.stringify(result.data));
				var cewek =  h[Math.floor(Math.random() * h.length)];
              	kill.sendFileFromUrl(from, cewek, "result.jpg", "Homens...", id)
			})
			break
			
			
      case 'moddroid':
            if (args.length == 0) return kill.reply(from, 'Ingrese un nombre para buscar!', id)
            try {
                const moddroid = await axios.get('https://tobz-api.herokuapp.com/api/moddroid?q=' + body.slice(10)  + '&apikey=BotWeA')
                if (moddroid.data.error) return kill.reply(from, moddroid.data.error, id)
                const modo = moddroid.data.result[0]
                const resmod = `• *Titulo* : ${modo.title}\n\n• *Quem criou* : ${modo.publisher}\n\n• *Peso* : ${modo.size}\n\n• *MOD* : ${modo.mod_info}\n\n• *Versão* : ${modo.latest_version}\n\n• *Gênero* : ${modo.genre}\n\n• *Link* : ${modo.link}\n\n• *Download* : ${modo.download}`
                kill.sendFileFromUrl(from, modo.image, 'MODDROID.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }
            break
			
			
        case 'happymod':
            if (args.length == 0) return kill.reply(from, 'Ingrese un nombre para buscar!', id)
            try {
                const happymod = await axios.get('https://tobz-api.herokuapp.com/api/happymod?q=' + body.slice(10)  + '&apikey=BotWeA')
                if (happymod.data.error) return kill.reply(from, happymod.data.error, id)
                const modo = happymod.data.result[0]
                const resmod = `• *Titulo* : ${modo.title}\n\n• *Compra* : ${modo.purchase}\n\n• *Peso* : ${modo.size}\n\n• *Root* : ${modo.root}\n\n• *Versão* : ${modo.version}\n\n• *Preço* : ${modo.price}\n\n• *Link* : ${modo.link}\n\n• *Download* : ${modo.download}`
                kill.sendFileFromUrl(from, modo.image, 'HAPPYMOD.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }
            break
			

        case 'girl':
    	    var items = ["garota adolescente", "saycay", "alina nikitina", "belle delphine", "teen girl", "teen cute", "japanese girl", "garota bonita oriental", "oriental girl", "korean girl", "chinese girl", "e-girl", "teen egirl", "brazilian teen girl", "pretty teen girl", "korean teen girl", "garota adolescente bonita", "menina adolescente bonita", "egirl", "cute girl"];
    	    var cewe = items[Math.floor(Math.random() * items.length)];
			console.log(cewe)
			var girl = "https://api.fdci.se/rep.php?gambar=" + cewe;
			axios.get(girl)
            	.then((result) => {
				var b = JSON.parse(JSON.stringify(result.data));
				var cewek =  b[Math.floor(Math.random() * b.length)];
              	kill.sendFileFromUrl(from, cewek, "result.jpg", "Ella es hermosa, ¿no crees?", id)
			})
			break


        case 'anime':
		    if (args.length == 0) return kill.reply(from, 'Especifica un nombre de anime!', id)
            const keyword = message.body.replace('/anime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await kill.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Es una pena, no encontré ningún resultado....', id)
              console.log("Sent!")
              return null
              }
            const { title, episodes, url, synopsis, rated, score, image_url } = parsed.results[0]
            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(synopsis, 'pt')
                .then(async (syno) => {
				    const content = `*Anime encontrado!*\n\n✨️ *Titulo:* ${title}\n\n🎆️ *Episodios:* ${episodes}\n\n💌️ *Clasificación:* ${rated}\n\n❤️ *Nota:* ${score}\n\n💚️ *Sinopse:* ${syno}\n\n🌐️ *Link*: ${url}`
					await kill.sendImage(from, base64, title, content, id)
				})
           } catch (err) {
             console.error(err.message)
             await kill.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Es una pena, no encontré ningún resultado...')
           }
          break


        case 'nh':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (args.length == 1) {
					const nuklir = body.split(' ')[1]
					kill.reply(from, mess.wait, id)
					const cek = await nhentai.exists(nuklir)
					if (cek == true)  {
						try {
							const api = new API()
							const pic = await api.getBook(nuklir).then(book => {
								return api.getImageURL(book.cover)
							})
							const dojin = await nhentai.getDoujin(nuklir)
							const { title, details, link } = dojin
							const { parodies, tags, artists, groups, languages, categories } = await details
							var teks = `*Titulo* : ${title}\n\n*Parodia de* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artistas* : ${artists.join(', ')}\n\n*Grupos* : ${groups.join(', ')}\n\n*Linguagens* : ${languages.join(', ')}\n\n*Categoria* : ${categories}\n\n*Link* : ${link}`
							await kill.sendFileFromUrl(from, pic, '', teks + '\n\n' + 'Espera, estoy enviando el hentai, puede tardar varios minutos dependiendo de la cantidad de páginas.', id)
							await kill.sendFileFromUrl(from, `https://nhder.herokuapp.com/download/nhentai/${nuklir}/zip`, 'hentai.zip', '', id)
						} catch (err) {
							kill.reply(from, '[❗] Ops! Error de entrega!', id)
						}
					} else {
						kill.reply(from, '[❗] Dice que no encontró resultados...')
					}
				} else {
					kill.reply(from, 'Lo usó mal, intente verificar si el comando es correcto.')
				}
			} else {
				if (args.length == 1) {
					const nuklir = body.split(' ')[1]
					kill.reply(from, mess.wait, id)
					const cek = await nhentai.exists(nuklir)
					if (cek == true)  {
						try {
							const api = new API()
							const pic = await api.getBook(nuklir).then(book => {
								return api.getImageURL(book.cover)
							})
							const dojin = await nhentai.getDoujin(nuklir)
							const { title, details, link } = dojin
							const { parodies, tags, artists, groups, languages, categories } = await details
							var teks = `*Titulo* : ${title}\n\n*Parodia de* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artistas* : ${artists.join(', ')}\n\n*Grupos* : ${groups.join(', ')}\n\n*Lenguaje* : ${languages.join(', ')}\n\n*Categoria* : ${categories}\n\n*Link* : ${link}`
							await kill.sendFileFromUrl(from, pic, '', teks + '\n\n' + 'Espera, estoy enviando el hentai, puede tardar varios minutos dependiendo de la cantidad de páginas.', id)
							await kill.sendFileFromUrl(from, `https://nhder.herokuapp.com/download/nhentai/${nuklir}/zip`, 'hentai.zip', '', id)
						} catch (err) {
                        kill.reply(from, '[❗] Ops! Envío de errores!', id)
						}
					} else {
						kill.reply(from, '[❗] Dice que no encontró resultados...')
					}
				} else {
					kill.reply(from, 'Lo usó mal, intente verificar si el comando es correcto.')
				}
			}
			break


        case 'profile':
            if (isGroupMsg) {
				if (!quotedMsg) {
					var pic = await kill.getProfilePicFromServer(author)
					var namae = pushname
					var sts = await kill.getStatus(author)
					var adm = isGroupAdmins
					const { status } = sts
					if (pic == undefined) {
						var pfp = errorurl 
					} else {
						var pfp = pic
					} 
					await kill.sendFileFromUrl(from, pfp, 'pfp.jpg', `*Datos de perfil..* ✨️ \n\n 🔖️ *¿Cuál es tu etiqueta de usuario?? ${namae}*\n\n💌️ *Frase de recado?*\n${status}\n\n 👑️ *Eres un administrador gay? ${adm}*`)
			    } else if (quotedMsg) {
					var qmid = quotedMsgObj.sender.id
					var pic = await kill.getProfilePicFromServer(qmid)
					var sts = await kill.getStatus(qmid)
					const { status } = sts
					if (pic == undefined) {
						var pfp = errorurl 
					} else {
						var pfp = pic
					}
					await kill.sendFileFromUrl(from, pfp, 'pfo.jpg', `${status}`)
				}
			}
            break


        case 'brainly':
            if (args.length >= 2){
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return kill.reply(from, 'Maximo de 10 palabras.', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            kill.reply(from, `➸ *Pregunta* : ${x.pertanyaan}\n\n➸ *responder* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            kill.reply(from, `➸ *Pregunta* : ${x.pertanyaan}\n\n➸ *responder* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link da imagen* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                kill.reply(from, 'Oops! Lo escribiste bien?', id)
            }
            break


		case 'store':
			if (args.length == 0) return kill.reply(from, 'Especifique el nombre de la aplicación que desea buscar.', id)
			kill.reply(from, mess.wait, id)
			await sleep(5000)
			const stsp = await search(`${body.slice(7)}`)
            translate(stsp.description, 'pt')
                .then((playst) => kill.sendFileFromUrl(from, stsp.icon, '', `*Nome >* ${stsp.name}\n\n*Link >* ${stsp.url}\n\n*Precio >* ${stsp.price}\n\n*Descripcion >* ${playst}\n\n*Nota >* ${stsp.rating}/5\n\n*Desenvolvedora >* ${stsp.developer.name}\n\n*Otros>* ${stsp.developer.url}`, id))
			break


        case 'search':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                kill.reply(from, 'buscando....\n\nEvite usar esto con fan-mades, dibujos de pinterest u otros, use solo con impresiones de episodios de anime, ok?', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		kill.reply(from, 'Es como pudo suceder, no hay respuesta al respecto.', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Puede ser ~ o ser ~ incorrecto...* :\n\n'
                    }
                    teks += `➸ *Titulo en Japonês* : ${title}\n➸ *Titulo em China* : ${title_chinese}\n➸ *Titulo em Roma* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Episodio* : ${episode.toString()}\n`
                    teks += `➸ *Similaridade dos traços* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    kill.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        kill.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    kill.reply(from, 'Ora ora, recebi un error.', id)
                })
            } else {
                kill.sendFile(from, './lib/media/img/tutod.jpg', 'Tutor.jpg', 'Evite usar esto con fan-mades, dibujos de pinterest u otros, use solo con impresiones de episodios de anime, ok?', id)
            }
            break

        case 'link':
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
            if (isGroupMsg) {
                const inviteLink = await kill.getGroupInviteLink(groupId);
                kill.sendLinkWithAutoPreview(from, inviteLink, `\nAqui está el link del grupo ${name}!`)
            } else {
            	kill.reply(from, 'Ops, este es un comando de grupo solamente.', id)
            }
            break


        case 'broad':
            if (!isOwner) return kill.reply(from, 'Solo el creador tiene acceso a este comando.', id)
            let msg = body.slice(6)
            const chatz = await kill.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await kill.getChatById(ids)
                if (!cvk.isReadOnly) await kill.sendText(ids, `[Transmisión del propietario de Iris]\n\n${msg}`)
            }
            kill.reply(from, 'Broadcast Sucedida!', id)
            break
			
        case 'ptt':
            if (quotedMsgObj) {
                let encryptMedia
                let replyOnReply = await kill.getMessageById(quotedMsgObj.id)
                let obj = replyOnReply.quotedMsgObj
                if (/ptt|audio/.test(quotedMsgObj.type)) {
                    encryptMedia = quotedMsgObj
                    if (encryptMedia.animated) encryptMedia.mimetype = ''
                } else if (obj && /ptt|audio/.test(obj.type)) {
                    encryptMedia = obj
                } else return
                const _mimetype = encryptMedia.mimetype
                const mediaData = await decryptMedia(encryptMedia)
                await kill.sendPtt(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, '', id)
            } else kill.reply(from, 'Usa esto en audios!', id)
            break
			
			
        case 'get':
            if (quotedMsgObj) {
                let encryptMedia
                let replyOnReply = await kill.getMessageById(quotedMsgObj.id)
                let obj = replyOnReply.quotedMsgObj
                if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
                    encryptMedia = quotedMsgObj
                    if (encryptMedia.animated) encryptMedia.mimetype = ''
                } else if (obj && /ptt|audio|video|image/.test(obj.type)) {
                    encryptMedia = obj
                } else return
                const _mimetype = encryptMedia.mimetype
                const mediaData = await decryptMedia(encryptMedia)
                await kill.sendFile(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, '', 'S2', encryptMedia.id)
            } else kill.reply(from, 'Incluso hay un archivo sobre eso?', id)
            break


        case 'adms':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await kill.sendTextWithMentions(from, mimin)
            break


        case 'groupinfo' :
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            let admgp = ''
            for (let admon of groupAdmins) {
                admgp += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
			var gpOwner = chat.groupMetadata.owner.replace(/@c.us/g, '')
            var welgrp = welkom.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var lzex = exsv.includes(chat.id)
            var grouppic = await kill.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await kill.sendFileFromUrl(from, pfp, 'group.png', ``, id)
			await kill.sendTextWithMentions(from, `*${groupname}*\n\n*🌐️ Miembros > ${totalMem}*\n\n*💌️ Welcome|Goodby > ${welgrp}*\n\n*🌙 Exclusivos(Anti-Links, Anti-Porno...) >  ${lzex}*\n\n*⚜️ Contenido adulto > ${ngrp}*\n\n*📃️ Descripcion >V*\n ${desc}\n\n*🌙 Propietario >* @${gpOwner}\n\n*☀️ Administradores gay >V*\n${admgp}`, id)
			break
			
			
        case 'ownergroup':
            if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            const Owner_ = chat.groupMetadata.owner
            await kill.sendTextWithMentions(from, `@${Owner_} fue quien creó este cabaret.`)
            break
			

		case 'maps':
            if (args.length == 0) return kill.reply(from, `Pon un nombre de lugar ahí`, id)
            const mapz = body.slice(6)
            try {
				const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
				const { gambar } = mapz2.data
				const pictk = await bent("buffer")(gambar)
				const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
				kill.sendImage(from, base64, 'maps.jpg', `*Foto do mapa de ${mapz}*`)
            } catch (err) {
				console.error(err.message)
				await kill.reply(from, 'Algo salió mal aquí, lo siento.', id)
			}
			break
			
			
		case 'sip':
			if (args.length == 1) {
				const ip = await axios.get(`http://ipwhois.app/json/${body.slice(5)}`)
				await kill.sendLinkWithAutoPreview(from, `http://www.google.com/maps/place/${ip.data.latitude},${ip.data.longitude}`, `\n✪ IP: ${ip.data.ip}\n\n✪ Tipo: ${ip.data.type}\n\n✪ Region: ${ip.data.region}\n\n✪ Ciudad: ${ip.data.city}\n\n✪ Latitud: ${ip.data.latitude}\n\n✪ Longitud: ${ip.data.longitude}\n\n✪ Provedor: ${ip.data.isp}\n\n✪ Continente: ${ip.data.continent}\n\n✪ Sigla de continente: ${ip.data.continent_code}\n\n✪ País: ${ip.data.country}\n\n✪ Sigla de País: ${ip.data.country_code}\n\n✪ Capital de País: ${ip.data.country_capital}\n\n✪ DDI: ${ip.data.country_phone}\n\n✪ Países Vecinos: ${ip.data.country_neighbours}\n\n✪ horario: ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n\n✪ Moneda: ${ip.data.currency}\n\n✪ Sigla de Moneda: ${ip.data.currency_code}\n\nBusca de IP realizada por Íris - KillovSky!`, id)
            } else {
				await kill.reply(from, 'Especifique un IP de tipo IPV4.', id)
            }
			break
			
			
		case 'scep':
			if (args.length == 1) {
				const cep = await axios.get(`https://viacep.com.br/ws/${body.slice(6)}/json/`)
				await kill.reply(from, `✪ CEP: ${cep.data.cep}\n\n✪ Lugar público: ${cep.data.logradouro}\n\n✪ Complemento: ${cep.data.complemento}\n\n✪ Barrio: ${cep.data.bairro}\n\n✪ Estado: ${cep.data.localidade}\n\n✪ DDD: ${cep.data.ddd}\n\n✪ Sigla de Estado: ${cep.data.uf}\n\n✪ Código IBGE: ${cep.data.ibge}\n\n✪ Código GIA: ${cep.data.gia}\n\n✪ Código Siafi: ${cep.data.siafi}\n\nBusca de CEP hecho por Íris - KillovSky.`, id)
            } else {
				await kill.reply(from, 'Especifique um CEP.', id)
            }
			break


        case 'everyone':
			if (isGroupMsg && isGroupAdmins) {
				const groupMem = await kill.getGroupMembers(groupId)
				let hehe = `═✪〘 ¡Hola! Todo marcado! 〙✪═\n═✪〘 Assunto: ${body.slice(10)} 〙✪═\n\n`
				for (let i = 0; i < groupMem.length; i++) {
					hehe += '- '
					hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
				}
				hehe += '\n═✪〘 Gracias gay <3 〙✪═'
				await sleep(2000)
				await kill.sendTextWithMentions(from, hehe, id)
			} else if (isGroupMsg && isOwner) {
				const groupMem = await kill.getGroupMembers(groupId)
				let hehe = `═✪〘 Hola! Todo marcado! 〙✪═\n═✪〘 Assunto: ${body.slice(10)} 〙✪═\n\n`
				for (let i = 0; i < groupMem.length; i++) {
					hehe += '- '
					hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
				}
				hehe += '\n═✪〘 Gracias gay <3 〙✪═'
				await sleep(2000)
				await kill.sendTextWithMentions(from, hehe, id)
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'random':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            const memran = await kill.getGroupMembers(groupId)
            const randme = memran[Math.floor(Math.random() * memran.length)]
			console.log(randme.id)
            await kill.sendTextWithMentions(from, `═✪〘 Te han seleccionado! 〙✪═ \n\n @${randme.id.replace(/@c.us/g, '')}\n\n═✪〘 Para: ${body.slice(8)} 〙✪═`)
            await sleep(2000)
            break


        case 'kickall':
            const isdonogroup = sender.id === chat.groupMetadata.owner
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isdonogroup) return kill.reply(from, 'Solo el propietario del grupo puede usar esto.', id)
            if (!isBotGroupAdmins) return kill.reply(from, 'Necesito ser una admin', id)
            const allMem = await kill.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
                    console.log('Pulei um ADM.')
                } else {
                    await kill.removeParticipant(groupId, allMem[i].id)
                }
            }
            kill.reply(from, 'Todo prohibido', id)
            break


        case 'leaveall':
            if (!isOwner) return kill.reply(from, 'Solo el creador tiene acceso a este comando.', id)
            const allChats = await kill.getAllChatIds()
            const allGroups = await kill.getAllGroups()
            for (let gclist of allGroups) {
                await kill.sendText(gclist.contact.id, `Volveremos pronto, o no jaja : ${allChats.length}`)
                await kill.leaveGroup(gclist.contact.id)
            }
            kill.reply(from, 'Listo, deja todos los grupos.', id)
            break


        case 'clearall':
            if (!isOwner) return kill.reply(from, 'Solo el creador tiene acceso a este comando.', id)
            const allChatz = await kill.getAllChats()
            for (let dchat of allChatz) {
                await kill.deleteChat(dchat.id)
            }
            kill.reply(from, 'Borré todos los chats!', id)
            break


	    case 'add':
            if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
	        if (args.length !== 1) return kill.reply(from, 'Debes especificar el número de teléfono.', id)
            try {
                await kill.addParticipant(from,`${args[0]}@c.us`)
            } catch {
                kill.reply(from, mess.error.Ad, id)
            }
            break
			
			
		case '3d':
			if (args.length == 0) kill.reply(from, 'Pon un mensaje ahí!', id)
			kill.reply(from, mess.wait, id)
			await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(4)}`, '', '', id)
			break 
			
			
		case 'gaming':
			if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
			kill.reply(from, mess.wait, id)
			await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(8)}`, '', '', id)
			break
		
		
		case 'fogareu':
			if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
			kill.reply(from, mess.wait, id)
			await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/epep?text=${body.slice(9)}`, '', '', id)
			break
			
			
		case 'thunder':
			if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
			kill.reply(from, mess.wait, id)
			await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/thunder?text=${body.slice(9)}`, '', '', id)
			break
			

		case 'light':
			if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
			kill.reply(from, mess.wait, id)
			await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/neon_light?text=${body.slice(7)}`, '', '', id)
			break
			

		case 'wolf':
            arkp = body.trim().substring(body.indexOf(' ') + 1)
            if (args.length >= 2) {
                kill.reply(from, mess.wait, id)
                const fisow = arkp.split('|')[0]
                const twosw = arkp.split('|')[1]
                await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/wolf?text1=${fisow}&text2=${twosw}`, '', '', id)
            } else {
                await kill.reply(from, `Para usar esto, agregue dos oraciones, separándolas por |.`, id)
            }
            break
			

		case 'neon':
            arkt = body.trim().substring(body.indexOf(' ') + 1)
            if (args.length >= 3) {
                kill.reply(from, mess.wait, id)
                const fisot = arkt.split('|')[0]
                const twost = arkt.split('|')[1]
                const trest = arkt.split('|')[1]
                await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/neon?text1=${fisot}&text2=${twost}&text3=${trest}`, '', '', id)
            } else {
                await kill.reply(from, `Para usar esto, agregue dos oraciones, separándolas por |.`, id)
            }
            break
			

        case 'porn':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            const porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
            kill.sendFileFromUrl(from, porn.data.url, '', porn.data.title, id)
            } else {
				const porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
				kill.sendFileFromUrl(from, porn.data.url, '', porn.data.title, id)
			}
            break
			
			
        case 'lesbian':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            const lesb = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
            kill.sendFileFromUrl(from, lesb.data.url, '', lesb.data.title, id)
			} else {
				const lesb = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
				kill.sendFileFromUrl(from, lesb.data.url, '', lesb.data.title, id)
			}
            break
			
			
			
        case 'pgay':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            const gay = await axios.get('https://meme-api.herokuapp.com/gimme/gayporn')
            kill.sendFileFromUrl(from, gay.data.url, '', gay.data.title, id)
            } else {
				const gay = await axios.get('https://meme-api.herokuapp.com/gimme/gayporn')
				kill.sendFileFromUrl(from, gay.data.url, '', gay.data.title, id)
			}
            break
		
		
		case 'logo':
			if (args.length == 0) kill.reply(from, 'Coloca um nome ai!', id)
			kill.reply(from, mess.wait, id)
			await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(6)}`, '', '', id)
			break
	
			
		case 'pornhub':
            arkp = body.trim().substring(body.indexOf(' ') + 1)
            if (args.length >= 2) {
                kill.reply(from, mess.wait, id)
                const fison = arkp.split('|')[0]
                const twoso = arkp.split('|')[1]
                if (fison > 10 || twoso > 10) return kill.reply(from, 'Desculpe, maximo de 10 letras.', id)
                await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/phblogo?text1=${fison}&text2=${twoso}`, '', '', id)
            } else {
                await kill.reply(from, `Para usar esto, agregue dos oraciones, separándolas por |.`, id)
            }
            break
			


        case 'meme':
            ark = body.trim().substring(body.indexOf(' ') + 1)
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = ark.split('|')[0]
                const bottom = ark.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                kill.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then((serialized) => console.log(`Meme de id: ${serialized} feito em ${processTime(t, moment())}`))
                    .catch((err) => console.error(err))
            } else {
                await kill.reply(from, `Su uso es incorrecto baka ~idiota~ O.O\nUso correto = /meme frase-de-cima | frase-de-baixo.\nA la oración inferior es opcional, si no desea dejarla en blanco, pero use el | todavía así.`, id)
            }
            break


        case 'kick':
			const chief = chat.groupMetadata.owner
			if (isGroupMsg && isGroupAdmins) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
				if (mentionedJidList.length === 0) return kill.reply(from, 'Escribiste el comando muy mal, arréglalo y envíalo bien.', id)
				await kill.sendTextWithMentions(from, `Expulsando gays ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} cabaret...`)
				for (let i = 0; i < mentionedJidList.length; i++) {
					if (chief.includes(mentionedJidList[i])) return kill.reply(from, 'Sabemos los gays que está, pero no puedes patear a la persona que creó el bot.', id)
					if (ownerNumber.includes(mentionedJidList[i])) return kill.reply(from, 'Desafortunadamente, es un gay VIP, no puedo expulsar.', id)
					if (groupAdmins.includes(mentionedJidList[i])) return kill.reply(from, mess.error.Ki, id)
					await kill.removeParticipant(groupId, mentionedJidList[i])
				}
			} else if (isGroupMsg && isOwner) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
				if (mentionedJidList.length === 0) return kill.reply(from, 'Escribiste el comando muy mal, arréglalo y envíalo bien.', id)
				await kill.sendTextWithMentions(from, `Expulsando gays ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} cabare...`)
				for (let i = 0; i < mentionedJidList.length; i++) {
					if (chief.includes(mentionedJidList[i])) return kill.reply(from, 'Sabemos lo gay que está, pero no puedes patear a la persona que creó el bot.', id)
					if (ownerNumber.includes(mentionedJidList[i])) return kill.reply(from, 'Desafortunadamente, es un gay VIP, no puedo expulsar.', id)
					if (groupAdmins.includes(mentionedJidList[i])) return kill.reply(from, mess.error.Ki, id)
					await kill.removeParticipant(groupId, mentionedJidList[i])
				}
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'leave':
			if (isGroupMsg && isGroupAdmins) {
				await kill.sendText(from,'Tendré que irme pero nos llevará a volver a vernos pronto! <3').then(() => kill.leaveGroup(groupId))
			} else if (isGroupMsg && isOwner) {
				await kill.sendText(from,'Tendré que irme pero nos llevará a volver a vernos pronto! <3').then(() => kill.leaveGroup(groupId))
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo siento, solo los administradores y mi propietario pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'promote':
			if (isGroupMsg && isGroupAdmins) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
				if (mentionedJidList.length == 0) return kill.reply(from, 'Olvidaste etiquetar a el gay que quieres que se convierta en administrador.', id)
				if (mentionedJidList.length >= 2) return kill.reply(from, 'Lo siento, solo puedo disparar 1 a la vez.', id)
				if (groupAdmins.includes(mentionedJidList[0])) return kill.reply(from, 'Bom, el ya es un administrador gay.', id)
				await kill.promoteParticipant(groupId, mentionedJidList[0])
				await kill.sendTextWithMentions(from, `Perfecto XD Ahora @${mentionedJidList[0]} Es Admin por gay.`)
		    } else if (isGroupMsg && isOwner) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
				if (mentionedJidList.length == 0) return kill.reply(from, 'Olvidaste etiquetar a el gay que quieres que se convierta en administrador.', id)
				if (mentionedJidList.length >= 2) return kill.reply(from, 'Lo siento, solo puedo disparar 1 a la vez.', id)
				if (groupAdmins.includes(mentionedJidList[0])) return kill.reply(from, 'Bom, el ya es un administrador gay.', id)
				await kill.promoteParticipant(groupId, mentionedJidList[0])
				await kill.sendTextWithMentions(from, `Perfecto XD Ahora @${mentionedJidList[0]} Es Admin por gay.`)
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'demote':
			if (isGroupMsg && isGroupAdmins) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
				if (mentionedJidList.length == 0) return kill.reply(from, 'Olvidaste etiquetar a el gay que quieres despedir.', id)
				if (mentionedJidList.length >= 2) return kill.reply(from, 'Lo siento, solo puedo disparar 1 a la vez.', id)
				if (!groupAdmins.includes(mentionedJidList[0])) return kill.reply(from, 'Bom, el no es un administrador.', id)
				await kill.demoteParticipant(groupId, mentionedJidList[0])
				await kill.sendTextWithMentions(from, `Perfecto, se le quito Admin por gay a @${mentionedJidList[0]}.`)
		    } else if (isGroupMsg && isOwner) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
				if (mentionedJidList.length == 0) return kill.reply(from, 'Olvidaste etiquetar a el gay que quieres despedir.', id)
				if (mentionedJidList.length >= 2) return kill.reply(from, 'Lo siento, solo puedo disparar 1 a la vez.', id)
				if (!groupAdmins.includes(mentionedJidList[0])) return kill.reply(from, 'Bom, el no es un administrador.', id)
				await kill.sendTextWithMentions(from, `Perfecto, se le quito Admin por gay a @${mentionedJidList[0]}.`)
				await kill.demoteParticipant(groupId, mentionedJidList[0])
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden despedir por Iris.', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'botstat':
            const loadedMsg = await kill.getAmountOfLoadedMessages()
            const chatIds = await kill.getAllChatIds()
            const groups = await kill.getAllGroups()
            kill.sendText(from, `Status :\n- *${loadedMsg}* Mensajes recibidos después de llamar\n- *${groups.length}* Conversas en grupo\n- *${chatIds.length - groups.length}* Conversas no PV\n- *${chatIds.length}* Total de conversas`)
            break


        case 'join':
            if (args.length == 0) return kill.reply(from, 'No lo sé, hay algo mal en eso!', id)
            const gplk = body.slice(6)
            const tGr = await kill.getAllGroups()
            const minMem = 30 // DEBE TENER ESTE MIEMBRO PARA ENTRAR
            const isLink = gplk.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await kill.inviteInfo(gplk)
            if (!isLink) return kill.reply(from, 'Link incorrecto', id)
            if (tGr.length > 6) return kill.reply(from, 'Ya estoy en el máximo de grupos, lo siento.', id)
            if (check.size < minMem) return kill.reply(from, 'Solo se puede trabajar en grupos de más de 30 personas.', id)
            if (check.status == 200) {
                await kill.joinGroupViaLink(gplk).then(() => kill.reply(from, 'Uniéndose al grupo...'))
            } else {
                kill.reply(from, 'Link incorrecto', id)
            }
            break


        case 'delete':
        case 'del':
			if (isGroupMsg && isGroupAdmins) {
				if (!quotedMsg) return kill.reply(from, 'Necesitas marcar el mensaje que quieres borrar, obviamente, uno de los míos.', id)
				if (!quotedMsgObj.fromMe) return kill.reply(from, 'Solo puedo borrar mis mensajes!', id)
				await kill.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
		    } else if (isGroupMsg && isOwner) {
				if (!quotedMsg) return kill.reply(from, 'Necesitas marcar el mensaje que quieres borrar, obviamente, uno de los míos.', id)
				if (!quotedMsgObj.fromMe) return kill.reply(from, 'Solo puedo borrar mis mensajes!', id)
				await kill.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
			} else if (isGroupMsg) {
				if (!quotedMsgObj.fromMe) return kill.reply(from, 'Solo puedo borrar mis mensajes!', id)
				await kill.reply(from, 'Lo siento, solo mi propietario y los administradores pueden eliminar mis mensajes.', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'tela':
            if (!isOwner) return kill.reply(from, 'Este comando es solo para el creador', id)
            const sesPic = await kill.getSnapshot()
            kill.sendFile(from, sesPic, 'session.png', 'Neh...', id)
            break
			

        case 'enviar':
            const arka = body.trim().substring(body.indexOf(' ') + 1)
            if (args.length == 0) return kill.reply(from, 'Necesitas definir entre [-gp, -pv ou -help] para usar!', id)
			const gid = groupId.replace('@g.us', '').replace('c.us', '')
			if (isGroupMsg) {
				if (args[0] == '-gp') {
					await kill.sendText(`${args[1]}` + '@g.us', `_Mensage >_\n*"${arka.split('|')[1]} "*` + '\n\n_Quien envió =_ ' + '\n*"' + name + '"*' + '\n\n_Como responder:_')
					await kill.sendText(`${args[1]}` + '@g.us', `/enviar -gp ${gid} | Coloque su resposta aqui`)
					await kill.sendText(from, 'Mensage enviado.')
				} else if (args[0] == '-pv') {
					await kill.sendText(`${args[1]}` + '@c.us', `${arka.split('|')[1]}` + '\n\n_Quien envio =_ ' + '*' + name + '*' + '\n\n_Como responder:_')
					await kill.sendText(`${args[1]}` + '@c.us', `/enviar -gp ${gid} | Coloque su resposta aqui`)
					await kill.sendText(from, 'Mensage enviado.')
				} else if (args[0] == '-help' || args[0] == '-h') {
					await kill.reply(from, 'Para usar, escriba el comando y en el frente escriba -pv para privado, o -gp para grupos, y frente a ellos use el ID, separando el mensaje por |. Exemplo:\n/enviar -gp 5518998****-174362736 | Hola?\n\nPuede obtener las ID con el comando /id, y recuerde usar sin el @c.us e @g.us.', id)
				} else {
					await kill.reply(from, 'Para usar, escriba el comando y en el frente escriba -pv para privado, o -gp para grupos, y frente a ellos use el ID, separando el mensaje por |. Exemplo:\n/enviar -gp 5518998****-174362736 | Hola?\n\nPuede obtener las ID con el comando /id, y recuerde usar sin el @c.us e @g.us.', id)
				}
			} else {
				await kill.reply(from, mess.error.Gp + '\nSi desea unirse a un grupo [/legiao].', id)
			}
            break


        case 'blocks':
            if (!isOwner) return kill.reply(from, 'Solo el creador tiene acceso a este comando.', id)
            let hih = `Lista de bloqueados\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            kill.sendTextWithMentions(from, hih, id)
            break
			
			
        case 'encerrar':
            if (!isOwner) return kill.reply(from, 'Solo el creador tiene acceso a este comando.', id)
			kill.reply(from, 'Pedido recibido!\nMe apagaré en 5 segundos.', id)
		    await sleep(5000)
			await kill.kill()
            break


/*        case 'loli':
            const loli = await get.get('http://mhankbarbars.herokuapp.com/api/randomloli').json()
            kill.sendFileFromUrl(from, loli.result, 'loli.jpeg', 'Veo que eres un hombre / mujer de cultura.', id)
            break*/
			
			
        case 'loli':
			const onefive = Math.floor(Math.random() * 145) + 1
			kill.sendFileFromUrl(from, `https://media.publit.io/file/Twintails/${onefive}.jpg`, 'loli.jpg', 'Veo que eres un hombre / mujer de cultura.', id)
            break
			

        case 'hug':
            if (double == 1) {
            const hug1 = await axios.get(`https://nekos.life/api/v2/img/hug`)
            await kill.sendFileFromUrl(from, hug1.data.url, ``, `Lindo abrazo...`, id)
            } else if (double == 2) {
            const hug = await randomNimek('hug')
            await kill.sendFileFromUrl(from, hug, ``, '<3', id)
			}
			break
			
			
        case 'exclusive':
            if (!isGroupMsg) return kill.reply(from, 'Só grupos!', id)
			if (!isOwner) return kill.reply(from, 'Este comando es solo para el creador', id)
            if (args.length !== 1) return kill.reply(from, 'Defina entre on o off!', id)
			if (args[0] == 'on') {
                exsv.push(chatId)
                fs.writeFileSync('./lib/exclusive.json', JSON.stringify(exsv))
                kill.reply(from, 'Se han habilitado los comandos exclusivos de Legion.', id)
			} else if (args[0] == 'off') {
				let exclu = exsv.indexOf(chatId)
                exsv.splice(exclu, 1)
                fs.writeFileSync('./lib/exclusive.json', JSON.stringify(exsv))
                kill.reply(from, 'Se han habilitado los comandos exclusivos de Legion.', id)
            } else {
                kill.reply(from, 'Defina on ou off!', id)
            }
            break


        case 'baguette':
            const baguette = await randomNimek('baguette')
            await kill.sendFileFromUrl(from, baguette, ``, '', id)
            break


        case 'dva':
            const dva1 = await randomNimek('dva') 
            await kill.sendFileFromUrl(from, dva1, ``, `Que ~gostosa~ linda!`, id)
            break


        case 'waifu':
            if (double == 1) {
				const total = fs.readFileSync('./lib/waifu.json')
				const parsew = JSON.parse(total)
				const organi = Math.floor(Math.random() * parsew.length)
				const finale = parsew[organi]
				await kill.sendFileFromUrl(from, finale.image, 'waifu.jpg', finale.teks, id)
            } else if (double == 2) {
				const waifu3 = await axios.get(`https://nekos.life/api/v2/img/waifu`)
				await kill.sendFileFromUrl(from, waifu3.data.url, '', 'No se nada de ella...', id)
			}
            break


        case 'husb':
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            kill.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
			
			
        case 'iecchi':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (triple == 1) {
					const ecchi = await axios.get('https://nekos.life/api/v2/img/erok')
					await kill.sendFileFromUrl(from, ecchi.data.url, id)
				} else if (triple == 2) {
					const ecchi1 = await axios.get('https://nekos.life/api/v2/img/erokemo')
					await kill.sendFileFromUrl(from, ecchi1.data.url, '', '', id)
				} else if (triple == 3) {
					const ecchi3 = await axios.get('https://nekos.life/api/v2/img/ero')
					await kill.sendFileFromUrl(from, ecchi3.data.url, '', '', id)
				}
			} else {
				if (triple == 1) {
					const ecchi = await axios.get('https://nekos.life/api/v2/img/erok')
					await kill.sendFileFromUrl(from, ecchi.data.url, '', '', id)
				} else if (triple == 2) {
					const ecchi1 = await axios.get('https://nekos.life/api/v2/img/erokemo')
					await kill.sendFileFromUrl(from, ecchi1.data.url, '', '', id)
				} else if (triple == 3) {
					const ecchi3 = await axios.get('https://nekos.life/api/v2/img/ero')
					await kill.sendFileFromUrl(from, ecchi3.data.url, '', '', id)
				}
			}
			break
			
			
        case 'tits':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
			if (octo == 1) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/tits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 2) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BestTits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 3) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/boobs')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 4) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 5) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/smallboobs')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 6) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/TinyTits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 7) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 8) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/amazingtits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			}
            } else {
				if (octo == 1) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/tits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 2) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BestTits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 3) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/boobs')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 4) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 5) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/smallboobs')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 6) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/TinyTits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 7) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 8) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/amazingtits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				}
			}
            break
			
			
	    case 'milf':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf_pictures');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const tits1 = await axios.get('https://meme-api.herokuapp.com/gimme/best_nsfw_milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            } else {
            	if (triple == 1) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf_pictures');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/best_nsfw_milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
			break
			
			
        case 'bdsm':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/BDSMPics');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/bdsm');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/TeenBDSM');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            } else {
            	if (triple == 1) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/BDSMPics');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/bdsm');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/TeenBDSM');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
			break


        case 'ass':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/bigasses');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
             } else {
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/bigasses');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
            break		
	
			
        case 'pussy':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/pussy');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
             } else {
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/pussy');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
            break
			

        case 'blowjob':
        case 'boquete':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const blowjob = await axios.get('https://nekos.life/api/v2/img/bj')
					await kill.sendFileFromUrl(from, blowjob.data.url, '', '', id)
				} else if (double == 2) {
					const blowjobs = await axios.get('https://nekos.life/api/v2/img/blowjob')
					await kill.sendFileFromUrl(from, blowjobs.data.url, '', '', id)
				}
			} else {
				const blowjob1 = await axios.get('https://nekos.life/api/v2/img/erok')
				await kill.sendFileFromUrl(from, blowjob1.data.url, '', '', id)
			}
			break

			
        case 'feet':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const feet = await axios.get('https://nekos.life/api/v2/img/feetg')
					await kill.sendFileFromUrl(from, feet.data.url, '', '', id)
				} else if (double == 2) {
					const feets = await axios.get('https://nekos.life/api/v2/img/erofeet')
					await kill.sendFileFromUrl(from, feets.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const feet = await axios.get('https://nekos.life/api/v2/img/feetg')
					await kill.sendFileFromUrl(from, feet.data.url, '', '', id)
				} else if (double == 2) {
					const feets = await axios.get('https://nekos.life/api/v2/img/erofeet')
					await kill.sendFileFromUrl(from, feets.data.url, '', '', id)
				}
			}
			break
			
			
        case 'hard':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const hard = await axios.get('https://nekos.life/api/v2/img/spank')
				await kill.sendFileFromUrl(from, hard.data.url, '', '', id)
			} else {
				const hard = await axios.get('https://nekos.life/api/v2/img/spank')
				await kill.sendFileFromUrl(from, hard.data.url, '', '', id)
			}
			break
			
			
        case 'boobs':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const bobis = await axios.get('https://nekos.life/api/v2/img/boobs')
					await kill.sendFileFromUrl(from, bobis.data.url, '', '', id)
				} else if (double == 2) {
					const tits = await axios.get('https://nekos.life/api/v2/img/tits')
					await kill.sendFileFromUrl(from, tits.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const bobis = await axios.get('https://nekos.life/api/v2/img/boobs')
					await kill.sendFileFromUrl(from, bobis.data.url, '', '', id)
				} else if (double == 2) {
					const tits = await axios.get('https://nekos.life/api/v2/img/tits')
					await kill.sendFileFromUrl(from, tits.data.url, '', '', id)
				}
			}
			break
			

        case 'lick':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const lick = await axios.get('https://nekos.life/api/v2/img/kuni')
					await kill.sendFileFromUrl(from, lick.data.url, '', '', id)
				} else if (double == 2) {
					const les = await axios.get('https://nekos.life/api/v2/img/les')
					await kill.sendFileFromUrl(from, les.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const lick = await axios.get('https://nekos.life/api/v2/img/kuni')
					await kill.sendFileFromUrl(from, lick.data.url, '', '', id)
				} else if (double == 2) {
					const les = await axios.get('https://nekos.life/api/v2/img/les')
					await kill.sendFileFromUrl(from, les.data.url, '', '', id)
				}
			}
			break
			
			
        case 'femdom':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (triple == 1) {
					const femdom = await axios.get('https://nekos.life/api/v2/img/femdom')
					await kill.sendFileFromUrl(from, femdom.data.url, '', '', id)
				} else if (triple == 2) {
					const femdom1 = await axios.get('https://nekos.life/api/v2/img/yuri')
					await kill.sendFileFromUrl(from, femdom1.data.url, '', '', id)
				} else if (triple == 3) {
					const femdom2 = await axios.get('https://nekos.life/api/v2/img/eroyuri')
					await kill.sendFileFromUrl(from, femdom2.data.url, '', '', id)
				}
			} else {
				if (triple == 1) {
					const femdom = await axios.get('https://nekos.life/api/v2/img/femdom')
					await kill.sendFileFromUrl(from, femdom.data.url, '', '', id)
				} else if (triple == 2) {
					const femdom1 = await axios.get('https://nekos.life/api/v2/img/yuri')
					await kill.sendFileFromUrl(from, femdom1.data.url, '', '', id)
				} else if (triple == 3) {
					const femdom2 = await axios.get('https://nekos.life/api/v2/img/eroyuri')
					await kill.sendFileFromUrl(from, femdom2.data.url, '', '', id)
				}
			}
			break


        case 'futanari':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const futanari = await axios.get('https://nekos.life/api/v2/img/futanari')
				await kill.sendFileFromUrl(from, futanari.data.url, '', '', id)
			} else {
				const futanari = await axios.get('https://nekos.life/api/v2/img/futanari')
				await kill.sendFileFromUrl(from, futanari.data.url, '', '', id)
			}
			break
			
			
        case 'masturb':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (triple == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (triple == 2) {
					const pwank = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, pwank.data.url, '', '', id)
				} else if (triple == 3) {
					const solour = await axios.get('https://nekos.life/api/v2/img/solo')
					await kill.sendFileFromUrl(from, solour.data.url, '', '', id)
				}
			} else {
				if (triple == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (triple == 2) {
					const pwank = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, pwank.data.url, '', '', id)
				} else if (triple == 3) {
					const solour = await axios.get('https://nekos.life/api/v2/img/solo')
					await kill.sendFileFromUrl(from, solour.data.url, '', '', id)
				}
			}
			break
			
			
        case 'anal':
            if (isGroupMsg) {
				if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/cum')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (double == 2) {
					const anal = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
					await kill.sendFileFromUrl(from, anal.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/cum')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (double == 2) {
					const anal = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
					await kill.sendFileFromUrl(from, anal.data.url, '', '', id)
				}
			}
			break        
			
			
		case 'randomloli':
            if (isGroupMsg) {
				if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const loliz = await axios.get('https://nekos.life/api/v2/img/keta')
				await kill.sendFileFromUrl(from, loliz.data.url, '', '', id)
			} else {
				const loliz = await axios.get('https://nekos.life/api/v2/img/keta')
				await kill.sendFileFromUrl(from, loliz.data.url, '', '', id)
			}
			break
			
			
        case 'nsfwicon':
            if (isGroupMsg) {
				if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const icon = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				await kill.sendFileFromUrl(from, icon.data.url, '', '', id)
			} else {
				const icon = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				await kill.sendFileFromUrl(from, icon.data.url, '', '', id)
			}
			break
			
			
		case 'truth':
			const memean = await axios.get('https://nekos.life/api/v2/img/gecg')
			await kill.sendFileFromUrl(from, memean.data.url, '', '', id)
			break
			

		case 'icon':
			const avatarz = await axios.get('https://nekos.life/api/v2/img/avatar')
			await kill.sendFileFromUrl(from, avatarz.data.url, '', '', id)
			break
			
			
		case 'face':
			const gasm = await axios.get('https://nekos.life/api/v2/img/gasm')
			await kill.sendFileFromUrl(from, gasm.data.url, '', '', id)
			break
			

		case 'pezinho':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const pezin = await axios.get('https://nekos.life/api/v2/img/feet')
				await kill.sendFileFromUrl(from, pezin.data.url, '', '', id)
            } else {
				const pezin = await axios.get('https://nekos.life/api/v2/img/feet')
				await kill.sendFileFromUrl(from, pezin.data.url, '', '', id)
			}
			break


        case 'ihentai':
		    const selnum = Math.floor(Math.random() * 6) + 1 
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (selnum == 1) {
					const clas = await axios.get('https://nekos.life/api/v2/img/classic')
					await kill.sendFileFromUrl(from, clas.data.url, ``, '', id)
				} else if (selnum == 2) {
					const hentai = await randomNimek('hentai')
					await kill.sendFileFromUrl(from, hentai, ``, 'Ui ui, hentai essa hora?', id)
				} else if (selnum == 3) {
					const hentai3 = await axios.get('https://nekos.life/api/v2/img/Random_hentai_gif')
					await kill.sendFileFromUrl(from, hentai3, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 4) {
					const hentai4 = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
					await kill.sendFileFromUrl(from, hentai4.data.url, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 5) {
					const hentai5 = await axios.get('https://nekos.life/api/v2/img/hentai')
					await kill.sendFileFromUrl(from, hentai5.data.url, ``, 'Hentaizinho bom...', id)
				} else if (selnum == 6) {
					const hentai6 = await axios.get('https://nekos.life/api/v2/img/pussy')
					await kill.sendFileFromUrl(from, hentai6.data.url, ``, 'Hentaizinho bom...', id)
				}
            } else {
			    if (selnum == 1) {
					const hentai1 = await axios.get('https://nekos.life/api/v2/img/Random_hentai_gif')
					await kill.sendFileFromUrl(from, hentai1, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 2) {
					const hentai2 = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
					await kill.sendFileFromUrl(from, hentai2.data.url, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 3) {
					const clas = await axios.get('https://nekos.life/api/v2/img/classic')
					await kill.sendFileFromUrl(from, clas.data.url, ``, '', id)
				} else if (selnum == 4) {
					const hentai4 = await axios.get('https://nekos.life/api/v2/img/hentai')
					await kill.sendFileFromUrl(from, hentai4.data.url, ``, 'Hentaizinho bom...', id)
				} else if (selnum == 5) {
					const hentai5 = await axios.get('https://nekos.life/api/v2/img/pussy')
					await kill.sendFileFromUrl(from, hentai5.data.url, ``, 'Hentaizinho bom...', id)
				} else if (selnum == 6) {
					const hentai6 = await randomNimek('hentai')
					await kill.sendFileFromUrl(from, hentai6, ``, 'Ui ui, hentai essa hora?', id)
				}
			}
            break


        case 'yuri':
            const yuri1 = await randomNimek('yuri')
			console.log(yuri1)
            await kill.sendFileFromUrl(from, yuri1, ``, ``, id)
            break 


        case 'randomneko':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (seven == 1) {
					const nekons = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
					await kill.sendFileFromUrl(from, nekons.data.url, ``, '', id)
				} else if (seven == 2) {
					const nsfwneko = await randomNimek('nsfw')
					await kill.sendFileFromUrl(from, nsfwneko, ``, '', id)
				} else if (seven == 3) {
					const hololwk = await axios.get('https://nekos.life/api/v2/img/hololewd')
					await kill.sendFileFromUrl(from, hololwk.data.url, ``, 'Neko gostosa...', id)
				} else if (seven == 4) {
					const lwkd = await axios.get('https://nekos.life/api/v2/img/lewdk')
					await kill.sendFileFromUrl(from, lwkd.data.url, ``, '', id)
				} else if (seven == 5) {
					const lwkdk = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
					await kill.sendFileFromUrl(from, lwkdk.data.url, ``, '', id)
				} else if (seven == 6) {
					const eron = await axios.get('https://nekos.life/api/v2/img/eron')
					await kill.sendFileFromUrl(from, eron.data.url, ``, '', id)
				} else if (seven == 7) {
					const holoero = await axios.get('https://nekos.life/api/v2/img/holoero')
					await kill.sendFileFromUrl(from, holoero.data.url, ``, '', id)
				}
            } else {
				if (seven == 1) {
					const nekons = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
					await kill.sendFileFromUrl(from, nekons.data.url, ``, '', id)
				} else if (seven == 2) {
					const nsfwneko = await randomNimek('nsfw')
					await kill.sendFileFromUrl(from, nsfwneko, ``, '', id)
				} else if (seven == 3) {
					const hololwk = await axios.get('https://nekos.life/api/v2/img/hololewd')
					await kill.sendFileFromUrl(from, hololwk.data.url, ``, 'Neko gostosa...', id)
				} else if (seven == 4) {
					const lwkd = await axios.get('https://nekos.life/api/v2/img/lewdk')
					await kill.sendFileFromUrl(from, lwkd.data.url, ``, '', id)
				} else if (seven == 5) {
					const lwkdk = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
					await kill.sendFileFromUrl(from, lwkdk.data.url, ``, '', id)
				} else if (seven == 6) {
					const eron = await axios.get('https://nekos.life/api/v2/img/eron')
					await kill.sendFileFromUrl(from, eron.data.url, ``, '', id)
				} else if (seven == 7) {
					const holoero = await axios.get('https://nekos.life/api/v2/img/holoero')
					await kill.sendFileFromUrl(from, holoero.data.url, ``, '', id)
				}
			}
            break


        case 'trap':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            if (double == 1) {
				const tapr = await axios.get('https://nekos.life/api/v2/img/trap')
				await kill.sendFileFromUrl(from, tapr.data.url, '', '', id)
            } else if (double == 2) {
				const trap = await randomNimek('trap')
				kill.sendFileFromUrl(from, trap, ``, '', id)
			}
            } else {
				const tapr = await axios.get('https://nekos.life/api/v2/img/trap')
				await kill.sendFileFromUrl(from, tapr.data.url, '', '', id)
            }
            break


        case 'randomwall' :
            const walnime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
            await kill.sendFileFromUrl(from, walnime.data.url, '', '', id)
            break
			
			
        case 'dog': 
		    if (double == 1) {
				const list = await axios.get('http://shibe.online/api/shibes')
				const doguin = list.data[0]
				await kill.sendFileFromUrl(from, doguin, '', 'doguinho', id)
			} else if (double == 2) {
				const doug = await axios.get('https://nekos.life/api/v2/img/woof')
				await kill.sendFileFromUrl(from, doug.data.url, '', 'doguinho', id)
			}
            break
			
			
        case 'look' :
            const smug = await axios.get('https://nekos.life/api/v2/img/smug')
            await kill.sendFileFromUrl(from, smug.data.url, '', '', id)
            break
			
			
        case 'holo' :
            const holo = await axios.get('https://nekos.life/api/v2/img/holo')
            await kill.sendFileFromUrl(from, holo.data.url, '', '', id)
            break


		case 'rolette':
            if (double == 1) {
            await kill.reply(from, 'Bang, ella disparó y tú moriste, se acabó el juego.', id)
            } else if (double == 2) {
            await kill.reply(from, 'Te quedas vivo, pasa el turno.', id)
			}
			break
			
			
		case 'kisu':
			const kisu = await axios.get('https://nekos.life/api/v2/img/kiss')
			await kill.sendFileFromUrl(from, kisu.data.url, '', '', id)
			break
			
			
		case 'tapa':
			const tapi = await axios.get('https://nekos.life/api/v2/img/slap')
			await kill.sendFileFromUrl(from, tapi.data.url, '', '', id)
			break


        case 'gato':
        case 'cat':
			if (double == 1) {
				q2 = Math.floor(Math.random() * 900) + 300;
				q3 = Math.floor(Math.random() * 900) + 300;
				kill.sendFileFromUrl(from, 'https://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
			} else if (double == 2) {
				const catu = await axios.get('https://nekos.life/api/v2/img/meow')
				await kill.sendFileFromUrl(from, catu.data.url, id)
			}
            break


        case 'pokemon':
            q7 = Math.floor(Math.random() * 890) + 1;
            await kill.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + q7 + '.png', 'Pokemon.png', '', id)
            break		


        case 'screenshot':
            const _query = body.slice(12)
            if (!_query.match(isUrl)) return kill.reply(from, mess.error.Iv, id)
            if (args.length == 0) return kill.reply(from, 'Huelo ortografía incorrecta [faltou https:// ?]!', id)
            await ss(_query)
            await sleep(4000)
			await kill.sendFile(from, './lib/media/img/screenshot.jpeg', 'ss.jpeg', 'Asegúrate de evitar usar esto con pornografía..', id)
            .catch(() => kill.reply(from, `Error de captura de pantalla del sitio ${_query}`, id))
            break
			
			
		case 'ship':
            lvak = body.trim().split(' ')
			if (args.length == 2) {
				await kill.sendTextWithMentions(from, '❤️ ' + lvak[1] + ' tener la oportunidad de ' + lvpc + '% de enamorar ' + lvak[2] + '. 👩‍❤️‍👨')
            } else {
				await kill.reply(from, 'Falta la pareja de tortolitos!', id)
            }
			break	
			

        case 'gay':
            gaak = body.trim().split(' ')
    	    var lgbt = ["lésbica", "gay", "bissexual", "transgenero", "queer", "intersexual", "pedro-sexual", "negrosexual", "helicoptero sexual", "ageneros", "androgino", "assexual", "macaco-sexual", "dedo-sexual", "Sexo-Inexplicavel", "predio-sexual", "sexual-não-sexual", "pansexual", "kink", "incestuoso", "comedor-de-casadas", "unicornio-sexual", "maniaco-sexual"]
    	    var guei = lgbt[Math.floor(Math.random() * lgbt.length)]
			if (args.length == 1) {
				await kill.sendTextWithMentions(from, gaak[1] + ' é ' + lvpc + '% ' + guei + '.')
            } else {
				await kill.reply(from, `Tu eres ` + lvpc + '% ' + guei + '.', id)
            }
			break
			

		case 'chance':
			if (args.length == 0) return kill.reply(from, 'Defina algo para analisar.', id)
			await kill.reply(from, `_De acuerdo con mis cálculos súper avanzados de ~ mono hembra ~ robot "cuie" la oportunidad de..._ \n\n*"${body.slice(8)}"*\n\n_...ser realidade de_ *${lvpc}%.*`, id)
			break


        case 'kiss':
            arqa = body.trim().split(' ')
			if (args.length == 1) {
				const persona = author.replace('@c.us', '')
				kill.sendTextWithMentions(from, 'Oh mi! @' + persona + ' besado ' + arco[1] + ' !')
				if (double == 1) {
				await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif')
				} else {
				await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/1wmtU5YhqqDKg/giphy.gif')
				}
			} else {
				await kill.reply(from, 'Marque ~ solo una ~ la persona a la que quiere besar hihihi', id)
            }
			break


        case 'slap':
            arq = body.trim().split(' ')
            const person = author.replace('@c.us', '')
            await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
            kill.sendTextWithMentions(from, '@' + person + ' *besado* ' + arco[1])
            break


        case 'getmeme':
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/memesbrasil');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            break
			
			
        case 'date':
			const timeda = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
			await kill.reply(from, 'Ahora son exactamente\n"' + timeda + '"', id)
			break
		

        case 'menu':
			const timed = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
			const allin = `Hola usuario gay "@${sender.id}"!\n\nYo tomé ${processTime(t, moment())} segundos para responderte.\n\nAhora son exactos "${timed}".\nAbajo están mis funciones.\n`
            kill.sendTextWithMentions(from, allin + help, id)
            kill.reply(from, 'De otros comandos tenemos...\n\n*/Admins* _es para administradores._\n\n*/Kill* _es solo para el dueño._\n\n*/Adult* _es el comandos para los arrechos._\n\n*/Down* _es el menú de descarga de música y video._', id)
            break


        case 'admins':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            await kill.sendText(from, admins, id)
            break


        case 'adult':
            kill.sendText(from, adult, id)
            break
			

        case 'kill':
            if (!isOwner) return kill.reply(from, mess.error.Kl, id)
            kill.sendText(from, owner, id)
            break


        case 'down':
            kill.sendText(from, down, id)
            break


        case 'readme':
            kill.reply(from, readme, id)
            break
			
		
		case 'bomb':
		    const bleg = JSON.parse(fs.readFileSync('./lib/exclusive.json'))
			const biao = bleg.includes(chat.id)
			if (biao) {
				const alvo = `@${body.slice(6)}`
				await kill.sendTextWithMentions(from, '¡Belleza! Solicitud recibida e iniciada, el objetivo \"' + objetivo + '\" será atacado en unos segundos!', id)
				if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
				const atk = execFile('./lib/bomb.exe', [`${body.slice(6)}`, '3', '1', '0'], funcion(err, data) {
				if(err) {
				console.log('O el programa se cierra, esto indica un error o cierre manual.')
				kill.reply(from, 'O el ataque se canceló manualmente o tuvo errores en la ejecución.', id)
				}
				})
			} else {
				console.log('erro')   
				kill.reply(from, 'O el ataque no está permitido aquí!', id)
			}
			break
			
		case 'cmd':
			if (!isOwner) return kill.reply(from, mess.error.Kl, id)
			const cmdw = exec(`${body.slice(5)}`, function(stderr, data) {
				if (stderr) {
					console.log(stderr)
					kill.reply(from, data + '\n\n' + stderr, id)
				} else {
					console.log(data)
					kill.reply(from, data, id)
				}
			})
			break

			
		case 'mac':
			if (args.length == 0) return kill.reply(from, 'Lo siento, pero debe especificar qué MAC desea extraer.', id)
			await kill.reply(from, 'Espera, esta operación tarda unos 6 segundos debido a la limitación de tiempo..', id)
			await sleep(3000)
			const maclk = await axios.get(`https://api.macvendors.com/${body.slice(5)}`)
			console.log(`{body.slice(5)}`)
			const macre = maclk.data
			await kill.reply(from, `El teléfono es de ${macre}.`, id)
			break
			
		case 'converter':
		case 'conv':
			if (args == 0) return kill.reply(from, 'Ingrese el modo de conversión y luego la temperatura, para más detalles ingrese /conv -h.', id)
			if (args[0] == '-help' || args[0] == '-h') return kill.reply(from, convh, id)
			try {
				if (args[0] == '-f') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const cels = args[1] / 5 * 9 + 32
					await kill.reply(from, `*${args[1]}* grados C ° - Celsius es igual a ${cels} grados F° - Fahrenheit.`, id)
				} else if (args[0] == '-c') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const fahf = 5 * (args[1] - 32) / 9
					await kill.reply(from, `*${args[1]}* _grados F ° - Fahrenheit es igual a_ *${fahf}* _grado C° - Celsius._`, id)
				} else if (args[0] == '-m') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const ktom = args[1] * 0.62137
					await kill.reply(from, `*${args[1]}* _Kilómetros es igual a_ *${ktom}* _Millas._`, id)
				} else if (args[0] == '-q') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const mtok = args[1] / 0.62137
					await kill.reply(from, `*${args[1]}* _Millas iguales_ *${mtok}* _Quilometro._`, id)
				} else {
					await kill.reply(from, convh, id)
				}
			} catch (error) {
				await kill.reply(from, convh + '\n\nAsegúrese de poner el valor de conversión.', id)
			}
			break

		

        }
    } catch (err) {
        console.log(color('[ERRO]', 'red'), err)
		kill.forceRefocus()
    }
}
