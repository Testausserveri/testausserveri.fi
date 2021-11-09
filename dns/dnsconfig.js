var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

var CF_PROXY_DEFAULT_ON = {'cloudflare_proxy_default': 'on'};
var CF_PROXY_OFF = {'cloudflare_proxy': 'off'};     // Proxy disabled.
var CF_PROXY_ON = {'cloudflare_proxy': 'on'};       // Proxy enabled.



D('testausserveri.fi', REG_NONE, NO_PURGE, DnsProvider(DNS_CLOUDFLARE),
    CF_PROXY_DEFAULT_ON,
    ALIAS('testausserveri.fi.', 'testausserveri.github.io.'),
    CNAME('www', '@'),
    A('teapot', '140.238.217.189', CF_PROXY_OFF),

    // Projects
    // Please append to the record line a comment with the project name and the person responsible for its server.
    // If the project is available under the Testausserveri GitHub organization, then just the project name is enough.
    A('ctf', '152.67.67.152'), // TestausCTF - #midnighter
    A('h-challenge', '167.172.167.138', CF_PROXY_OFF), // TestausCTF - #midnighter
    CNAME('karhu-fallback', 'mgh2-http.mixu.wtf.'), // Karhu - Mikael
    CNAME('karhu', 'mgh2-http.mixu.wtf.'), // Karhu - Mikael
    CNAME('koira', 'mgh2-http.mixu.wtf.'), // Testauskoira API - Mikael
    CNAME('abitikku', 'testausserveri.github.io.'), // Abitikku
    CNAME('abitikku-versions', 'testausserveri.github.io.'), // Abitikku
    CNAME('abitti', 'abittiopenaccess.pages.dev.'), // Abitti OpenAccess
    CNAME('antiikki', 'antiikki-testausserveri-fi.pages.dev.'), // Testausserveri.fi v1
    CNAME('discord', 'testausserveri.github.io.'), // Discord forwarding
    CNAME('git', 'testausserveri.github.io.'), // GitHub forwarding
    CNAME('static', 'testausserveri.github.io.'), // Static files
    CNAME('time', 'testausserveri.github.io.'), // TestausTime
    CNAME('ug', 'relay.dfjapis.com.', CF_PROXY_OFF), // TestausTime
    CNAME('openwilma_js', 'openwilma.github.io.'), // OpenWilma js documentation - https://github.com/OpenWilma/
    CNAME('openwilma', 'openwilma.github.io.'), // OpenWilma - https://github.com/OpenWilma/
    CNAME('lehti', 'testausserveri.github.io.'), // Testauslehti
    CNAME('alice', 'ihmemaassa.github.io.'), // Testausneule - Alice
    CNAME('gitlab', 'vps1.niilasoika.me', CF_PROXY_OFF),
    
    // Memes
    CNAME('datanomi', 'datanomi.net.', CF_PROXY_OFF), // datanomi - Cumpal
    CNAME('arvojasen', 'arvojasen.midka.dev.', CF_PROXY_OFF), // Arvojasen :D - Midka
    CNAME('eioikeutta', 'eioikeutta.netlify.app.', CF_PROXY_OFF), // Ei sulla oikeutta oo - Nikke

    CNAME('akatemia', 'testausserveri.github.io.'), // TestausAkatemia (Niilas)
    
    // Other
    TXT('_github-challenge-testausserveri', 'f037aa581f'), // GitHub organization challenge
    TXT('@', 'google-site-verification=6XQ_v6tkh3jB_hl63IA4iMS8RV3bj9rzKfaQxomX6i4'), // Google site verification

    // Mail
    //Yandex(),
    // MX('koira', 10, 'teapot.testausserveri.fi.'), this is defined on CF, DNSControl doesn't like this line
    Google(),
    Mailerlite(),
    TXT('@', 'v=spf1 include:_spf.mlsend.com include:_spf.google.com ~all')
);

function Mailerlite() {
    return [
        TXT('ml._domainkey', 'k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZPVgEYMyfzZ2ybrXBQRS7uifdpzB0SNMoWMCYnsX46vU3KZ71Iz6tgcQGk4DOhRkAP5iLxNDm/s5SxD6Esn3rFHd2Cu5yIwCDLYBidyqoaa1QWmmglkFkglJXvQBp5XVX5ZXunTUHf2Sqy3MMQU9/5rY4xpRRaLVs8Yvt6i9Y7QIDAQAB'),
    ];
}

function Google() {
    return [
        MX('@', 1, 'ASPMX.L.GOOGLE.COM.'),
        MX('@', 5, 'ALT1.ASPMX.L.GOOGLE.COM.'),
        MX('@', 5, 'ALT2.ASPMX.L.GOOGLE.COM.'),
        MX('@', 10, 'ALT3.ASPMX.L.GOOGLE.COM.'),
        MX('@', 10, 'ALT4.ASPMX.L.GOOGLE.COM.'),
        CNAME('mail', 'ghs.googlehosted.com.')
    ]
}
function Yandex() {
    return [
        TXT('@', 'yandex-verification: 223f0c4d9969e343'),
        TXT('mail._domainkey', 'v=DKIM1; k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCen5c1QBztK6Vwm5NRg2bfkPWIwymGIJI03bwVPUumCWG8BV+uKqU58T4NIpiE4mFWi9fjVWgD2fgstlKyrk7pmFvGNkHOSG1k51AHtsYrcF1vfzpK0NWaw3D0juXzq6Ii26ua5ZKIKNKnH52KPsxcDszRsidTJAgOW1gUBTuMAwIDAQAB'),
        MX('@', 10, 'mx.yandex.net.')
    ];
}
