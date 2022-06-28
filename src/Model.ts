export class Model {
    user: any;
    items: any;

    constructor() {

        this.user = 'blockchain.jb';
        this.items = [
            { action: 'Go Gym', done: true, Desctiption: 'in 3:00 pm' },
        ];
    }
}


export class modelClone {
    action: any;
    done: boolean;
    Desctiption: string;

    constructor(text: any, done: boolean, Desctiptiontxt?: any) {
        this.action = text;
        this.done = done;
        this.Desctiption = Desctiptiontxt;
    }

}


