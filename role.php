<?php

$curl = curl_init();

$url = 'https://api.testausserveri.fi/v1/discord/roleInfo?id='.$_GET['id'];
if (isset($_GET['member'])) {
    $url = 'https://api.testausserveri.fi/v1/discord/memberInfo?role='.$_GET['id'];
}
curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);
$response = str_replace(".webp", ".jpg", $response);
$response = json_decode($response, true);

$name = $response['name'];
$members = $response["members"];

function remasterBio($bio) {
    $bio = preg_replace('/<(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})>/', '<a href="$1">$1</a>', $bio);
    $bio = str_replace(array("\r\n","\r","\n","\\r","\\n","\\r\\n"),"<br/>", $bio);
    $bio = preg_replace('/\*\*([^"]*)\*\*/', '<b>$1</b>', $bio);
    $bio = preg_replace('/\*([^"]*)\*/', '<i>$1</i>', $bio);
    return $bio;
}

function filterText($text) {
    return  preg_replace('/[[:^print:]]/', '', $text);
}

foreach ($members as $key => $member) {
    $members[$key]['bio'] = remasterBio($member['bio']);
}


function getAccountLink($account) {
    if ($account['type'] === "steam") return 'https://steamcommunity.com/profiles/'.$account['id'];
    if ($account['type'] === "twitter") return "https://twitter.com/".$account['name'];
    if ($account['type'] === "github") return "https://github.com/".$account['name'];
    if ($account['type'] === "spotify") return "https://open.spotify.com/user/".$account['name'];
    return "";
}


?>

<html>
<head>
    <title><?php echo $name?> - Testausserveri</title>
    <meta http-equiv="refresh" content="20">
    <meta name="author" content="@dfJ">
    <style type="text/css">
        <?php if (isset($_GET['embed'])): ?>
        BODY {overflow: hidden; background:transparent; color:yellow;}
        <?php else:?>
        body {
            background: url("bg.bmp");
            color:yellow;
            cursor: url(normal.cur), auto;
        }
        <?php endif;?>

        table, th, td {
            border: 1px solid;
        }
        a {
            color: greenyellow;
        }
    </style>
</head>
<BODY>
<h3><?php echo $name?></h3>
<center>

<table>
    <tbody>
    <tr>
        <th>Nimi</th>
        <th>Bio</th>
        <th>Tila</th>
        <th>Liitetyt tilit</th>
    </tr>
    <?php foreach($members as $member): ?>
        <tr>
            <th><img width="80" style="margin-left: 30px;margin-right: 30px;" src="<?php echo "img.php?url=".$member['avatar']?>"/> <br> <?php echo $member['displayName']?><br><?php echo $member['name']?>#<?php echo $member['discriminator']?></th>
            <th><i><?php echo filterText($member['bio'])?></i></th>
            <th>
                Tila:
                <center>
                <table>
                <?php foreach($member['presence'] as $memberActivity): ?>
                <?php $imgUrl = ((array_key_exists("emoji", $memberActivity) && $memberActivity['emoji'] != null) ? $memberActivity['emoji']['url'] : ($memberActivity['assets']['smallImage'] != null ? $memberActivity['assets']['smallImage'] : $memberActivity['assets']['largeImage']))?>
                    <tr>
                        <?php if ($imgUrl != null):?>
                        <th><img width="30" style="margin-left: 30px;margin-right: 30px;" src="<?php echo "img.php?url=".$imgUrl?>"/></th>
                        <?php endif;?>
                        <th>
                            <p><?php echo $memberActivity['name'];?>: <?php echo $memberActivity['state'];?></p>
                            <p><?php echo $memberActivity['details'];?></p>
                        </th>
                    </tr>
                <?php endforeach; ?>
                    <?php if (count($member['presence']) < 1):?>
                        <b>AFK</b>
                    <?php endif;?>
                </table>
                </center>
            </th>
            <th>
                <?php foreach($member['connectedAccounts'] as $account): ?>
                <a href="<?php echo getAccountLink($account)?>"><?php echo $account['type']?>: <?php echo $account['name']?></a>
                <br><hr>
                <?php endforeach;?>
            </th>
        </tr>
    <?php endforeach; ?>
    </tbody>


</table>
</center>
</BODY>
</html>
