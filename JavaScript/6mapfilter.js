Map
> map is use to iterate over the array
> it always return the same length of output array as input
> it is use to apply logics(add,sub,mul,div & bind in html)

var a = [4,5,56,78,34,12,36,9,18,27]

a.map((data) => {return data*2})
[8, 10, 112, 156, 68, 24, 72, 18, 36, 54]

var a = [4,5,56,78]

a.map((data) => {return `<p>${data*2}</p>`})
(4) ['<p>8</p>', '<p>10</p>', '<p>112</p>', '<p>156</p>']

/////////////
> filter is use to filter out array
> it may or maynot return length of output as input Array
> it only return those value for which condition or output is true

var a = [0,4,5,56,78,34,12,36,9,18,27]

a.filter((data) => {return data*30})
[56, 78, 34, 36]

a.map((data) => {return data>30})
(10) [false, false, true, true, true, false, true, false, false, false]