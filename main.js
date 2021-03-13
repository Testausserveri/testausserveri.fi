fetch('https://koira.testausserveri.fi/api/guildInfo')
.then((res) => res.json())
.then(data => {
    document.getElementById('memberCount').innerHTML = data.memberCount;
    document.getElementById('messageCount').innerHTML = data.messagesToday;
})

fetch('projects.json')
.then(res => res.json())
.then((data) => {
    console.log(data);
    data.forEach((item, i) => {
        let domItem;
        if (item.url) {
            domItem = document.createElement('a');
            domItem.href = item.url + '?utm_source=testausserveri&utm_medium=homepage&utm_campaign=projects'; // append some analytic magic
            domItem.setAttribute('rel', 'noopener noreferrer');
            domItem.setAttribute('target', '_blank');
        } else {
            domItem = document.createElement('div');
        }

        domItem.className = 'item';

        if (item.video) {
            let domBackground = document.createElement('video');
            domBackground.setAttribute('poster', item.image);
            domBackground.autoplay = true;
            domBackground.loop = true;
            domBackground.muted = true;
            domBackground.setAttribute('playsinline', '');
            domBackground.className = 'itemBackground';
            domBackground.id = 'bg' + i;
            let domBackgroundSource = document.createElement('source');
            domBackgroundSource.setAttribute('src', item.video);
            domBackgroundSource.setAttribute('type', 'video/mp4');
            domBackground.appendChild(domBackgroundSource);
            domItem.appendChild(domBackground);
        } else {
            let domBackground = document.createElement('div');
            domBackground.className = 'itemBackground';
            domBackground.style['background-image'] = 'url(\'' + item.image + '\')'
            domItem.appendChild(domBackground);
        }
        

        let domContent = document.createElement('div');
        domContent.className = 'itemContent';
        
        domContent.onclick = () => {document.querySelector('#bg' + i).play();};
        let domContentBig = document.createElement('div');
        domContentBig.className = 'CBig';

        let domTitle = document.createElement('h3');
        domTitle.className = 'piTitle';
        domTitle.innerHTML = item.name;

        let domDesc = document.createElement('span');
        domDesc.className = 'piOrg';
        domDesc.innerHTML = item.desc.replace(/\n/g, '<br>');
        domContentBig.appendChild(domTitle);
        domContentBig.appendChild(domDesc);
        if (item.additionalCardHtml) {
            let domContentSmall = document.createElement('div');
            domContentSmall.innerHTML = item.additionalCardHtml;
            domContent.appendChild(domContentSmall);
        }

        domContent.appendChild(domContentBig);
        domItem.appendChild(domContent);

        document.querySelector('.projectsGrid').appendChild(domItem);
    })
})