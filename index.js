const TelegramBot = require('node-telegram-bot-api');
const token = '445479573:AAE6UUuW1gm_MPK2N-zvop-WhYeTf-Ed6fU';
// const token = '435313324:AAF2uNLuZOB2x40_iNB2_YtQ-M126AdzzAU';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, msg =>{
    bot.sendMessage(msg.chat.id, "Ciao, benvenuto nel bot Cs@Cs! Digita \"/help\" per un aiuto");
});
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


bot.onText(/(\/help)(.+)?/, (msg, match)=>
{
  console.log(match);
  if (match[2] == undefined) {
    bot.sendMessage(msg.chat.id, "Lista help");
  } else {
      switch(match[2].toLowerCase())
      {
        case "johnny":
        {
          bot.sendMessage(msg.chat.id, "Prova a scrivere una qualsiasi frase che contenga 'johnny' :)")
        }
        default: //Da risolvere
        {
          bot.sendMessage(msg.chat.id, "I comandi disponibili sono:\n ▲Johnny")
        }
      }
    }
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if(msg.text.toLowerCase().includes("johnny"))
    bot.sendMessage(chatId, 'Serafino always in my 💗')
  });
bot.on("edited_message",(msg)=>{bot.sendMessage(msg.chat.id, "Hey ti ho visto modificare: "+msg.text)})
