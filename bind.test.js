/**
 * 自定义 bind 方法
 */

// 利用 apply
Function.prototype.customBind = function (context, ...args1) {
  const fn = this
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2])
  }
}

// 不使用 apply
Function.prototype.customBind = function (context, ...args1) {
  const fn = this
  const funcName = Symbol()
  context[funcName] = fn
  return function (...args2) {
    const value = context[funcName](...args1, ...args2)
    delete context[funcName]
    return value
  }
}

const person = {
  firstname: 'jeremy',
  lastname: 'james',
}

function getProfile(...args) {
  let str = `${this.firstname} ${this.lastname}`
  if (args.length > 0) str += ` ${args.join(' ')}`

  return str
}

test('customBind 不传参数', () => {
  const profile = getProfile.customBind(person)
  expect(profile()).toBe('jeremy james')
})

test('customBind 时传参数，调用时不传', () => {
  const profile = getProfile.customBind(person, 'work')
  expect(profile()).toBe('jeremy james work')
})

test('customBind 时传参数，调用时也传', () => {
  const profile = getProfile.customBind(person, 'work')
  expect(profile('life', 'balance')).toBe('jeremy james work life balance')
})
