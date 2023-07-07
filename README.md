# Legal currencies price in Venezuela (BCV)

Library created using [scraping][scraping] methods to obtaining the currency price (usd, eur, cny, try, rub) of the Central Bank of Venezuela (BCV) http://www.bcv.org.ve/

## Installation
``
npm i price-currencies-ve
``
## Features
- Obtaining the list of currencies and price.
- Currency filter.
- Quote date.

## Commands
| Method | Params | Return |
| ------ | ------ | ------ |
| getAll |  | ```{ "error": false, "data": { "dollar": { "iso": "USD", "value": 1987184.75, "symbol": "$" }, "euro": { "iso": "EUR", "value": 2331464.51, "symbol": "€" }, "ruble": { "iso": "RUB", "value": 26309.18, "symbol": "₽" }, "lira": { "iso": "TRY", "value": 240525.11, "symbol": "₺" }, "yuan": { "iso": "CNY", "value": 303303.63, "symbol": "¥" } } }``` |
| getOne | 'dollar' | ```{ "error": false, "data": { "iso": "USD", "value": 1987184.75, "symbol": "$" } }``` |
| getOne | 'euro' | ```{ "error": false, "data": { "iso": "EUR", "value": 2331464.51, "symbol": "€" } }``` |
| getOne | 'yuan' | ```{ "error": false, "data": { "iso": "CNY", "value": 303303.63, "symbol": "¥" } }``` |
| getOne | 'lira' | ```{ "error": false, "data": { "iso": "TRY", "value": 240525.11, "symbol": "₺" } }``` |
| getOne | 'ruble' | ```{ "error": false, "data": { "iso": "RUB", "value": 26309.18, "symbol": "₽" } }``` |

## Usage
```js
// ES6 or TypeScript:
import { getAll, getOne } from 'price-currencies-ve';

getAll().then(data => console.log(data))
getOne('dollar').then(data => console.log(data))

// In other environments:
const priceCurrencyVe = require('price-currencies-ve');

//async function
const dataAll = await priceCurrencyVe.getAll();
const dataOne = await priceCurrencyVe.getOne('dollar');
console.log(dataOne)
console.log(dataAll)
```
## Errors
##### Path
``
{
    "error": true,
    "message": "Path error"
}
``

##### Getting data
``
{
    "error": true,
    "message": "Error getting data"
}
``

## License
MIT.

[//]: #
   [scraping]: <https://es.wikipedia.org/wiki/Web_scraping>
