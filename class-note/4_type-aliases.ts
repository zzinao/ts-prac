// interface Person{
//     name: string;
//     age: number;
// }

type Person1 ={
    name: string;
    age: number;
}

let sara :Person1 = {
name: '사라',
age: 20,
}

type MyString = string;
var str: MyString = 'hello'

type Todo = {id: string; title: string; done: boolean}
function getTodo(todo:Todo) {

}


//타입과 인터페이스의 차이점. 타입은 확장이 불가능하다.
//좋은 코드란 언제나 확장성을 염두에 두어야 하니 가능한 인터페이스를 사용할 것 
