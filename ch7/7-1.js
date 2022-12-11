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
  get rawData() {
    return { ...this.#data }; // 얉은 복사
  }
}

let instance = new Organization({ name: "ksy", country: "KR" });
console.log(instance.rawData);
