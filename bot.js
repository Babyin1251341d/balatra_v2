const { Telegraf } = require('telegraf');
require('dotenv').config();

// Отримання токена з .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Обробник повідомлень
bot.on('text', (ctx) => {
    ctx.reply('Hello naxui!');
});

bot.on('message', (ctx) => {
    console.log(ctx.chat); // Виводимо всю інформацію про чат у логах
    ctx.reply(`Ваш chat_id: ${ctx.chat.id}`);
});

// Запуск бота
bot.launch();

console.log('Bot is running...');
