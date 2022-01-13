import random from "lodash/random";
import faker from "faker";
import { Observable, Subscription } from "rxjs";

export enum Priority {
  Error,
  Warn,
  Info,
}

export interface Message {
  message: string;
  priority: Priority;
}

var subscription: Subscription | any = () => {};

export const observable = new Observable<Message>((subscriber: any) => {
  const generate = () => {
    const message = faker.lorem.sentence();
    const priority = random(0, 2) as Priority;
    const nextInMS = random(500, 3000);
    subscriber.next({ message, priority });
    setTimeout(generate, nextInMS);
  };
  generate();
});

const subscribe = (callback: (message: Message) => void) => {
  subscription = observable.subscribe({
    next: callback,
  });
  return () => subscription.unsubscribe();
};

export const unSubscribe = () => {
  subscription.unsubscribe();
};

export default subscribe;
