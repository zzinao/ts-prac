// undefined&null are subtypes of all other types.
// 설정을 하지 않으면 그렇다, number에 null 또는 undefined를 할당할 수 있다는 의미
// 하지만 컴파일 옵션에서 `--strickNullChecks`를 사용하면 null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
// - 이 경우, null과 undefined를 할당할 수 있게 하려면 union type을 이용해야한다.

// let Myname: string = null

// let u: undefined = null;

let v: void = undefined

let union: string | null = null //untion type

union = 'zzinao'
