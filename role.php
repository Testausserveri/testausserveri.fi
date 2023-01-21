<?php
require "utils.php";

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

foreach ($members as $key => $member) {
    $members[$key]['bio'] = remasterBio($member['bio']);
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
            <th><img width="80" style="margin-left: 30px;margin-right: 30px;" src="<?php echo "img.php?url=".urlencode($member['avatar'])?>"/> <br> <?php echo htmlentities($member['displayName'])?><br><?php echo htmlentities($member['name'])?>#<?php echo $member['discriminator']?></th>
            <th><i><?php echo $member['bio']?></i></th>
            <th>
                <center>
                <table>
                <?php foreach($member['presence'] as $memberActivity): ?>
                <?php $imgUrl = urlencode((array_key_exists("emoji", $memberActivity) && $memberActivity['emoji'] != null) ? $memberActivity['emoji']['url'] : ($memberActivity['assets']['smallImage'] != null ? $memberActivity['assets']['smallImage'] : $memberActivity['assets']['largeImage']))?>
                    <tr>
                        <?php if ($imgUrl != null):?>
                        <th><img width="30" style="margin-left: 30px;margin-right: 30px;" src="<?php echo "img.php?url=".urlencode($imgUrl)?>"/></th>
                        <?php endif;?>
                        <th>
                            <p><?php echo html_escape($memberActivity['name']);?>: <?php echo html_escape($memberActivity['state']);?></p>
                            <p><?php echo html_escape($memberActivity['details']);?></p>
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
                <a href="<?php echo getAccountLink($account)?>"><?php echo $account['type']?>: <?php echo html_escape($account['name'])?></a>
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
