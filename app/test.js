import Rx from '../lib/rxjs/Rx';

export class Testing
{
    constructor(){
        this.testProperty = 'dodo';
        this.basicRx();
        this.inputClickEvent();
        this.mouseEventRx();
        this.samplePromise;
        this.promiseRx();
    }

    basicRx(){
        Rx.Observable.of(1,2,3)
            .subscribe((x) => {
                console.log(x);
            }
        );
    }

    inputClickEvent(){
       var element = document.getElementById('button');
       Rx.Observable.fromEvent(element, 'click')
            .subscribe((x) => {
                console.log('clicked button');                
            });
    }

    mouseEventRx(){
	    Rx.Observable.fromEvent(document, 'click')
            .subscribe((x) => {
	            console.log('clicking on document');    
            }); 
    }

    promiseRx(){
        this.samplePromise = new Promise((resolve, reject)=>{
            resolve('Done with promise');
        });

        var promisebutton = document.getElementById('promiseButton');
        Rx.Observable.fromEvent(promisebutton, 'click')
            .subscribe(() => {
               this.subscribeToPromise(); 
            });
    }

    subscribeToPromise(){
        Rx.Observable.fromPromise(this.samplePromise)
            .subscribe(() => {
                console.log('Promise');
            });
    }
}

var t = new Testing();