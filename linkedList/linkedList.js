// creating a linked list data structure

class node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }

//  insertion in linked list 3 types

    insertAtbeginning(data) {
        this.head = new node(data);

    }
    
    inserstAtEnd(data) {
        const newNode = new node(data);
        let current = this.head
        if (!current) {
            current = newNode;
            return;
        } else {
            let last = current;
            while (last.next) {
                last = last.next;
            }
            last.next = newNode;
        }
    }

    insertAtPosition(data, prevNode) {
        const newNode = new node(data, prevNode.next)
        prevNode.next = newNode
    }

    deletehead() {
        if (!this.head) {   // in case of empty list
            return;    
        }
        if (!this.head.next) {
            this.head = null
        }

        let secondLast = this.head

        while (secondLast.next.next) {
            secondLast = secondLast.next
        }

        secondLast.next = null;
    }

    deleteKey(key){
        if (!this.head) {
            return
        }
        if (this.head.data == key) {
            this.head = this.head.next
        }
        
        let current = this.head
        while (current.next !== null) {
            if (current.next.data == key) {
                current.next = current.next.next
                return
            }
            current = current.next

        }
    }

    keyPresent(key) {
        while(this.head) {
            if (this.head.data == key) {
                return  `key ${key} is present in the list`
            }
            this.head = this.head.next
        }
    }

    traversal() {
        let current = this.head
        let arr = []

        while (current) {
            arr.push(current.data)
            current = current.next
        }
        return arr.join(" -> ")
    }

    reverse() {
        let current = this.head
        let prev = null
        let next = null
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }

}

const list = new linkedList()
list.insertAtbeginning(1)
list.inserstAtEnd(2)
list.inserstAtEnd(3)
list.inserstAtEnd(4)
console.log(list.traversal())
list.deletehead()
console.log(list.traversal())
list.deleteKey(1)
console.log(list.traversal())
list.reverse()
console.log(list.traversal())
console.log(list.keyPresent(3))