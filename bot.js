    const { Telegraf } = require('telegraf');
    require('dotenv').config();

    // Отримання токена з .env
    const bot = new Telegraf(process.env.BOT_TOKEN);

    // Обробник повідомлень
    console.log(`Chat ID: ${ctx.chat.id}`);
    ctx.reply(`Ваш chat_id: ${ctx.chat.id}`);

    // Запуск бота
    bot.launch();

    console.log('Bot is running...');
        