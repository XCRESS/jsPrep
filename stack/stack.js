class myStack{
    constructor(){
        this.array = [];
    }

    push(element){
        this.array.push(element);
    }
    pop(){
        return this.array.pop();
    }
    peek(){
        return this.array[this.array.length - 1];
    }
    isEmpty(){
        return this.array.length === 0;
    }
    size(){
        return this.array.length;
    }
}

const stack = new myStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.array);