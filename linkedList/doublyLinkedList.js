class Node{
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    insertAtBegining(data){
        const newNode = new Node(data, this.head, null)
        if(!this.head){
            this.tail = newNode
        }else{
            this.head.prev = newNode
        }
        this.head = newNode
    }

    insertAtEnd(data){
        const newNode = new Node(data, null, this.tail)
        if(!this.head){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    insertAtPosition(data, prevNode){
        const newNode = new Node(data, prevNode.next, prevNode);
        if (prevNode) {
            prevNode.next.prev = newNode;
        }
        prevNode.next = newNode;
        
        if (!newNode.next) {
            this.tail = newNode;
        }
    }

}
