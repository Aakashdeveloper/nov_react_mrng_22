import React,{Component} from 'react';
import './header.css'
import {Link,withRouter} from 'react-router-dom'

const url = "http://3.17.216.66:5000/api/auth/userinfo";
class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            userData:''
        }
    }

    hanldeLogout = () => {
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('ltk')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            sessionStorage.setItem('userInfo',JSON.stringify(data));
            sessionStorage.setItem('loginStatus','LoggedIn')
            return(
                <>
                    <Link className="btn btn-info" to="/">
                        <span className='glyphicon glyphicon-user'></span> Hi {data.name}
                    </Link> &nbsp;
                    <button className="btn btn-danger" onClick={this.hanldeLogout}>
                        <span className='glyphicon glyphicon-log-out'></span> Logout
                    </button>
                </>
            )
        }else{
            return(
                <>                
                    <Link className="btn btn-success" to="/login">Login</Link> &nbsp;
                    <Link className="btn btn-danger" to="/register">Register</Link>
                </>

            )
        }
    }

    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel
                    &nbsp;&nbsp;<Link className="btn btn-success" to="/">Home</Link>
                </div>

                <div id="loginBtn">
                    {this.conditionalRender()}
                </div>
            </header>
        )
    }


    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }


    
}

export default withRouter(Header)