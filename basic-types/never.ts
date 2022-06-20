//보통 리턴에 사용 (리턴에 never를 사용한다는 것은 아무것도 리턴하지 않는다는 뜻)
//never타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있다.
//하지만 never에는 그 어떤 것도 할당할 수 없다
// any조차 never에 할당할 수 없다
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용되기도 한다.

function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('failed')
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = 'hello'

if (typeof a != 'string') {
  a //a의 타입은 never
}

declare const b: string | number
if (typeof b != 'string') {
  b //b의 타입은 number
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never

// type ObjectIndexable = indexable<{}>
