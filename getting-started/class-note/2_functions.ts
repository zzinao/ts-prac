// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sumAdd(a: number, b: number): number {
  return a + b;
}

// sum(10,20,30,40); //불필요한 인자를 잡아낸다. 함수의 스펙을 정확히 기재해야함

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log("hello world"); // 물음표를 넣으면 에러를 반환하지 않는다.
log("hello ts", "abc");
