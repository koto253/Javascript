class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
   constructor() {
      let newNode = new Node(value)
      this.head = newNode
      this.tail = newNode
      this.length = 1
   }
   push(value) {
      let newNode = new Node(value)
      if(!this.head) {
         this.head = newNode
         this.tail = newNode
      }
      else {
         this.tail.next = newNode
         this.tail = newNode
      }
      this.length++
      return this
   }
}

let newLinkedList = new LinkedList(4)
// push more numbers
newLinkedList.push(7)
newLinkedList.push(78)
newLinkedList.push(13)


