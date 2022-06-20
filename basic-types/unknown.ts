//응용 프로그램을 작성할 때는 모르는 변수의 타입을 묘사해야할 수도 있다.
//unknown은 타입스크립트3.0부터 지원
// any와 짝으로 any보다 type-safe한 타입
// - any와 같이 아무거나 할당할 수 있다. 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없다.
//unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다. 사용전에 데이터 일부 유형 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다. 

declare const maybe: unknown;

// const aNumber: number = maybe;

if(maybe === true) {
    const aBoolean: boolean = maybe === true;

//     const aString: string = maybe;
// }

if (typeof maybe === 'string'){
    const aString: string = maybe;
    // const aBoolean: boolean = maybe;
}