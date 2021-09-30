
class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User{
  constructor(name,surname,year){
      super(name,surname);
      this.year=year;
  }

getCourse(){
    return (new Date).getFullYear()-this.year;

}

}



var student=new Student("Sergo","Labadze",2018);

console.log(student.getCourse());//3

console.log(student.getFullName());//Sergo Labadze
