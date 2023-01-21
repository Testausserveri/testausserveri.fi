<?php


$curl = curl_init();
header("Content-Type: image/jpeg");

$url = urldecode($_GET['url']);

$urlInfo = parse_url($url);


if ($urlInfo['host'] !== "cdn.discordapp.com" && $urlInfo['host'] !== "i.scdn.co") {
    exit;
}

curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
));
curl_setopt($curl, CURLOPT_WRITEFUNCTION, function($curl, $data) {
    echo $data;
    ob_flush();
    flush();
    return strlen($data);
});

$response = curl_exec($curl);

curl_close($curl);
