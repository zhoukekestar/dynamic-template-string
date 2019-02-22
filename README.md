# dynamic-template-string

Deeply inspired by [stackoverflow](https://stackoverflow.com/a/37217166/4992897).


## Demo

```js
const assert = require('assert');
const Template = require('../');

var tpl = new Template('hello ${name}');

assert(tpl.fill({name: 'world'}) === 'hello world');
assert(tpl.fill({name: 'china'}) === 'hello china');
```