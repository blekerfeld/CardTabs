
# [CardTabs](https://cardtabs.js.org)
CardTabs is a tiny, dependency-free tab widget built with plain JavaScript and modern CSS. It keeps the original lightweight API but removes jQuery from the implementation.

## Requirements
* No dependencies

## Simple usage

Load the stylesheet and script and initialize the tabs on one or more containers:

```html
<link rel="stylesheet" href="assets_path/css/cardtabs.css">
<script src="assets_path/js/cardtabs.js"></script>

<script>
  document.querySelectorAll('.container').forEach((element) => {
    element.cardTabs();
  });
</script>
```

You can also use the global helper:

```html
<script>
  cardTabs('.container');
</script>
```

### HTML

Each tab panel is a direct child of the container and uses a `data-tab` attribute for its label.

```html
<div class="container">
  <div data-tab="Tab one">
    Content for the first tab.
  </div>
  <div data-tab="Tab two">
    Content for the second tab.
  </div>
  <div data-tab="Tab three">
    Content for the third tab.
  </div>
</div>
```

### JavaScript API

```js
const target = document.querySelector('.container');
CardTabs.init(target);

// or
cardTabs('.container', { theme: 'inset' });
```

## Options

### Manually set the active tab
Add the `active` class to the panel you want open by default:

```html
<div class="active" data-tab="Active tab">
  This tab opens first.
</div>
```

### Themes
The included themes are still supported through the `theme` option:

```js
cardTabs('.container', { theme: 'inset' });
```

## Creating themes

You can target the generated elements with the theme name as a CSS class. For example:

```css
.card-tabs-bar.yourthemename { }
.card-tabs-bar.yourthemename .card-tabs-tab { }
.card-tabs-bar.yourthemename .card-tabs-tab.active { }
.card-tabs-stack.yourthemename .card-tabs-panel { }
```

Then initialize it with:

```js
cardTabs('.container', { theme: 'yourthemename' });
```
