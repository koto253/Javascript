// call back
function three(){
   console.log('Good morning, ')
   
}

function two(){
   three();
   console.log('Mr/Mrs')
   
}

function one(){
   two();
   console.log('Ismael')

}

one();