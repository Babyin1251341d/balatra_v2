const { Telegraf } = require('telegraf');
require('dotenv').config();

// Отримання токена з .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Обробник повідомлень
bot.on('text', (ctx) => {
    ctx.reply('Hello!');
});

// Запуск бота
bot.launch();

console.log('Bot is running...');
