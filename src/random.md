# own-my-universe


## `'use strict' in javascript `

`use strcit is a new feature in javascript(modern)`.

---

`It instruct the browser to use strict mode,which is a reduced and safer features set of javascript`

---

## Lets demonstrate with examples

# `index.js`

```js
function sum(a, b) {
  add = a + b;
  console.log(add);
}
sum(2, 2);
// 4
```

```js
"use strict";
function sum(a, b) {
  add = a + b;
  console.log(add);
}
sum(2, 2);
// unCaughtError add is not defined
```

## `so lets look we have not defined add variable so it throw error while using "use strict" but its fine in normal without use strict `

---

## "use strict" saves a lots of times and bug in code

```js
function sum(a, a) {
  add = a + 10;
  console.log(add);
}
sum(2, 2);
// 2+10=12;
```

```js
"use strict";
function sum(a, a) {
  add = a + 10;
  console.log(add);
}
sum(2, 2);
// Duplicate parameter is not allowed
```

## I think you got ideas why and how use strict can be implemented so it saves debugging time as well as bug free code
