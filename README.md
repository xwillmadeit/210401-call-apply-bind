## 知识点

- `call` 和 `apply` 作用一样，都是改变方法执行时的 this 指向，两者唯一的区别是传参，`call` 的参数是一个个传，记得时候可记为 `call` 就是打电话，一个个拨号。`apply` 传数组。

- `bind` 与两者的区别是不会立即执行，返回一个新的函数。在调用 `bind` 时传参和 `call` 一致，是一个个传。

- `bind` 过的函数在执行时不能再更改 `this`。

- 本例中使用 `Symbol` 的原因是确保 this 指向对象本身不会有同名函数存在。

[MDN 官方的 bind polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)，考虑了使用 `new` 操作符的场景。
