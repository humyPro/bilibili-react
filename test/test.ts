type MethodName<T> = { [F in keyof T]: T[F] extends Function ? F : never }[keyof T]

const now = new Date()
const a = 0
for (let i = 0; i < 1000000000; i++) {
  const f = aa => {
    aa++
  }
  f(a)
}

console.log(new Date().getTime() - now.getTime())

const b = 0
const f = vv => {
  vv++
}
const now1 = new Date()
for (let i = 0; i < 1000000000; i++) {
  f(b)
}
console.log(new Date().getTime() - now1.getTime())
