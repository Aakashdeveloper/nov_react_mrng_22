import React,{Component} from 'react';
import axios  from 'axios';
import Display from './userDisplay';

const usersUrl = "http://localhost:5100/api/auth/users";

class ViewUsers extends Component{

    constructor(props){
        super(props)

        this.state={
            users:''
        }
    }

    render(){
        return(
            <>
                <Display userData={this.state.users}/>
            </>
        )
    }

    componentDidMount(){
        axios.get(`${usersUrl}`).then((res) => {this.setState({users:res.data})})
    }

}

export default ViewUsers;