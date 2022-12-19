import React,{Component} from 'react';
import './placeOrder.css';

const url = "";
const placeOrder = "";

class PlaceOrder extends Component {
    constructor(props) {
        super(props)

        this.state={
            id:Math.floor(Math.random() * 10000),
            hotel_name:this.props.match.params.restName,
            name:'',
            email:'',
            phone:'',
            cost:0,
            address:'UH 66 Y, Delhi',
            menuItem:''
        }
    }

    handleChange = (event) => {
       
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your Order Form Restaurant {this.props.match.params.restName}</h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="row">
                                    <input type="hidden" name="cost" value={this.state.cost}/>
                                    <input type="hidden" name="id" value={this.state.id}/>
                                    <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                                    <div className="form-group col-md-6">
                                        <label>Name</label>
                                        <input className="form-control" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                    </div> 
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div> 
                                    <div className="form-group col-md-6">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                    </div> 
                                    <div className="form-group col-md-6">
                                        <label>Address</label>
                                        <input className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange}/>
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Total Price is Rs.{this.state.cost}</h2>
                                    </div>
                                </div>
                                <button className="btn btn-success">CheckOut</button>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
        
    }

}

export default PlaceOrder;