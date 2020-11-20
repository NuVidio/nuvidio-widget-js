# NuVidio Widget JS
> Library to use NuVidio Widget in JS applications

## Installation
1. `npm i nuvidio-widget-js`

## Usage

### Import NuVidio Widget Scripts

The first thing you must do is import the widget scripts. This import guarantee that the script will be available when you set a department. The import is done through the method `importScripts`:

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.importScripts();

// ...
```

### Set Department

To use the NuVidio Widget in your application you must have the unique identifier to the department created in your company account. With the identifier you can use the method `setDepartment` as follow:

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.setDepartment('identifier', options);

// ...
```

You can set some options for the widget as well. This options allows you to change some configurations of the widget. ([Type `NuVidioWidgetOptions`](#nuvidiowidgetoptions))

<b>In case NuVidio Widget is already added to the page the previous configuration will be overlapped.</b>

### Remove NuVidio Widget

Is possible to remove the widget at any time by using the `removeWidget` method:

```jsx
import NuVidioWidget from 'nuvidio-widget-js';

// ...

NuVidioWidget.removeWidget();

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
| fabButton | `boolean`| ❌ | false | This options hides the left-bottom fab button used to open the video popup. |
| fabButtonContent | `string`| ❌ | Falar agora | Define the text inside the left-bottom fab button. |
| open | `boolean`| ❌ | false | If this option is set to true, the widget will open when `setDepartment` is called. |
| errorMessage | `string`| ❌ | default message | Set the default message showed to the user when occurs some error in the widget. |
| clientData | `object`| ❌ | - | This object is used to pass client's data to the widget. ([Type `clientData`](#clientdata)) |

#### clientData


| <b>Property<b> | Type | Required | Default | Description |
| -------------- | ------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name | `string`| ❌ | - | Client name. |
| email | `string`| ❌ | - | Client email (the email field can be filled with another value as cell phone for exemple). |
| pushToQueue | `boolean`| ❌ | false | This option defines if the client data will be sent to the queue without client confirmation. If true the client will be pushed to the queue automatically. (name and email fields must be filled) |

## Contact

Any question or sugestion? You can use the [GitHub Issues](https://github.com/NuVidio/nuvidio-widget-js/issues) or send a email to gustavo@nuvidio.com.br.