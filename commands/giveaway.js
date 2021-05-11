const Discord = require("discord.js");

module.exports = {
  name: "giveaway#1|6438634274610910284673268764365",
  category: "General ",
  description: "Ontvan de server informatie",
  run: async (client, message, args) => {
   
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#6ef54c')
	.setAuthor('CraftingNetwork 🎉GiveAway🎉', 'https://cdn.discordapp.com/attachments/832511681182957589/832511730269421568/Logo-Groot.png', 'https://craftingnetwork.nl/')
	.setDescription('Maak kans op een **Discord Nitro**!')
	.setThumbnail('https://cdn.discordapp.com/attachments/832511681182957589/832511730269421568/Logo-Groot.png')
	.addFields(
		{ name: '❓__Waarom__', value: 'We hebben de 100 discord leden behaald!🎉' },
		{ name: '🔨__Eisen__', value: 'Geen! We zijn iedereen heel erg dankbaar dus iedereen mag mee doen!' },
		{ name: '🫂__Wie__', value: `Iedereen mag mee doen behalve __staff__` },
	)
    .setImage('https://cdn.discordapp.com/attachments/832511681182957589/841614894675787776/nitro_giveaway.png')
	.setTimestamp()
	.setFooter('© CraftingNetwork', 'https://cdn.discordapp.com/attachments/832511681182957589/832511730269421568/Logo-Groot.png');

    message.channel.send(exampleEmbed);
  }
}