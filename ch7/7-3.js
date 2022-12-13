export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  isHighPriority() {
    return "high" === this.priority || "rush" === this.priority;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

class Priority {
  #value;
  constructor(value) {
    // type 보장 추가
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`this ${value} is invalid for priority`);
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.index;
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
}
