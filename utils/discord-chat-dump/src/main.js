require("dotenv").config()

const { Client, Intents } = require("discord.js");
const fs = require("fs/promises")

const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS] });

client.on("ready", async () => {
	console.log(`Logged in as ${client.user.tag}!`);

    const channel = await client.channels.fetch(process.env.CHANNEL)
    await channel.guild.members.fetch()
    
    const messages = await channel.messages.fetch({limit: 100})

    let i = 0
    const getId = () => {
        i++
        return i
    }

    const data = [...messages].reverse().map(([i, message]) => ({
        author: {
            name: message.author.username,
            avatar: message.author.displayAvatarURL(),
            color: message.member.displayHexColor
        },
        id: getId(),
        content: message.content,
        timestamp: message.createdAt.getTime()
    }))

    await fs.writeFile("dump.json", JSON.stringify(data, null, 4))

    process.exit()
})

client.login(process.env.TOKEN);
