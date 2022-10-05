<script>
    google.load("feeds", "1");
    function OnLoad() {
    var feedControl = new google.feeds.FeedControl();

    // RSS - XML Ekleme
    feedControl.addFeed("http://www.milliyet.com.tr/D/rss/rss/Rss_2.xml", "Dünya");
    feedControl.addFeed("http://www.milliyet.com.tr/D/rss/rss/Rss_3.xml", "Ekonomi");
    feedControl.addFeed("http://www.milliyet.com.tr/D/rss/rss/Rss_4.xml", "Siyaset");


    feedControl.draw(document.getElementById("content"));
}

google.setOnLoadCallback(OnLoad);
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    
    
</body>
</html>