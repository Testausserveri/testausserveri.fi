/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* globals countUp */
/* theme */
let darkMode = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) || false

function updateTheme(set) {
    if (!set) document.body.dataset.theme = (darkMode ? "dark" : "light")
    else {
        document.body.dataset.theme = localStorage.getItem("theme")
        darkMode = document.body.dataset.theme === "dark"
    }
    localStorage.setItem("theme", document.body.dataset.theme)
    if (document.querySelector("#theme-switch").checked !== darkMode) document.querySelector("#theme-switch").checked = darkMode
}
updateTheme(true)

document.querySelector("#theme-switch").addEventListener("change", (e) => {
    darkMode = e.target.checked
    updateTheme()
})

/* tooltip utility */
/**
 * @param {string} content
 * @param {HTMLHtmlElement} element
 * @returns {HTMLHtmlElement}
 */
function createToolTip(content, element) {
    const span = document.createElement("span")
    Object.assign(span.style, {
        display: "block",
        position: "fixed",
        width: "auto",
        marginTop: "10px",
        borderRadius: "8px",
        backgroundColor: "var(--card-background)",
        border: "1px solid var(--border)",
        color: "var(--text)",
        fontFamily: "'Ubuntu', sans-serif",
        padding: "6px",
        fontSize: "1rem",
        fontWeight: "600",
        textAlign: "center",
        transition: "ease-in-out opacity 0.3s",
        zIndex: "99",
        opacity: "0"
    })
    span.innerText = content
    const dims = element.getBoundingClientRect()
    document.body.appendChild(span)
    requestAnimationFrame(() => requestAnimationFrame(() => {
        const spanDims = span.getBoundingClientRect()
        span.style.top = `${dims.top + dims.height}px`
        span.style.left = `${dims.left + 15 - (spanDims.width / 2)}px`
        span.style.opacity = "1"
    }))
    return span
}

/* scrolling causes mouseout on images globally */
window.addEventListener("scroll", () => {
    const images = document.querySelectorAll("img")
    for (const image of images) if (typeof image.onmouseout === "function") image.onmouseout()
})

/* counters */
const options = {
    duration: 0.5,
    separator: " "
}

let memberCounter
let messageCounter
let showcasedProfiles
let boosterCounter
let showcasedBoosters

function processMarkdown(str) {
    return str
        // Escape HTML
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        // Markdown processing
        .replace(/&lt;(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)*?)&gt;/g, "<a href='$1'>$1</a>")
        .replace(/^> (.*$)/g, "<blockquote>$1</blockquote>")
        .replace(/\*\*(.*)\*\*/g, "<b>$1</b>")
        .replace(/\*(.*)\*/g, "<i>$1</i>")
        .replace(/\\n/g, "<br/>")
}

function getAverageColor(image) {
    const context = document.createElement("canvas").getContext("2d")
    context.imageSmoothingEnabled = true
    context.drawImage(
        image, 0, 0, 1, 1
    )
    return `rgb(${context.getImageData(
        0, 0, 1, 1
    ).data.slice(0, 3).join(", ")})`
}

function getAccountLink(account) {
    if (account.type === "steam") return `https://steamcommunity.com/profiles/${account.id}`
    if (account.type === "twitter") return `https://twitter.com/${account.name}`
    if (account.type === "github") return `https://github.com/${account.name}`
    if (account.type === "spotify") return `https://open.spotify.com/user/${account.id}`
    return null
}

const flagLogos = {
    HOUSE_BRILLIANCE: "assets/icons/badges/h_brilliance.svg",
    HOUSE_BALANCE: "assets/icons/badges/h_balance.svg",
    HOUSE_BRAVERY: "assets/icons/badges/h_bravery.svg",
    EARLY_VERIFIED_BOT_DEVELOPER: "assets/icons/badges/early_bot_developer.svg"
}

function updateAnalytics() {
    if (document.hasFocus() || !memberCounter || !messageCounter || !showcasedProfiles) {
        // Counters & Boosters
        fetch("https://api.testausserveri.fi/v1/discord/guildInfo")
            .then((res) => res.json())
            .then((data) => {
                // Boosters
                const boosters = document.getElementById("boosters")
                const boosterImageList = []
                for (const subscriber of data.premium.subscribers) {
                    if (subscriber.isHidden) {
                        const img = document.createElement("img")
                        img.src = `assets/icons/discord_defaults/${Math.floor(Math.random() * (5 + 1))}.png`
                        boosterImageList.push(img)
                    } else {
                        const img = document.createElement("img")
                        img.src = subscriber.avatar
                        let imgToolTip
                        img.onmouseover = () => {
                            img.style.zIndex = "99"
                            for (const child of boosters.children) if (child !== img) { child.style.opacity = "0.3"; child.style.filter = "blur(1px)" }
                            if (!imgToolTip) imgToolTip = createToolTip(subscriber.name, img)
                        }
                        img.onmouseout = () => {
                            for (const child of boosters.children) if (child !== img) { child.style.opacity = "1"; child.style.filter = "" }
                            img.style.zIndex = ""
                            if (imgToolTip) {
                                imgToolTip.style.opacity = "0"
                                const selfTooltip = imgToolTip
                                requestAnimationFrame(() => setTimeout(() => selfTooltip.remove()))
                                imgToolTip = undefined
                            }
                        }
                        img.setAttribute("alt", subscriber.name)
                        boosterImageList.push(img)
                    }
                }
                if (JSON.stringify(showcasedBoosters) !== JSON.stringify(data.premium.subscribers)) {
                    showcasedBoosters = data.premium.subscribers
                    if (boosters.hasAttribute("visible")) {
                        // Already displayed
                        for (const img of boosters.children) img.style.opacity = "0"
                        requestAnimationFrame(() => {
                            setTimeout(() => {
                                boosters.innerHTML = ""
                                boosters.append(...boosterImageList)
                                // eslint-disable-next-line no-plusplus
                                requestAnimationFrame(() => { requestAnimationFrame(() => { for (let i = 0; i < boosters.children.length; i++) setTimeout(() => { boosters.children[i].style.opacity = "1" }, i * 10) }) })
                            }, 300)
                        })
                    } else {
                        boosters.append(...boosterImageList)
                        // eslint-disable-next-line no-plusplus
                        requestAnimationFrame(() => { requestAnimationFrame(() => { for (let i = 0; i < boosters.children.length; i++) setTimeout(() => { boosters.children[i].style.opacity = "1" }, i * 10) }) })
                    }
                }

                // Counters
                if (!memberCounter || !messageCounter || !boosterCounter) {
                    memberCounter = new countUp.CountUp(
                        "memberCount", data.memberCount, options
                    )
                    messageCounter = new countUp.CountUp(
                        "messageCount", data.messagesToday, options
                    )
                    boosterCounter = new countUp.CountUp(
                        "boostCount", data.premium.subscriptions, options
                    )
                    memberCounter.start()
                    messageCounter.start()
                    boosterCounter.start()
                }
                memberCounter.update(data.memberCount)
                messageCounter.update(data.messagesToday)
                boosterCounter.update(data.premium.subscriptions)
            })

        // Profile showcases
        fetch("https://api.testausserveri.fi/v1/discord/memberInfo?role=743950610080071801")
            .then((res) => res.json())
            .then((data) => {
                // TODO: Why is this like this?
                // eslint-disable-next-line eqeqeq
                if (JSON.stringify(showcasedProfiles) == JSON.stringify(data.members)) return
                document.getElementById("cards").innerHTML = ""
                showcasedProfiles = data.members
                for (const member of data.members) {
                    // Main element
                    const card = document.createElement("div")
                    card.className = "card"
                    // Banner
                    let banner
                    if (member.banner) {
                        banner = document.createElement("img")
                        banner.className = "banner"
                        banner.src = `${member.banner}?size=600`
                    } else {
                        banner = document.createElement("div")
                        banner.className = "banner"
                    }
                    card.appendChild(banner)
                    // Profile picture
                    const profilePicture = document.createElement("img")
                    profilePicture.className = "profile-picture"
                    // Set banner color, if not present
                    profilePicture.onload = () => {
                        banner.style.backgroundColor = member.color ?? getAverageColor(profilePicture)
                    }
                    profilePicture.onerror = () => {
                        // Display default profile picture
                        const wantedDefault = member.avatar.split("/").reverse()[0]
                        profilePicture.crossOrigin = undefined
                        profilePicture.src = `assets/icons/discord_defaults/${wantedDefault ?? `${Math.floor(Math.random() * (5 + 1))}.png`}`
                    }
                    profilePicture.crossOrigin = "Anonymous"
                    profilePicture.src = member.avatar
                    card.appendChild(profilePicture)
                    // Flags
                    const flags = document.createElement("ul")
                    flags.className = "flags"
                    for (const flag of member.flags) {
                        if (flagLogos[flag] !== undefined) {
                            const item = document.createElement("li")
                            const img = document.createElement("img")
                            img.src = flagLogos[flag]
                            item.appendChild(img)
                            flags.appendChild(item)
                        } else {
                            console.error("Unknown member flag", flag)
                        }
                    }
                    card.appendChild(flags)
                    // Display-name
                    const displayName = document.createElement("p")
                    displayName.className = "displayname"
                    displayName.innerText = member.displayName
                    card.appendChild(displayName)
                    // Account name
                    const name = document.createElement("p")
                    name.className = "name"
                    name.innerText = `${member.name}#${member.discriminator}`
                    card.appendChild(name)
                    // Status
                    const customStatusData = member.presence.filter((item) => item.type === "CUSTOM")[0]
                    const status = document.createElement("p")
                    status.className = "status"
                    if (customStatusData !== undefined) {
                        const { emoji } = customStatusData
                        if (emoji && emoji.url) {
                            const img = document.createElement("img")
                            img.src = emoji.url
                            img.alt = emoji.name
                            status.appendChild(img)
                        }
                        status.appendChild(document.createTextNode(customStatusData.state))
                    } else {
                        status.innerText = " "
                    }
                    card.appendChild(status)
                    // Spacer
                    const line = document.createElement("div")
                    line.className = "line"
                    card.appendChild(line)
                    // Bio
                    const bio = document.createElement("p")
                    bio.className = "about"
                    bio.innerHTML = member.bio ? processMarkdown(member.bio) : ""
                    card.appendChild(bio)
                    // Title
                    const title = document.createElement("p")
                    title.className = "activity"
                    title.innerText = "TILA"
                    card.appendChild(title)
                    // Activities
                    const activities = document.createElement("ul")
                    activities.className = "activities"
                    for (const activity of member.presence.filter((item) => item.type !== "CUSTOM")) {
                        const item = document.createElement("li")
                        // Image combo
                        let largeImage
                        if (activity.assets.largeImage) {
                            largeImage = document.createElement("img")
                            largeImage.className = "largeImage"
                            largeImage.src = activity.assets.largeImage
                        } else {
                            largeImage = document.createElement("div")
                            largeImage.className = "largeImage"
                        }
                        let smallImage
                        if (activity.name === "Spotify" && activity.type === "LISTENING") {
                            smallImage = document.createElement("img")
                            smallImage.className = "smallImage"
                            smallImage.src = "assets/icons/accounts/spotify.svg"
                            smallImage.style.filter = "var(--logo-filter)"
                        } else if (activity.assets.smallImage) {
                            smallImage = document.createElement("img")
                            smallImage.className = "smallImage"
                            smallImage.src = activity.assets.smallImage
                        } else {
                            smallImage = document.createElement("div")
                            smallImage.className = "smallImage"
                        }
                        largeImage.alt = activity.assets.largeImageText ?? ""
                        smallImage.alt = activity.assets.smallImageText ?? ""
                        item.appendChild(largeImage)
                        item.appendChild(smallImage)
                        // Name
                        const activityName = document.createElement("p")
                        activityName.className = "name"
                        activityName.innerText = activity.name
                        item.appendChild(activityName)
                        // Details
                        const text = document.createElement("p")
                        text.className = "text"
                        text.innerText = `${activity.details ?? ""}\n${activity.state ?? ""}`
                        item.appendChild(text)
                        activities.appendChild(item)
                    }
                    card.appendChild(activities)
                    if (activities.innerHTML === "") activities.innerText = "AFK"
                    // Connected accounts
                    const accounts = document.createElement("ul")
                    accounts.className = "accounts"
                    for (const account of member.connectedAccounts) {
                        const item = document.createElement("li")
                        const link = document.createElement("a")
                        link.href = getAccountLink(account)
                        // Image
                        const image = document.createElement("img")
                        image.src = `assets/icons/accounts/${account.type}.svg`
                        image.className = "logo"
                        link.appendChild(image)
                        // Text
                        const text = document.createElement("p")
                        text.innerText = account.name
                        link.appendChild(text)
                        item.appendChild(link)
                        accounts.appendChild(item)
                    }
                    if (accounts.children.length !== 0) {
                        // Spacer
                        const line2 = document.createElement("div")
                        line2.className = "line"
                        card.appendChild(line2)
                        card.appendChild(accounts)
                    }

                    // Append to cards element
                    document.getElementById("cards").appendChild(card)
                }
            })
    } else {
        // console.log('Tab not focused, not updating...');
    }
}
updateAnalytics()
window.addEventListener("focus", () => {
    setTimeout(updateAnalytics, 500)
})
setInterval(updateAnalytics, 5100)

/* projects */
class Grid {
    constructor(data, selector) {
        this.data = data
        this.target = document.querySelector(selector)
        this.render()
    }

    render() {
        this.data.forEach((item, i) => {
            let domItem
            if (item.url) {
                domItem = document.createElement("a")
                domItem.href = `${item.url}?utm_source=testausserveri&utm_medium=homepage&utm_campaign=projects` // append some analytic magic
                domItem.setAttribute("rel", "noopener noreferrer")
                domItem.setAttribute("target", "_blank")
            } else {
                domItem = document.createElement("div")
            }

            domItem.className = "item"

            if (item.video) {
                const domBackground = document.createElement("video")
                domBackground.setAttribute("poster", item.image)
                domBackground.autoplay = true
                domBackground.loop = true
                domBackground.muted = true
                domBackground.setAttribute("playsinline", "")
                domBackground.className = "itemBackground"
                domBackground.id = `bg${i}`
                const domBackgroundSource = document.createElement("source")
                domBackgroundSource.setAttribute("src", item.video)
                domBackgroundSource.setAttribute("type", "video/mp4")
                domBackground.appendChild(domBackgroundSource)
                domItem.appendChild(domBackground)
            } else {
                const domBackground = document.createElement("div")
                domBackground.className = "itemBackground"
                domBackground.style["background-image"] = `url('${item.image}')`
                domItem.appendChild(domBackground)
            }

            const domContent = document.createElement("div")
            domContent.className = "itemContent"

            domContent.onclick = () => { document.querySelector(`#bg${i}`).play() }
            const domContentBig = document.createElement("div")
            domContentBig.className = "CBig"

            const domTitle = document.createElement("h3")
            domTitle.className = "piTitle"
            domTitle.innerHTML = item.name

            const domDesc = document.createElement("span")
            domDesc.className = "piOrg"
            domDesc.innerHTML = (item.desc ? item.desc.replace(/\n/g, "<br>") : item.real)
            domContentBig.appendChild(domTitle)
            domContentBig.appendChild(domDesc)
            if (item.additionalCardHtml) {
                const domContentSmall = document.createElement("div")
                domContentSmall.innerHTML = item.additionalCardHtml
                domContent.appendChild(domContentSmall)
            }

            domContent.appendChild(domContentBig)
            domItem.appendChild(domContent)

            this.target.className = "grid"
            this.target.appendChild(domItem)
        })
    }
}
fetch("https://testausserveri.fi/projects.json")
    .then((res) => res.json())
    .then((data) => {
        // eslint-disable-next-line no-unused-vars
        const projects = new Grid(data.projects, "#projects")
    }).catch((e) => {
        console.error("Failed to get projects list", e)
        document.getElementById("projects").innerHTML = "<p style=\"text-align: center;\">Projektilistaa ei voida näyttää. Tapahtui virhe :(</p>"
    })

/* notifications */
const notifications = {
    GithubJoin: {
        title: "Tervetuloa!",
        body: "Tervetuloa ja kiitos Github ryhmään liittymisesi tiimoilta. Hyviä koodaushetkiä!\nMuistathan liittyä myös Discordiimme :)",
        button: "OK, kiitos!"
    }
}

const notification = document.getElementById("notification")
const notificationTitle = document.getElementById("notification-title")
const notificationBody = document.getElementById("notification-message")
const notificationButton = document.getElementById("notification-button")

notification.onclick = () => {
    notification.style.opacity = 1
    requestAnimationFrame(() => {
        notification.style.opacity = 0
        setTimeout(() => {
            notification.style.display = "none"
        }, 200)
    })
}

// Notification type defined in the query
const notificationQuery = new URL(window.location.search, "https://testausserveri.fi").searchParams.get("notification")
if (notificationQuery !== null) {
    const notificationData = notifications[notificationQuery]
    if (notificationData) {
        notificationTitle.innerText = notificationData.title
        notificationBody.innerText = notificationData.body
        notificationButton.innerText = notificationData.button
        notification.style.display = "flex"
    } else {
        console.error("Unknown notification")
    }
}
