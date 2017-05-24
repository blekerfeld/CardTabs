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

The html is very simple. There is one container, with the actual tabs as divs, the `data-tab` attribute has to contain their name. The links on the top are automatically generated.



```
<div class='container'>
    <div data-tab="Tab one">
    	/* contents of the first tab...  */
    </div>
    <div data-tab="Tab two">
        /* contents of the second tab...  */
    </div>
    <div data-tab="Tab three">
        /* contents of the third tab...  */
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

## Options

### Manualy set the active tab
It is very simple to load another tab as the active tab. Just give that tab `active` as class:

```
<div class='active' data-tab='Active tab'></div>
```

### Themes
Some themes are included in card tabs, to use them they have to be defined in the javascript, like this:

```
$('.container').cardTabs({'theme': 'dark'});
```