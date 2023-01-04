import React,{useState,useEffect} from 'react';
import Display from './DisplayComponent';

const url = "http://3.17.216.66:4000/restaurants"

function HookComponent(){
    const [title] = useState('Hooks React App')
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)
    const [city,setCity] = useState()

    const updateCount = () => {
        setCount(count+1)
    }

    useEffect(() => {
        console.log("inside use effect")
        fetch(url,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setCity(data)
        })
    },[])

    return(
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={updateCount}>Counter</button>
            <h2>{count1}</h2>
            <button onClick={() => {setCount1(count1+1)}}>Counter1</button>
            <Display myCity={city}/>
        </>
    )
}

export default HookComponent