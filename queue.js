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
}

let newQueue = new Queue()