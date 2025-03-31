const { Telegraf } = require('telegraf');
require('dotenv').config();

// Отримання токена з .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Обробник повідомлень
bot.on('text', (ctx) => {
    ctx.reply('Hello naxui zxc!');
});

bot.on('message', async (ctx) => {
    const messageText = ctx.message.text;
    const chatId = ctx.chat.id;
    const messageId = ctx.message.message_id;
    ctx.reply(messageText,messageId,chatId);
    if (messageText && messageText.toLowerCase().includes("привіт")) {
        try {
            ctx.reply("видаляю нахуй");
            await ctx.deleteMessage(messageId);
            console.log(`Deleted message in chat ${chatId}: "${messageText}"`);
        } catch (error) {
            console.error(`Failed to delete message:`, error);
        }
    }
});

if (!bot.polling) {  // Prevent multiple polling instances
    bot.launch();
    console.log("Bot is running...");
} else {
    console.log("Bot is already running!");
}

console.log('Bot is running...');
