const Discord = require("discord.js");

module.exports = {
  name: "help",
  category: "General ",
  description: "Ontvan de server informatie",
  run: async (client, message, args) => {
   
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('GREEN')
	.setAuthor('CraftingNetwork Informatie', 'https://cdn.discordapp.com/attachments/832511681182957589/832511730269421568/Logo-Groot.png', 'https://craftingnetwork.nl/')
	.setDescription('Welkom bij CraftingNetwork!\n Hier kan je alle commands vinden')
	.setThumbnail('https://cdn.discordapp.com/attachments/832511681182957589/832511730269421568/Logo-Groot.png')
	.addFields(
		{ name: '🔨__Moderate__', value: '``!warn``, ``!warnings``, ``!clearwarnings``, ``!mute``, ``!unmute``, ``!kick``, ``!ban``, ``!softban``, ``!purge``' },
		{ name: '🫂__Community__', value: '``!suggest``, ``!report``, ``!meme``' },
		{ name: '🎉__Giveaway__', value: '``!start``, ``!end``, ``!reroll``' },
		{ name: '💰__Economy__', value: '``!bal``, ``!beg``, ``!daily``, ``!inv``, ``!lb``, ``!shop``, ``!transfer``, ``!weekly``, ``!work``, ``!addmoney``, ``!setmoney``' },
		{ name: '🎵__Music__', value: '``!clear-queue``, ``!filter``, ``!loop``, ``!nowplaying``, ``!pause``, ``!play``, ``!queue``, ``!resume``, ``!search``, ``!shuffle``, ``!skip``, ``!stop``, ``!volume``' },
	)
	.setTimestamp()
	.setFooter('© CraftingNetwork', 'https://cdn.discordapp.com/attachments/832511681182957589/832511730269421568/Logo-Groot.png');

    message.channel.send(exampleEmbed);
  }
}