fetch('https://koira.testausserveri.fi/api/guildInfo')
.then((res) => res.json())
.then(data => {
    document.getElementById('memberCount').innerHTML = data.memberCount;
    document.getElementById('messageCount').innerHTML = data.messagesToday;
})
