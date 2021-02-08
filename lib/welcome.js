const fs = require('fs-extra')
const { sleep } = require('./functions')

module.exports = welcome = async (kill, event) => {
    const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
	const bklist = JSON.parse(fs.readFileSync('./lib/anti.json'))
    const anti = JSON.parse(fs.readFileSync('./lib/blacklist.json'))
    const fks = JSON.parse(fs.readFileSync('./lib/fake.json'))
    const isWelkom = welkom.includes(event.chat)
	const fknm = event.who
	const ddi = '55'
	const isFake = fks.includes(event.chat)
	const fake = fknm.startsWith(ddi)
	const isAnti = anti.includes(event.chat)
	const fuck = bklist.includes(event.who)
	const gChat = await kill.getChatById(event.chat)
	const { contact, groupMetadata, name } = gChat
    try {
		if (event.action == 'add' && isWelkom && !fuck && fake) {
				await kill.sendTextWithMentions(event.chat, `Olá @${event.who.replace('@c.us', '')}! 🥰 \n\nBienvenido a ${name} 😎 \n\n¡Esperamos que te diviertas y obviamente sigas nuestras reglas! ✅ \n\nSi es necesario, llame a un administrador o escriba /comandos. 👨🏻‍💻`)
		} else if (event.action == 'add' && isAnti && fuck) {
			await kill.sendText(event.chat, `¡¿Y ESTÁS AQUÍ MENOS ?! ESTÁS AQUÍ DNV MENÓ ??`)
			await sleep(2000)
			await kill.removeParticipant(event.chat, event.who)
		} else if (event.action == 'add' && isFake && !fake) {
			await kill.sendTextWithMentions(event.chat, `Hola @${event.who.replace('@c.us', '')}, como parte de nuestro sistema de seguridad, los números fuera de Brasil están prohibidos, si no eres alguien malo y quieres estar en el grupo pacíficamente, contacta a los administradores 😉.\n\nHello @${event.who.replace('@c.us', '')}, as part of our security system, numbers outside Brazil are banned, if you are not someone bad and want to be in the group peacefully, please contact the administrators 😉.\n\nOlá @${event.who.replace('@c.us', '')}, sebagai bagian dari sistem keamanan kami, nomor di luar Brasil dilarang, jika Anda bukan orang jahat dan ingin berada di grup dengan damai, silakan hubungi administrator 😉.`)
			await sleep(4000)
			await kill.removeParticipant(event.chat, event.who)
		}
		if (event.action == 'remove' && isWelkom && !fuck && fake) {
			var profile = await kill.getProfilePicFromServer(event.who)
			if (profile == '' || profile == undefined) profile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
			await kill.sendFileFromUrl(event.chat, profile, 'profile.jpg', '')
			await kill.sendTextWithMentions(event.chat, `Otro miembro ~ ganado ~ se fue, extrañaremos el @${event.who.replace('@c.us', '')} ... \nF. ~Ahora tenemos -1 ganado para cosechar, shit!~`)
		}
    } catch (err) {
        console.log(err)
    }
}
