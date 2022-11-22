let defaultOwner = { firstName: "마틴", lastName: "파울러", test: { a: 1 } }; // 1. 해당 변수의 메모리 주소를

// export function getDefaultOwner() {
//   return defaultOwner; // 2. 동일하게 바라보고 있다 즉, 객체를 변경할 수 있게 된다...
// }

// export function getDefaultOwner() {
//   return { ...defaultOwner }; // 3. 얕은 복사는 한 단계까지만 복사하고 깊은 복사까지는 못해서 결국 또 객체를 변경할 수 있게 된다...
// }

class Pesron {
  #firstName;
  #lastName;
  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
  }

  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
} // 객체의 정보를 클래스로 담아서 외부에서 읽기만 가능하고 수정은 불가능하도록 변경해 정보의 불변성을 지키자

export function getDefaultOwner() {
  return new Pesron(defaultOwner);
}
