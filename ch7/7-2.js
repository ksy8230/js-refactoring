export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses]; // 내부 컬렉션 값이 아닌 복사한 값 리턴
  }

  // 외부에서 내부 컬렉션에 바로 접근할 수 없게 하기
  // set courses(courses) {
  //   this.#courses = courses;
  // }

  addCourse(course) {
    this.#courses.push(course);
  }
  removeCourse(course) {
    const index = this.#courses.indexOf(course);
    if (index === -1) return;
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const array = new Person("엘리");
array.courses.push(new Course("리팩토링", true));
const newCourse = new Course("리팩토링", true);
array.addCourse(newCourse);
array.removeCourse(newCourse);
console.log(array.courses.length);
