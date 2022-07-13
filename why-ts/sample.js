function sum(a, b) {
  return a + b;
}

sum(10, "20");

//타입이 달라도 연산이 가능함

// 자바스크립트를 타입스크립트처럼 쓰는 방법
// @ts-check

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
function sum2(a, b) {
  return a + b;
}

sum(10, "20"); // 하지만 js파일이기 때문에 에러를 코드상에서 반환하지는 못한다
