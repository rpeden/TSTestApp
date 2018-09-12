
export interface ICallable {
    callMe() : string
};

export class ClassOne implements ICallable {
    callMe() {
        return "Hello from ClassOne";
    }         
}

export class ClassTwo implements ICallable {
    callMe() {
        return "Hello from ClassTwo";
    }
}