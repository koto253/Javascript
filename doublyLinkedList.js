class Node{
   constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
   }
}

// create double linked list constrcutor
class DoublyLinkedList {
   constructor() {
      let newNode = new Node()
      this.head = null
      this.tail = null
      this.length = 0
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

   // unshift method 
   unshift(value) {
      let newNode = new Node(value)
      if(!this.head) {
         this.head = newNode
         this.tail = newNode
      }
      else {
         newNode.next = this.head
         this.head.prev = newNode
         this.head = newNode
      }
      this.length++
      return this
   }

   //add shift method
   shift() {
      if(!this.head) return undefined
   
      let temp = this.head
      if(this.length === 1) {
         this.head = null
         this.tail = null
      }
      else {
         this.head = this.head.next
         this.head.prev = null
         temp.next = null
      }
      this.length--
      return temp
   }

   // add get method 
   get(index) {
      if(index < 0 || index >= this.length) return undefined

      let temp = this.head

      if(index < this.length / 2) {
         for(let i = 0; i < index; i++) {
            temp = temp.next
         }
         return temp
      } else {
         temp = this.tail
         for(let i = this.length -1; i > index; i--) {
            temp = temp.prev
         }
         return temp
      }

   }

   // add set method 
   set(index, value) {
      let temp = this.get(index)
      if(temp) {
         temp.value = value
         return true
      }
      return false
   }

      // insert items using insert method
   insert(index, value) {
      if(index === 0) return this.unshift(value)
      if(this.length === index) return this.push(value)
      if(index < 0 || index >= this.length) return 'error'

      let newNode = new Node(value)
      let before = this.get(index -1)
      let after = before.next
      newNode.next = after
      after.prev = newNode
      before.next = newNode
      newNode.prev = before
      this.length++
      return true
   }

   // add remove method
   remove(index) {
      if(index === 0) return this.shift()
      if(index === this.length -1) return this.pop()
      if(index < 0 || index >= this.length) return 'error'

      let temp = this.get(index)
      temp.prev.next = temp.next
      temp.next.prev = temp.prev
      temp.next = null
      temp.prev = null

      this.length--
      return temp
   }
          
}

let newDoublyLinkedList = new DoublyLinkedList(0)
newDoublyLinkedList.push(1)
newDoublyLinkedList.push(2)

