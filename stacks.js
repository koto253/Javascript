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
   constructor(){
      this.top = null
      this.length = 0
   }

   // adding new node to stacks 
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
} 

// declare new variable
let newStack = new Stacks(11)
