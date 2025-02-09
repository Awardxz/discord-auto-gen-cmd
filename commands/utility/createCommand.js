const { SlashCommandBuilder } = require('discord.js');
const { getGroqChatCompletion } = require('../../components/aitranslate');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('createcmd')
        .setDescription('create your own command')
        .addStringOption(option =>
            option
                .setName('cmd')
                .setDescription('enter your command')),

    async execute(interaction) {
        const cmd = interaction.options.getString('cmd') ?? 'No command provided';
        const text = await getGroqChatCompletion(cmd);
        await interaction.deferReply();
        // Build file path in commands/utility folder
        const filePath = path.join(__dirname, `cmd_${Date.now()}.js`);
        fs.writeFileSync(filePath, text);

        await interaction.editReply(text);
    },
};
