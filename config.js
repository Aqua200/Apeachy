import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 



global.owner = [
  ['573163952124', 'CREADOR', true],
  ['51917697525',  'Modelador', true],
]



global.mods = ['14016100366',]
global.prems = []
   


global.packname = `Creado por Neykoor💜`
global.author = 'Apeachy'
global.botname = 'Apeachy'
global.botdesc = `𝙴𝚕 𝚖𝚎𝚓𝚘𝚛 𝚋𝚘𝚝 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 ✅`
global.baileys = '@whiskeysockets/baileys'

global.em = '❤️'

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.multiplier = 50 
global.maxwarn = '2'



let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
