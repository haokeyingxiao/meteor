# meteor-admin-sdk

The `meteor-admin-sdk` is a JavaScript library for all [HaoKe 6](https://github.com/haokeyingxiao/haoke) App and Plugin developer which want an easy way to extend and customize the administration.


## Installation
#### Using NPM:
Install it to your `package.json`
```
npm i --save @haokeyingxiao/meteor-admin-sdk
```

and import it in your app:
```js
// import everything
import * as sw from '@haokeyingxiao/meteor-admin-sdk';

// or import only needed functionality
import { notification }  from '@haokeyingxiao/meteor-admin-sdk';
```

#### Using CDN:
Import the source from the CDN

```js
// use the latest version available
<script src="https://unpkg.com/@haokeyingxiao/meteor-admin-sdk/cdn"></script>

// use a fix version (example here: 1.2.3)
<script src="https://unpkg.com/@haokeyingxiao/meteor-admin-sdk@1.2.3/cdn"></script>
```

and then you can access it with the global variable `sw`.

```js
sw.notification.dispatch({
  title: 'My first notification',
  message: 'This was really easy to do'
})
```

## Examples

Throw a notification:
```js
sw.notification.dispatch({
  title: 'My first notification',
  message: 'This was really easy to do'
})
```

Get the system currency:
```js
const currency = await sw.context.getCurrency();
```

Subscribe for UI locale changes:
```js
let currentLocale = 'en-GB';

sw.context.subscribeLocale(({ locale }) => {
  currentLocale = locale;
})
```
