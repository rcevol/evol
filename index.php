<!doctype html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<title>Smart Mirror</title>
	<meta name="description" content="The Magic Mirror">
	<meta http-equiv="refresh" content="1800" /> <!-- Refreshes the whole page every every 1800 seconds -->
	<link rel="stylesheet" href="style.css">
	<link href='http://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Black+Ops+One" rel="stylesheet" type='text/css'> 
	</head>
<body>
	<div id="wrapper">
		<div id="upper-left">
			<div id="clock"></div> <!-- Including clock.js to the "clock" <div> (using innerHTML in the .js script) -->
		</div>
		<div id="upper-right">
			<h2 class="line">----BBC News----</h2>
			<?php // Code for getting the RSS-news-feed
				if( ! ini_get('date.timezone') )
				{
					date_default_timezone_set('Asia/Kolkata');
				}
				$rss = new DOMDocument();
				$rss->load('http://feeds.bbci.co.uk/news/world/asia/india/rss.xml'); //Change RSS feed link as required
				$feed = array();
				foreach ($rss->getElementsByTagName('item') as $node) {
					$item = array (
					'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
					'desc' => $node->getElementsByTagName('description')->item(0)->nodeValue,
					'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
					);
					array_push($feed, $item);
				}
   
				$limit = 3; // Change this to change the number of posts displayed
				for($x=0;$x<$limit;$x++) {
					$title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
					$description = $feed[$x]['desc'];
					$date = date('j F', strtotime($feed[$x]['date']));
					//Change the below echo statements to alter the display format
					echo '<h2 class="title">'.$title.'</h2>';
					echo '<p class="date">'.$date.'</p>';
					echo '<p class="descript">'.strip_tags($description, '<p><b>').'</p><h2 class="line">--------</h2>';
				}
			?>
		</div>
		<div id="bottom">
			<h2 class="line">----BBC Weather - Chennai, India----</h2>
			<?php // Code for getting the RSS-weather-feed
				$rss = new DOMDocument();
				$rss->load('http://open.live.bbc.co.uk/weather/feeds/en/1264527/observations.rss'); //Change the RSS feed link as required.
				$feed = array();
				foreach ($rss->getElementsByTagName('item') as $node) {
					$item = array (
					'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
					'desc' => $node->getElementsByTagName('description')->item(0)->nodeValue,
					'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
					);
					array_push($feed, $item);
				}
   
			$limit = 1; // CHange this to change the number of posts
			for($x=0;$x<$limit;$x++) {
				$title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
				$description = $feed[$x]['desc'];
				$date = date('j F', strtotime($feed[$x]['date']));
				//Change the below echo statements to alter the display format
				echo '<h2 class="weather">'.$title.'</h2>';
				echo '<p>'.$date.'</p>';
				echo '<p>'.strip_tags($description, '<p><b>').'</p><h2 class="line">--------</h2>';
			}
			?>
		</div>
	</div>
	<script type="text/javascript" src="clock.js"></script>
</body>
</html>
