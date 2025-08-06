const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhyWUxJSm1lYm02eUZBaXcybyt3Y1V4T3RIYVhVdDRsWmVIK1E5aUZIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSk5yM0ZPNmVVSG0xQjdoM2lpUEM3bUtpVDI1bHdVNitRYU1McUU2dzYyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQS9wU215N1FPSGRzR1FRSUJNUWEwVThlYnJOM2FUWE81MSt2WWcrUTBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXajhUb0VFQ3pWRjVPK0hDcHVnMlh6cFBUNGdiT2xrMzJGMThjdFBoRFN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNITFJueHBzRDN0bE0xNVhMeEJQeFRVYWF6QnMvcDB5MUFyQWd5Wldubnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik41Zmc0UDdlazJIWjBXNFJiQW5Lc01aeEdmdXA0NUgxQVpHQURLVG1qRjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUt6b01uNDNZb1p5ckdBSDZhd1VCQnB0Z2tjN1JmWS9SVS92K2M1dVIxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBGY3RKbEpSZ2N4NGRSc01scnlOalZOT2tNOXR3NGZWdFNYcnlkQU1UVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZKdXB0TWhZU24zTnZLTjZxMW1Tc0pHMnMwaVZ3K3VwMlJKc3RMRE9rVngvbFY4Qk9vQVR2Q0kyUm13Tm15RmZZSTRsTXB3NEd0Z3dsbkFZVnN0NEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJuMVJFNnhjTlZqTHlMT080cGlXc3dxcjZrZ0dwQXVhNnVQdU1VUUJKYjlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJMU1c4WEdQViIsIm1lIjp7ImlkIjoiOTIzMjMwNzU1OTQyOjIwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjIwMTMwNTQ2MDU3NDA5OjIwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlB5eC93SEVLdnB6Y1FHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRklOdnp5b3RkeEtTWitBQ2k2dVh0ZTAzUnBsczNnd2lScjlLVThJOFRBaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSTM0eU0zcHgxTFlaTURBTnkzcU5zVmFZV0kzc01zYUNTVUQ0OUdXZE0zMjNaWUhKL08rKzRZcG5mcW5iR0RXUzNyWlF0d2RDS0JLWGFseUNPTFlYQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImtoUHE4TlB0RC9rQ0ZwSmRCQmtBYk04b2dPZXNPLytIVUllS1BtUkFQTUMwMnkzb2s2RlV1endHYThLcFBmb2gwVkNyNUcrSUNvbXdBcTZKKzYxdERRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjMwNzU1OTQyOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJTRGI4OHFMWGNTa21mZ0FvdXJsN1h0TjBhWmJONE1Ja2EvU2xQQ1BFd0oifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDQ5NDEyNiwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ASIM-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ASIM-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ASIM-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923360713691",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ASIM-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ASIM-MD ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
