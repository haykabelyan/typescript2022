// Классы, Наследование классов

class User {
    private isTeacher: boolean;
    protected age: number = 30;

    constructor(public name: string, public job: string) {
    }

    public getAge(): string {
        return this.age + '';
    }
}

class Hayk extends User {
    constructor(job: string) {
        super('HAYK', job);
        this.age = 100;
    }

    getAge(): string {
        return 'Hello ' + this.age;
    }
}

const user = new User('HAYK', 'Frontend');
const hayk = new Hayk('Frontend');


/////////////////////////////////////////////////////////////////


abstract class Car {
    model: string;
    year: number = 2010;

    abstract logInfo(info: string): void;

    getCarYear(): number {
        return this.year;
    }
}

class Mercedes extends Car {
    logInfo(info: string): void {
        console.log(info);
    }
}

const car = new Mercedes();
console.log(car);
car.logInfo('Info');
console.log(car.getCarYear());
