<?php

function remasterBio($bio) {
    $urlRegex = '/<(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})>/';
    $bio = str_replace(array("\r\n","\r","\n","\\r","\\n","\\r\\n"),"</br>", $bio);
    $bio = preg_replace('/\*\*([^"]*)\*\*/', '<b>$1</b>', $bio);
    $bio = preg_replace('/\*([^"]*)\*/', '<i>$1</i>', $bio);
    $hyperlinks = array();
    try {
        preg_match_all($urlRegex, $bio, $urlRegexResult, PREG_SET_ORDER);
        if (is_array($urlRegexResult) && count($urlRegexResult) > 0) {
            foreach ($urlRegexResult as $hyperlink){
                $id = "hyperlink". mt_rand(100000,999999);
                $bio = str_replace('<'.$hyperlink[1].'>', $id, $bio);
                $hyperlinks[$id] = $hyperlink[1];
            }
        }
    } catch (Exception $ignored) {}
    $bio = html_escape($bio);
    foreach ($hyperlinks as $linkKey => $link) {
        $bio = str_replace($linkKey, '<a href="'.htmlentities($link).'">'.htmlentities($link).'</a>', $bio);
    }
    return $bio;
}

function html_escape($text) {
    $string = htmlentities($text);
    return str_replace(array("&lt;i&gt;", "&lt;b&gt;", "&lt;/i&gt;", "&lt;/b&gt;", "&lt;/br&gt;"), array("<i>", "<b>", "</i>", "</b>", "</br>"), $string);
}

function getAccountLink($account) {
    if ($account['type'] === "steam") return 'https://steamcommunity.com/profiles/'.$account['id'];
    if ($account['type'] === "twitter") return "https://twitter.com/".$account['name'];
    if ($account['type'] === "github") return "https://github.com/".$account['name'];
    if ($account['type'] === "spotify") return "https://open.spotify.com/user/".$account['name'];
    return "";
}