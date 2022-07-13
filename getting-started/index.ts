function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);

// tsc index.ts 를 실행하면 js로 변환해 준다. 하지만 일일히 변환해 주기 번거롭기 때문에 웹팩으로 자동화 설정을 해주면 좋다.
