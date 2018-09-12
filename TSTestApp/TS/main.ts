import { ICallable, ClassOne, ClassTwo } from "./classes";

let callable: ICallable = new ClassOne();
alert(callable.callMe());
callable = new ClassTwo();
alert(callable.callMe());