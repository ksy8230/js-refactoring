class Person {
  #name;
  #manager;
  #chargeCode;
  // 개체들을 department에서 아예 추출해서 직관적으로 관리하기
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  // get department() {
  //   return this.#department;
  // }

  // set department(arg) {
  //   this.#department = arg;
  // }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person("Tom", new Department("aManager", "999"));
console.log(person.name);
// console.log(person.department.manager); //
// console.log(person.department.chargeCode); //
console.log(person.manager);
console.log(person.chargeCode);
