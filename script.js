//complete this code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age=age;
	}
	get name() {
		return this.name;
	}
	set age() {
		return this.age;
	}
	set age(age) {
		this.age=age
	}
}

class Student extends Person {
	// super();
	study(): void {
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	// super();
	teach(): void {
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
