
const TelegramBot = require('node-telegram-bot-api');

const token = '5882299023:AAErFAtxiyQOgO2VH4mmU31j2pWNXeXUAMk';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});