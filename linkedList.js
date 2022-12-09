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
      if(!this.head) return "it's empty" 
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

   //add new value at the beginnig of the linked list
   unshift(value) {
      let newNode = new Node(value)

      if(!this.head){
         this.head = newNode
         this.tail = newNode
      }
      else {
         newNode.next = this.head
         this.head = newNode
      }
      this.length++
      return this
   }

   // removes the first item of a linkedlist
   shift() {
      if(!this.head) return "it's empty!!"
      let temp = this.head
      this.head = this.head.next
      this.length--
      if(this.length === 0) {
         this.head = null 
         this.tail = null
      }
      temp.next = null
      return temp
   }

   // add get method 
   get(index) {
      if(index < 0 || index > this.length) return undefined

      let temp = this.head
      for(let i = 0; i < this.length; i++){
         temp = temp.next
      }
      return temp
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
      before.next = newNode
      this.length++
      return true
   }

   //add remove method
   remove(index) {
      if(index === 0) return this.shift()
      if(index === this.get(length - 1)) return this.pop()
      if(index < 0 || index >= this.length) return `error`

      let pre = index - 1
      let temp = pre.next

      pre.next = temp.next
      temp.next = null
      this.length--
      return temp
   }

   // add reverse method 
   reverse() {
      let temp = this.head
      this.head = this.tail
      this.tail = temp

      let prev = null
      let next = null 

      // for(let i = 0; i < this.length; i++) {
      //    next = temp.next
      //    temp.next = prev
      //    prev = temp
      //    temp = next
      // }
      // return this

      while(temp) {
         next = temp.next
         temp.next = prev
         prev = temp
         temp = next 
      }
      return this

   }
}

let newLinkedList = new LinkedList(1)
newLinkedList.push(2)
newLinkedList.push(3)
newLinkedList.push(4)






