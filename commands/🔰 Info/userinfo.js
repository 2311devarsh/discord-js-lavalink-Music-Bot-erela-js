const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "userinfo",
    aliases: ["uinfo"],
    category: "🔰 Info",
    description: "Get information about a user",
    usage: "userinfo [@USER]",
    run: async (client, message, args, cmduser, text, prefix) => {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("Please mention the user who you want info about.");
        var playing = "[ " + user.presence.activities + " ]";
        const who = new Discord.MessageEmbed()
            .setTitle("User Info:")
            .addField("Full Username", `\`${user.tag}\``)
            .addField("ID", "`" + user.id + "`")
            .addField("Playing", "`" + playing + "`", true)
            .addField("Status", `\`${user.presence.status}\``, true)
            .addField("Joined Discord At", "`" + user.createdAt + "`")
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setThumbnail(user.avatarURL());
        message.channel.send(who);
    },
};
