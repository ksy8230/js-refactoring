// const organization = { name: 'Acme Gooseberries', country: 'GB' };

// organization.name = 'Dream Coding';
// console.log(organization.name);
// console.log(organization.country);

class Organization {
  #name;
  #country;
  #data;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }
  get country() {
    return this.#country;
  }
  set name(value) {
    this.#name = value;
  }
  get rawData() {
    return { ...this.#data };
    // 얉은 복사를 해서 전달하면 외부에서 수정해도 내가 가지고 있는 데이터에는 영향을 주지 않는다
    // 다만 얉은 복사라 중첩된 객체 내부까지 복사되지는 않는다 -> lodash 사용하기
  }
}

let instance = new Organization({ name: "ksy", country: "KR" }); // 객체를 불변성으로 만들기
instance.name = "tttt";
console.log(instance.name);
console.log(instance.rawData);
