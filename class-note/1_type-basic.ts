// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3]; //Array를 선언할때는 a 대문자 조심하기
let heroes: Array<string> = ["Capt", "Thor", "Hulk"]; // string이 아닌 type의 값이 배열에 들어갈 경우 오류를 반환
let item: number[] = [1, 2, 3]; //이런식으로 배열을 선언할 수도 있다.

// TS 튜플
let address: [string, number] = ["gangnam", 100]; //튜플은 type뿐만아니라 type의 위치도 설정을 해준다

// TS 객체
let obj: object = {};
// let person:object = {
//     name: 'capt',
//     age: 100
// };

// 객체를 조금 더 구체적으로 쓰고싶다면 객체 열고 타입 기재
let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

//TS 진위 값
let show: boolean = true;
