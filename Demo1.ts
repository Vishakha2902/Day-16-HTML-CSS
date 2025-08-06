class Student {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    great(){
        console.log(`hello,${this.name}`);
    }
}

//Creating object of the class and invoking great()

const s1 = new Student("Vishakha");
s1.great();
const s2 = new Student("Prasad");
s2.great();