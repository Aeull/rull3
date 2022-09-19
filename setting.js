const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6285822347348',
  atasnama : 'Arull'
}

// Other
global.owner = ['6285822347348',"6285822347348"]
global.premium = ['6285822347348']
global.sponsor = 'no sponsors in:('
global.packname = 'ArullBotz'
global.footer = '© 2022 ArullBotz'
global.author = 'Owner : Arull\nIg1 : @sahrulwara_____'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: '*Wait...*',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'*Loading Please Wait..*',
		error:'*Error :(*',
		success:'*Success bang!*',
		repiar:'*This Feature Maintace!*',
		botadm:'*Jadiin bot sbg admin dulu!*',
		admin:'*Khusus admin!*',
		done:'*Done!*',
		gc:'*Only Group Allowed*',
		owner:'*Only Owner Allowed*'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
