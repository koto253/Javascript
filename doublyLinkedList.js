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

   // add push method 
   push(value) {
      let newNode = new Node(value)
      if(!this.head) {
         this.head = newNode
         this.tail = newNode
      }
      else {
         this.tail.next = newNode
         newNode.prev = this.tail
         this.tail = newNode
      }
      this.length++
      return this
   }

   // add pop method 
   pop() {
      if(this.length === 0) return undefined
      let temp = this.tail
      if(this.length === 1) {
         this.head = null
         this.tail = null
      }
      else {
      this.tail = this.tail.prev
      this.tail.next = null
      temp.prev = null
      }
      this.length--
      return temp
   }
          
}

let newDoublyLinkedList = new DoublyLinkedList(7)
newDoublyLinkedList.push(3)

