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
    reverse(){
        return this.array.reverse();
    }
    printElements(){
        let str = "Elements in array are :- "
        console.log(this.array, "print array");
        for (let i = 0; i < this.array.length; i++) {
            str += this.array[i] + " | ";
        }
        return str;
    }
}

const stack = new myStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.reverse());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.printElements());