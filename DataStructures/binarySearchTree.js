// add BST object
class BST {
   constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
   }
} 

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   // insert a new node 
   insert(value){
      let newNode = new BST(value);
      if(!this.root){
         this.root = newNode;
         return this;
      }
      let temp = this.root;
      while(true){
         if(newNode.value === temp.value) return `already exist`;
         if(newNode.value < temp.value){
            if(temp.left === null){
               temp.left = newNode;
               return this;
            }
            temp = temp.left;
         } else {
            if(temp.right === null){
               temp.right = newNode;
               return this;
            }
            temp = temp.right;
         }
      }
   }

   // find min value
   minValueNode(currentNode){
      while(currentNode.left !== null){
         currentNode = currentNode.left;
      }
      return currentNode;
   }

   // find a node
   contains(value){
      if(this.root === null) return `it's empty`;
      let temp = this.root;

      while(temp){
         if(value < temp.value){
            temp = temp.left;
         } else if(value > temp.value){
            temp = temp.right;
         } else {
            return temp;
         }
      }
   }

   BFS(){
      
   }

   // preOrder Depth First Search
   DFSPreOrder() {
      let results = [];
      function traverse(currentNode) {
         results.push(currentNode.value);
         if(currentNode.left) traverse(currentNode.left);
         if(currentNode.right) traverse(currentNode.right);
      }
      traverse(this.root);
      return results;
   }
}


let myBST = new BinarySearchTree();

myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log(myBST.BFS());
console.log(myBST.DFSPreOrder());












