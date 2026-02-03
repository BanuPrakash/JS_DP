class Counter {
    private static instance: Counter;
    private count:number = 0;
    private listeners: any = [];

    private Counter() { console.log('instance created!!!')}

    // factory method
    public static getInstance() {
        if(!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }

    public subscribe(listener: any) {
        this.listeners.push(listener);
    }

    private _notify() {
        this.listeners.forEach((listener:any) => {
            listener();
        })
    }

    public increment() {
        this.count++;
        this._notify();
    }

    public getCount(): number {
        return this.count;
    }
}

export default Counter.getInstance();