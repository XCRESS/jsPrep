class queue{
    constructor(){
        this.myQueue = [];
    }

    enqueue(element){
        this.myQueue.push(element);
    }
    isEmpty(){
        return this.myQueue.length === 0;
    }
    dequeue(){
        if (this.isEmpty()) {
            return "queue is empty";            
        }
        else
            return this.myQueue.shift();

    }
    printQueue(){
        if (this.isEmpty()) {
            return "queue is empty";
        } else {
            let str = "Elements in queue are :- "
            for (let i = 0; i < this.myQueue.length; i++) {
                str += this.myQueue[i] + " | ";
            }
            return str;
        }
    }
}
const queue1 = new queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
console.log(queue1.printQueue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.isEmpty());
console.log(queue1.printQueue());