# CardTabs
Card tabs is yet another minimal jQuery plugin that allows for very simple tabs. The usage is explained below, click [here](http://blekerfeld.github.io/CardTabs) for a demo.

## Requirements
* jQuery 1.2 or higher

## Simple usage

Make sure that jQuery is loaded. Download `jquery.cardtabs.js` and `jquery.cardtabs.css` and add them to your page:

```

<link rel='stylesheet' href='path/to/jquery.cardtabs.css'>
<script type='text/javascript' src='path/to/jquery.cardtabs.js'></script>

```

### HTML 

The tabs html is very simple. There is one container with a tab - bar (`card-tabs-bar`) and a tab stack (`card-tabs-stack`). The actual tabs are divs, the `data-tab` attribute has to contain their name / ID. The links (a-elements) in the tab bar also have a `data-tab`-attribute with the corresponding tab ID.

```
<div class='container'>
	<div class='card-tabs-bar'>
		<a data-tab='tab-one'>Tab one</a>
		<a data-tab='tab-two'>Tab two</a>
	</div>
	<div class='card-tabs-stack'>
		<div data-tab='tab-one'>
			Contents of the first tab...
		</div>
		<div data-tab='tab-two'>
			Contents of the second tab...
		</div>
	</div>
</div>

```

### JavaScript

Use the following code to initialize the tabs.

```
<script type='text/javascript'>
$('.container').cardTabs();
</script>
```

