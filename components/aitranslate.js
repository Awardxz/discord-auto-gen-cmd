require("dotenv").config();
const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function getGroqChatCompletion(question) {
  if (!question || question.trim() === "") {
    throw new Error("The question cannot be empty or null.");
  }

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant. When asked to create a Discord command, provide a complete JavaScript file using Discord.js SlashCommandBuilder. Include proper imports, command registration, and detailed comments. Make the code functional, concise, and well-structured.
      example:
      const { SlashCommandBuilder } = require('discord.js');
      module.exports = {
        data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Provides information about this bot'),
    async execute(interaction) {
        await interaction.reply('waledsoft - product from waledsoft industries');
    },
};

ONLY RESPOND WITH THE CODE, NO ADDITIONAL MESSAGES OR FORMATTING. DON'T USE BACKTICKS`,
},
      {
        role: "user",
        content: question,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

  return response.choices[0].message.content;
}

module.exports = { getGroqChatCompletion };
