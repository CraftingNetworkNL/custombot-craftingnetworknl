const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    category: "General ",
    description: "Ontvan de server informatie",
    run: async (client, message, args) => {


        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`CraftingNetwork - Meme's`)
            .setURL(`https://craftingnetwork.nl/`)
            .setTimestamp()
            .setFooter('© CraftingNetwork', 'https://cdn.discordapp.com/attachments/828616968155561987/831551877489229864/Logo-Groot.png');

        message.channel.send(Embed);
    }
};