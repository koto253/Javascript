// create constructor for queue
class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

// create constructor 
class Queue {
   constructor(){
      this.first = null
      this.last = null
      this.length = 0
   }

   // add enqueue method
   enqueue(value) {
      let newNode = new Node(value)
      if(!this.first){
         this.first = newNode
         this.last = this.first
      } else {
         this.last.next = newNode
         this.last = newNode
      }
      this.length++
      return this
   }

   // add dequeue method
   dequeue() {
      if(!this.first) return `empty`
      let temp = this.first
      this.first = temp.next
      temp.next = null
      this.length--
      return temp
   }
}

let newQueue = new Queue()

newQueue.enqueue(3)
newQueue.enqueue(2)
newQueue.enqueue(1)

