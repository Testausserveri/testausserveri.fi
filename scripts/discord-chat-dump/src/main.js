require("dotenv").config()

const { Client, Intents } = require("discord.js");
const fs = require("fs")
const https = require("https")

const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS] });

const basepath = "../../public/discordlive/"

const anonymiseMap = {}
let anonymiseCounter = 0

function anonymiseId(id) {
    if (anonymiseMap[id] == undefined) {
        anonymiseMap[id] = anonymiseCounter 
        anonymiseCounter++
    }
    return anonymiseMap[id]
}

const avatarsCached = []

function cacheAvatar(url, userid) {
    return new Promise((resolve, reject) => {
        try {
            const filename = `${anonymiseId(userid)}.${url.split('.').pop()}`

            if (avatarsCached.includes(url)) {
                return resolve(filename)
            }
            avatarsCached.push(url)

            const file = fs.createWriteStream(`${basepath}avatars/${filename}`);
            https.get(url, function(response) {
                response.pipe(file)
                
                file.on("finish", () => {
                    file.close()
                    resolve(filename)
                })
            })
        } catch (e) {
            reject(e)
        }
    })
}

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

    const data = (await Promise.allSettled([...messages].reverse().map(async ([i, message]) => ({
        id: getId(),
        author: {
            name: message.member.displayName,
            avatar: await cacheAvatar(message.author.displayAvatarURL(), message.member.id),
            color: message.member.displayHexColor
        },
        content: message.content,
        timestamp: message.createdAt.getTime()
    })))).map(item => item.value)
    await fs.promises.writeFile(`${basepath}replay.json`, JSON.stringify(data, null, 4))

    process.exit()
})

client.login(process.env.TOKEN);
