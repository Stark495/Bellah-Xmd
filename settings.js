//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0I5UXFOWGgxZFhqR3hxcXZHWWJHSSthRUtveEIreDAvM01yTWJFdngxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2Vad0xvdTJKWkxFNkxvT1dweEo5UTFRUHR2dy84T01iR240Ri9sbmFYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSk9BZjNNU3owMzBEeHB6cDB1REhOUmZ5dGl6Vk1Td2JQQll3azhUYVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSLzJhWWxjWmVtSEIyUFBuUkF3UkJvRkt0cno1ZUJFZ1NrQUp1cjdNc0E4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MdnlQVmFyc3Z2WDBFYU9nN2hpR252alVxUXNzTmdmcjhvaThzS2FjMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBqdFh3eDJMdllNR3ZFQko1NmZzaXg1VUdjNmJqOVhOVlRpVlovajd6VWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFEMkFONnB3S3p3bHRoVW9KUUlLVGVLTUVhUzJMZzVacHdobUFRVW1XVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjNQc0lYTVlUOGZ3OUZNb1BlQzAwREhkMkFtenJiWFhmdlZJeTl4Vlhqdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxKRG9aVWhKVkxjWkd0cjEwZjNpOEZ4K3g5N0dhemozZkgvZThSa2I3ZVBaNWVkUENJSFo1QlJDMWFhVzd5TTBkV3o5dHlHdkFWUEszSzZmVnlyVGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiekdoQTRHMW16Tm5YSURoSjF2SDFsbHRndWxtZjVoaTNGVjB5TE5IY1dmUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNzNsTEJjRm5SWmFQZXBkUTQzX3ZEUSIsInBob25lSWQiOiI2M2Y3MTg0Yy0yN2ExLTQ4OGEtYmY3NC03YjNmOGY1NTc1NzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVRUb1lMRExXbDZSZTk0MTdtSlAyZG5wdkxFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpEODZjVkpyOVBvdWdCcDZpeVVLRStzTGY0ND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNQlVWSUlNRCIsIm1lIjp7ImlkIjoiMjM3NjU0NzY1MTE1OjM3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlN0YXJrIiwibGlkIjoiMTAyMTUxNTUyNTE2MjA2OjM3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTZQeUpNSEVPQ3A3c0VHR0I4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXNJdVdyWk11R2EyVCtTbzZhbExia3NQR1NhQ3NmREJrNUp3YTJFaU9pMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV3JlbmZpSHJtWFljUGFYd05ONUU3RmNvWWYxUHN3aGVaUndwSzB5MktrY3orREx5ZnJhUTJBUzdFN0kyWC9xdk1UbTlDRVRrNnFwTGRoTVlvZFlOQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImRPam0xeDEvdlJhNUNpTDhqT0wzaUdUSmlPRlVWVUdkb0VXWFB0aDdnZzh6ZGNtWENkSnlkZnVFQWhUYzJ1NW96QnlJNGorUWFOekRKMHNsVWl1S2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjU0NzY1MTE1OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFMQ0xscTJUTGhtdGsva3FPbXBTMjVMRHhrbWdySHd3Wk9TY0d0aElqb3QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0ODczNTIxNCwibGFzdFByb3BIYXNoIjoibm0zQmIifQ==' 
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'237654765115' //ur owner number
global.ownername = '© Stark' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "Stark"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "Stark"
global.creator = "237654765115@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'#'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
const antilinkgc = process.env.ANTILINK_GC || 'TRUE';
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = process.env.GROUP_EVENT || 'false' //show update messages in group chat
//msg
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'Bellah Xmd owner only<\>',
    admin: 'Bot is not admin<\>',
    group: 'feature for group only<\>',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
