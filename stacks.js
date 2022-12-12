/*
 ** LIFO 
 ** Last In First Out
 ** stack is pratique for 'undo/ 

 ** linked list (adding ang removing) at 
    the beginning is O(1)

    3-> 23-> 4-> null

 ** array (adding and removing) at the end
    is O(1)
*/

// create a contructor for stacks
class Node {
   constructor(value){
      this.value = value
      this.next =null
   }
}

// create Stacks contructor
class Stacks {
   constructor(value){
      let newNode = new Node(value)
      this.top = newNode
      this.length = 1
   }

   // add push method 
   push(value) {
      let newNode = new Node(value)
      if(!this.top){
         this.top = newNode
      } else {
         newNode.next = this.top
         this.top = newNode
      }
      this.length++
      return this
   }

   // add pop method
   pop() {
      if(!this.top) return `it's empty`

      let temp = this.top
      this.top = temp.next
      temp.next = null
      
      this.length--
      return temp
   }
}


// declare new variable
let newStack = new Stacks()
