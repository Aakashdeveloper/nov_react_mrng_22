var moviename1 = "jab we met"
var movierating1 = 4.6
var movieind1 = "Bollywood"


var moviename2 = "Avengers"
var movierating2 = 4.3
var movieind2 = "Hollywood"

var movie = {
    name:"jab we met",
    rating:4.6,
    ind:"Bollywood"
}

movie.name
'jab we met'
movie.rating
4.6
movie.ind
'Bollywood'
movie.rating = 4.7
4.7
movie
{name: 'jab we met', rating: 4.7, ind: 'Bollywood'}
movie.lang = "Hindi"
'Hindi'
movie
{name: 'jab we met', rating: 4.7, ind: 'Bollywood', lang: 'Hindi'}
delete movie.ind
true
movie['name']
'jab we met'

var movie = [
    {
        "name":"jab we met",
        "rating":4.6,
        "ind":"Bollywood"
    },
    {
        "name":"Avengers",
        "rating":4.3,
        "ind":"Hollywood"
    }
]

movie.map((data) => {console.log(data.name)})

for(i=0;i<movie.length;i++){
    console.log(movie[i].name)
}