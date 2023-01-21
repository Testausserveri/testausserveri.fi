<?php
require "utils.php";

$curl = curl_init();

$url = 'https://api.testausserveri.fi/v1/projects?links=sus';
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
$response = json_decode($response, true);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Testausserveri</title>
  <meta charset="UTF-8">
  <style>
    body {
      background: url("bg.bmp");
      color: white;
      cursor: url(normal.cur), auto;
    }
    a {
      color: greenyellow;
    }
     h1,h2 {font-family: 'comic sans ms';}
    #ebin {display:none;}
  </style>

</head>
<body>
<h1>
<marquee>  <img src="logo.gif" alt="Testausserveri"></marquee>
</h1>
<p>
  Testausserveri on Discord-palvelin  kaikille koodaamisesta, graafisesta suunnittelusta tai vaikka web-suunnittelusta kiinnostuneille.
</p>
<p>
  Palvelimen liittymislinkki: <a href="https://discord.testausserveri.fi">https://discord.testausserveri.fi</a>
</p>
<p>
  Testausserverin yhteisö kehittää erilaisia mielenkiintoisia projekteja. Vilkaise alta!
</p>
<!-- End of WebFreeCounter Code -->
  <a href="https://instagram.com/Testausserveri" target="_blank"><img src="insta.jpg"></a>
<iframe src="stats.php" height="70" width="220" allowtransparency="true"></iframe><br>
<a role="button" target="popup" href="role.php?id=839072621060423771&member">Tutustu arvojäseniimme</a>
<h2>
  Projektimme
</h2>
Tässä on jonkinlainen lista projekteistamme. Siinä ei ole välttämättä aivan kaikkia.
<ul>
    <?php foreach($response as $project): ?>
        <li>
            <h3><?php echo htmlentities($project['name'])?></h3>
            <p>
                <?php echo htmlentities($project['description'])?>
            </p>
            <p>
                <?php if (array_key_exists("links", $project)): ?>
                <?php foreach($project['links'] as $link): ?>
                    <a href="<?php echo htmlentities($link['url'])?>"><?php echo htmlentities($link['url'])?></a><br/>
                <?php endforeach; ?>
                <?php endif;?>
            </p>
        </li>
    <?php endforeach; ?>
</ul>
<iframe src="role.php?id=743950610080071801&member&embed" style="width: 100%;" height="550" allowtransparency="true"></iframe>
<a href="http://netscape.com" target="_blank"><img src="netscape.gif"></a>
<a href="http://click.hotlog.ru/?2594090" target="_blank">
  <img src="http://hit5.hotlog.ru/cgi-bin/hotlog/count?s=2594090&im=351" border="0"
       title="HotLog" alt="HotLog"></a>
</body>
<footer>
  <hr>
  <p>Copyright &copy; 2020-2022 Testausserveri ja jäsenet. <a href="https://testausserveri.fi"><i>Palaa takaisin normaalisivuille</i></a> </p>
</footer>
  
<audio src="win98.wav"  controls id="ebin" autoplay>
<bgsound src="win98.wav" loop="infinite"/>
</audio>
  <script>
    /*let ebin = document.querySelector('#ebin');
    Object.keys(window).forEach(key => {
    if (/^on/.test(key)) {
        window.addEventListener(key.slice(2), event => {
            ebin.play();
        });
    }
});*/
    
  </script>
</html>
