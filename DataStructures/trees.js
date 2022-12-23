class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

class BST {
   constructor(value) {
      let newNode = new Node(value)
      this.root = newNode
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

let newTree = new BST(47)

newTree.insert(21)
newTree.insert(76)
newTree.insert(18)
newTree.insert(27)
newTree.insert(52)
newTree.insert(82)

console.log(newTree)


