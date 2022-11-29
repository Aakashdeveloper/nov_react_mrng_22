let uname = "Avengers"
let ind = "Hollywood"
let type = "Action"
let rating = 4.5

//es5
let out1 ="An "+uname+" is an "+type+" movie with the rating of "+rating+" form ind "+ind+"."
'An Avengers is an Action movie with the rating of 4.5 form ind Hollywood.'

//es6
let out2 =`An ${uname} is an ${type} movie with the rating of ${rating} from ind ${ind}.`
'An Avengers is an Action movie with the rating of 4.5 from ind Hollywood.'