/**
 * 自定义 call 方法
 */
Function.prototype.customCall = function (context, ...args) {
  const fn = this
  const funcName = Symbol()
  context[funcName] = fn
  const value = context[funcName](...args)
  delete context[funcName]
  return value
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

test('customCall', () => {
  expect(getProfile.customCall(person, 'work', 'life', 'balance')).toBe(
    'jeremy james work life balance'
  )
})
