class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
   constructor(value) {
      let newNode = new Node(value)
      this.head = newNode
      this.tail = newNode
      this.length = 1
   }

   // add push method
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

   // add pop method 
   pop() {
      if(!this.head) return undefined 
      // declare 2 variable to keep track the linkedlist
      let temp = this.head
      let pre = this.head

      while(temp.next) {
         pre = temp
         temp = temp.next
      }
      this.tail = pre
      this.tail.next = null
      this.length--
      if(this.length === 0) {
         this.head = null
         this.tail = null
      }
      return temp
   }
}

let newLinkedList = new LinkedList(4)






