class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

class BST {
   constructor() {
      this.root = null
   }

   // add insert method
   insert(value) {
   let newNode = new Node(value)
   if(!this.root) {
      this.root = newNode
      return this
   }
   let temp = this.root
   while(true) {
      if(newNode.value === temp.value) return undefined
      if(newNode.value < temp.value) {
         if(temp.left === null) {
            temp.left = newNode
            return this
         }
         temp = temp.left
      } else {
         if(temp.right === null) {
            temp.right = newNode
            return this
         }
         temp = temp.right
      }
   }
}
}

let newTree = new BST()