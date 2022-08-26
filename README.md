# date-time-id
Super simple wrapper for the `Intl.DateTimeFormat` constructor to output a sortable and human friendly string that includes the current date and time. Great for naming sync process folders!


## Installation

`npm install date-time-id`

## Usage

```js
const createDateTimeId = require('date-time-id');

// defaults to locale of 'en-US' and timeZone of 'America/Chicago'
const id = createDateTimeId();
// 1661557646873 (Aug 26, 2022, 6:47 PM CDT)

const options = { locale: 'en-GB', minute: '2-digit' };
const otherId = createDateTimeId(options);
// 1661558007021 (26 Aug 2022, 18:53 GMT-5)
```

**`options`** - object that can contain a `locale` property as well as any property that could be passed to the [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) `options` object*

**Note: Due to default values being passed to `Intl.DateTimeFormat`, not all options are able to be passed on their own without overwriting other properties as well but at that point you really might as well use the `Intl.DateTimeFormat` API on your own.* 
