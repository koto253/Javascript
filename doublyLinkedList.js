class Node{
   constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
   }
}

// create double linked list constrcutor
class DoublyLinkedList {
   constructor(value) {
      let newNode = new Node(value)
      this.head = newNode
      this.tail = newNode
      this.length = 1
   }
}

let newDoublyLinkedList = new DoublyLinkedList(7)
