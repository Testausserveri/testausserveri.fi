<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.testausserveri.fi/v1/discord/guildInfo',
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
$response = json_decode($response, true);

$memberCount = $response["memberCount"];
$membersOnline = $response["membersOnline"];
$messagesToday = $response["messagesToday"];

?>

<html>
<head>
<title>Statistics</title>
<meta http-equiv="refresh" content="5">
<meta name="author" content="@dfJ">
<style type="text/css">
  BODY {overflow: hidden; background:transparent; color:yellow;}
 </style>
</head>
<BODY>
<ul>
<li>Jäsenet: <?php echo strval($membersOnline)?> / <?php echo strval($memberCount)?></li>
<li>Viestejä: <?php echo strval($messagesToday)?></li>
</ul>
</BODY>
</html>
