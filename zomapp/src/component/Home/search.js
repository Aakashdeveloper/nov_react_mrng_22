import React,{Component} from 'react';
import './search.css';

const lurl = "http://3.17.216.66:4000/location"
class Search extends Component{

    constructor(){
        super()
        console.log(">>>>insie constructor")
        this.state={
            location:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }

    render(){
        console.log(">>>>insie render")
        return(
            <>
                <div id="search">
                    <div className="logo">
                        <span>D!</span>
                    </div>
                    <div id="heading">
                        Find Best Place Near You
                    </div>
                    <div id="dropdown">
                        <select>
                            <option>----Select Location----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select id="restSelect">
                            <option>----Select Restaurant----</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }


    //api calling on page load 
    componentDidMount(){
        console.log(">>>>insie componentDidMount")
        fetch(lurl ,{method: 'GET'})
        //return promise
        .then((res) => res.json())
        //return data
        .then((data) => {
            //console.log(data)
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })

    }
}

export default Search