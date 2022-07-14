interface User {
    age: number;
    name: string;
}

//변수에 인터페이스 활용
var john: User = {
    age: 33,
    name: '존'
}

//함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}
 
const capt = {
    name: '캡틴',
    age: 100
}
// 함수에 인터페이스를 적용시 인터페이스 기준으로 객체에 빠진 항목이 있으면 안된다

getUser(capt)

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
(a: number, b:number): number;
}

var plus: SumFunction;
plus = function(a:number, b: number): number {
    return a + b;

}

//인덱싱
interface StringArray {
    [index: number] :string
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] ='10'

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /|.css$/,
}

Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
interface Person {
    name: string;
    age :number;
}

interface Developer extends Person { // Person의 요소를 상속받을 수 있다. 
    language: string;
}

var cat: Developer = { // language만 작성하면 오류가 난다. person의 것도 넣어줘야 함
    language: 'ts',
    age: 100,
    name: '고양이'
}