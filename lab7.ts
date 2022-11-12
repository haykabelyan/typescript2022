/**
 * Created by admin on 1/31/2018.
 */

// Интерфейсы

interface IUser {
    name: string;
    age?: number;
    logInfo(info: string): void;
}

interface IGetYear {
    getYear(): number;
}

class User implements IUser, IGetYear {
    name: string = 'user';
    job: string;
    newAge: number;

    logInfo(info: string): void {
        console.log(info);
    }

    getYear(): number {
        return 200;
    }
}