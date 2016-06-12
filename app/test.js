import Rx from '../lib/rxjs/Rx';

export class Testing
{
    constructor(){
        this.testProperty = 'dodo';
        this.testRx();
    }

    testRx(){
        Rx.Observable.of(1,2,3).subscribe((x) => {
            console.log(x);
        });
    }
}

var t = new Testing();