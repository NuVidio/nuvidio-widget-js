# NuVidio Widget JS
> Library to use NuVidio Widget in JS applications

## Installation
1. `npm i nuvidio-widget-js`

## Usage

### Add NuVidio Widget

To use the NuVidio Widget in your application you must have the unique identifier provided by NuVidio. With the identifier you can use the method `addNuVidioWidget` as follow:

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.addNuVidioWidget('identifier', options);

// ...
```

You can set some options for the widget as well. This options allows you to change some configurations of the widget. ([Type `NuVidioWidgetOptions`](#nuvidiowidgetoptions))

<b>In case NuVidio Widget is already added to the page the previous configuration will be overlapped.</b>

### Remove NuVidio Widget

Is possible to remove the widget at any time by using the `removeNuVidioWidget` method:

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.removeNuVidioWidget();

// ...
```

### Using a custom button

The widget popup can be opened by your own custom button. To use this functionality your button must contain the id or class `nuvidio-widget-button`. E.g.: 

```html
<button id="nuvidio-widget-button" class="any-class-you-want">Widget</button>
<button class="nuvidio-widget-button any-class-you-want">Widget</button>
```

The model using id is more reliable but can be applied to only 1 button, while a class name can be used in multiple buttons.

## API

### NuVidioWidgetOptions

| <b>Property<b> | Type | Required | Default | Description |
| -------------- | ------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fabButton | `boolean`| ❌ | false | This options hides the left-bottom fab button used to open the video NuVidio Widget popup. |
| fabButtonContent | `string`| ❌ | Falar agora | Define the text inside the left-bottom fab button. |

## Contact

Any question or sugestion? You can use the [GitHub Issues](https://github.com/NuVidio/nuvidio-widget-js/issues) or send a email to gustavo@nuvidio.com.br.