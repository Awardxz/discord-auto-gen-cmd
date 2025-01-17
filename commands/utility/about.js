const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('What is this bot?'),
	async execute(interaction) {
		await interaction.reply('example - auto adds and creates commands');
	},
};
