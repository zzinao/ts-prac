function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나')

any1.toString()

//any란? 어떤 타입이어도 상관없는 타입
// 이걸 최대한 쓰지 않는게 핵심 -> 컴파일 타임에서 타입체크가 정상적으로 이뤄지지 않기 때문
// 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다 -> nolmplicitAny

//any는 개체를 통해 전파
let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d //에러가 나지 않음

function leakingAny(obj: any) {
  const a = obj.num
  const b = a + 1
  return b
}

const c = leakingAny({ num: 0 })
