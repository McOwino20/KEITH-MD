/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'tleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLUhweE5CVHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzM4ejJsY0p4U1dGb3ZyWS9xeGlzNjg4S3RyRDVZR0VQSVRKMHZZT0cyND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUFhhbmdsbkhUNlpBcUk3akxNMkNMYStIa1pidExRVDBKVkxBd25TRVhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYeE1kdTlUbVlXTFpKcnErSVp5b2JpYXZGdWUrNHR6K3JIaStKUXVObVdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQWE9KN2Z2a0I1TVpxaFM0Tm1UQWJudm5CdU9OODkxMFR1WW1XbUJmVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRvbkxCRHZPaEZCVGxjY1BhT1ZjUGVrOGZDS1A0NFFwaFkwNGtYMEZGQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9jb3I0c1VpTXgvbjVQZlZQL2ZEWkhMWTJQVEhGK0NvY0hRcFJmWVpXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWFVdUxlV2I2MTVwT2pxVTl2RE5keTRaS3JOaG94Sm9mcjlMbnEwVlNpZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx6TzRmdld0Qm9UMHR4NGpETXJtTXB4RzdrQlpOckhxL3NOTnBTaXRwZGxoUC9EdFNWMlNWRTdsQ2tuK0x2Q3h5RDg5blRSWHpBWmt6NVlvZ0Jia2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6Ii82MDdHQ3V0K2lhWHBrcGdRWUwzaWdDN3d0N29qaGNDSDc0dW1WQTlwL0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImM1VG1waXpsVFhhVmFYcFNyRVF3VFEiLCJwaG9uZUlkIjoiYTA3YjY0YmEtMTgyMS00YzZkLWFlZDItZWJiOTU0ZDQxOGI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVzbTB2a0pOVGc1aHJ1Z3F0OXZpMTJMaGpaUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQSkErT25BZXFIY29MeDZ3RTZMUk44ckNzZGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFg3OExFRkIiLCJtZSI6eyJpZCI6IjI1NDc1MTgyODMwMDozMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHVVbHJRREVKZnJnTHdHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidktGR2EvUkRVT0FtUldhT3lnYU9MbGV2VElxMGhQemo3bUdBZWcxNFozZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmhSK0t6cUorbGJVdFp0WmFMS1REVUc2VlJhOGt0Z1FYRkVZVXZKTm13N3NrazR1djFVK2hycWlaVHZlaHZ0eFVzQ3dTelRWd0JoaEUxSnFuS2EyQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IlV1S29peGJTbE5WanV4MG5pZ1VJT2JlcGp4clgwN3dxUGEybVR1VVNjVkxCSFZBNFE5UnVsdTk5SWlRVkIwN0NvRGhVNEY5VjZ1OGwxYmhvYjJxNWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzUxODI4MzAwOjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ5aFJtdjBRMURnSmtWbWpzb0dqaTVYcjB5S3RJVDg0KzVoZ0hvTmVHZDQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY0NTU1ODh9';

const prefix = process.env.PREFIX || '+';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'McOwino';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254751828300';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
