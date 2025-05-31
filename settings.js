//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUI3L3Q3Z3czMVVVa2FndVFvM0NoWDBXVlpFUE5lZGVhRThhMkpGZDBYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYThrYk1Fek95MERaajdJMkhsYXJSemdqQXd4UEhUMUFYSXQ3ZFdXZFpRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQUtpc0dSQWtEa3crYlRISS9GSWdpUE5uekdYb1FsMExvM2xGUHhTdmw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYYXl6YlIwRFVXZmxOeER5eHlWKzlCZDh0VFZ1dXZhdUF6bzQ5ZnRjQVM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIVVdMQm9WaVlJTm5wZ2RUdzJZZm83akwvZlRwUHEyVlp1SHJsWFFURXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRUbTM5QTJTR25pRnJIelpYSG9MUHRQZDdSb04xUlhKTUZRYnBzKzA2Q1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RBMWR2Sy9EUmhuQ2xGcy9qTm53dnA4Sy9obERpcWY0UmQrVC81WkNtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJtSjhCakp3TlJMcjVRazFYQ2NIcmZtWG9Zd0dscVUxYXNtRG1LZndGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDUldob3FxajRXWno3clhMZm8vWkdmbVdOd2M5a0hzeDBRNG0vQ3h2TUtNSEVyQ1NSdXZVM3dIVVFlVXUrSEJUaUxpbmd4dk9MRSthYnpCS1JNekNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6InlmQmw0ZFNQS3ZCcGJtRUNyeHlld2gvQmpNUlROTkZjeG5YZ2dVMTQzcU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inh2Sl96U3RnUnhXeEFCMFFLaWI4QVEiLCJwaG9uZUlkIjoiMDg2NTFmN2MtYzc1MS00Zjc5LWI5YzItNzgxNGUyNzEwMzAxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCS1dYZmtCMmpXVHZQWTc4ZExxYUhOQjN6QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQzA0cnlMcXBMaDh3VWVIWk5HZ1B0WVpCV1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUJVVklJTUQiLCJtZSI6eyJpZCI6IjIzNzY1NDc2NTExNTozNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTdGFyayIsImxpZCI6IjEwMjE1MTU1MjUxNjIwNjozNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k2UHlKTUhFUEg3N2NFR0dCd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFzSXVXclpNdUdhMlQrU282YWxMYmtzUEdTYUNzZkRCazVKd2EyRWlPaTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjM2Qkk5TmI3QkNHZXlyNGlaWk91RU9TRys3S2ZKRVNrTEphbWNuTW83UXM3T3F0UHN0M250MG5Fd3U5emdaSlJGS0VXQlhmSjdaZ3BueEFoQ2E2eEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqMmhDY3BEMFAwSHZpZVFVRlByQzRpbGZ2ZkQzUlJzUzI4SWRWMzhRQ1V6T0lJbWduLzdwYnJUWHBDRXFyRkp4aHFuOTBEdjV0NkFScU5aeTk5dGlEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1NDc2NTExNTozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTENMbHEyVExobXRrL2txT21wUzI1TER4a21nckh3d1pPU2NHdGhJam90In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDg3MjkzNDMsImxhc3RQcm9wSGFzaCI6Im5tM0JiIn0=' 
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
