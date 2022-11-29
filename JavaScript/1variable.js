////es5
Ecma Script
///es6

String = "Hiii" 'Hello' `test` "1" 'true' 'hi10'
Number = 10 53434 .4534 45.45435
Boolean = true false

//es5
var a = 10
var b = "Hii"
var c = true
typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d = "899"
typeof(d)
'string'
var d = `1`
typeof(d)
'string'

//es6
let;    
const ;

let a = 20
const d = "Hii"

/////////////
////Declaration
////Assignment
let a = 20

let a ///declaration
a = 20 // Assignment

////////////////////////////////
var > we can redecalare and reassign
let > we cannot redecalare but can reassign
const > we cannot redecalare nor reassign

> var a = 10
> a
10
> var a = 20
> a
20
> a = 30
30
> a
30
> a = 31
31


> let b = 20
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 23
23


> const c = 10
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.