/**
 * 自定义 apply 方法
 * 使用 Symbol 的原因是保证对象 key 的唯一性，以防碰巧 context 本身有这个 key 的方法。
 */
Function.prototype.customApply = function (context, args) {
  const fn = this
  const funcName = Symbol()
  context[funcName] = fn
  const value = context[funcName](args)
  delete context[funcName]
  return value
}

const person = {
  firstname: 'jeremy',
  lastname: 'james',
}

function getProfile(args) {
  let str = `${this.firstname} ${this.lastname}`
  if (args.length > 0) str += ` ${args.join(' ')}`

  return str
}

test('customApply', () => {
  expect(getProfile.customApply(person, ['work', 'life', 'balance'])).toBe(
    'jeremy james work life balance'
  )
})
