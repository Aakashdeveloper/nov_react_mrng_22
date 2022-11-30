Array is a collection of homogeneous as well as heterogeneous data type

var a = [];
let a = [1,3,6,9,4,34,67] >>> array of number
let b = ['hii','bie','test'] >>> array of string
let c = [true,false,false,true,true] >>> array of boolean

var d = [1,5,7,'hii',true,'test',7]


var city = ["Delhi","Venice","Helsinki","InnsBurg"]
undefined
city.length
4
city[0]
'Delhi'
city[1]
'Venice'
city.push('Dubai')
5
city
(5) ['Delhi', 'Venice', 'Helsinki', 'InnsBurg', 'Dubai']
city.push('Amsterdam')
6
city
(6) ['Delhi', 'Venice', 'Helsinki', 'InnsBurg', 'Dubai', 'Amsterdam']
city.pop()

['Delhi', 'Venice', 'Helsinki', 'InnsBurg', 'Dubai']
city.pop(2)
'Dubai'
city.pop(2000)
'InnsBurg'

var city = ['Delhi', 'Venice', 'Helsinki', 'InnsBurg', 'Dubai', 'Amsterdam']
undefined
city.indexOf('Helsinki')
2
city.indexOf('Boston')
-1
city.indexOf('Pune')
-1
city.indexOf('Delhi')

var a = "Hii"
var b = [1,2,3]
undefined
typeof(a)
'string'
typeof(b)
'object'
Array.isArray(a)
false
Array.isArray(b)
true


var city = ['Delhi', 'Venice', 'Helsinki', 'InnsBurg', 'Dubai', 'Amsterdam']

for(i=0;i<city.length;i++){
    console.log(city[i])
}

Delhi
Venice
Helsinki
InnsBurg
Dubai
Amsterdam

