var a = 10
var b = 20
a+b
30

////////////////////////////////////////////////////////////////
keyword nameoffunctio(parameters){
    return output
}
//es5

function addN(a,b){
    return a+b
}

addN(1,2)
3
addN(456,232)
688
addN('Hii','JavaScript')
'HiiJavaScript'


function addN(a,b,c){
    return a+b+c
}
undefined
addN(1,2,3)
6
addN(1,2)
NaN
addN(1,2,3,4)
6


///rest operater
function addN(...args){
    //[2,6,8]
   let out = 0
   for(i=0;i<args.length;i++){
       out = out+args[i]
   }
   console.log(out)
}

addN(4,7,2)
13
addN(4,7)
11
addN(4,7,5,7,8)
31

/////es5
function addN(a,b){
    return a+b
}

addN(1,2)
3


//es6
let addN = (a,b) => {return a+b}
addN(1,2)
3

var addN2 = (a,b) => {return a+b}
addN2(5,8)
13