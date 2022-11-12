// Декораторы

function addShowAbility(constructorFn: Function) {
    constructorFn.prototype.showHtml = function() {
        const pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}

@addShowAbility
class User {
    constructor(public name: string, public age: number, public job: string) {}
}

let user = new User('WFM', 20, 'Frontend');
console.log(user);
(<any>user).showHtml();

