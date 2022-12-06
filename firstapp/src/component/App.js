import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';

class App extends Component {

    constructor(props){
        super(props)

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterData = (keyword) => {
        let output = this.state.productData.filter((data) => {
            return (data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        })
        
        this.setState({filteredData:output})
    }


    render(){
        return(
            <div>
                <Header userInput={(data)=>{this.filterData(data)}}/>
                <ProductDisplay prodData={this.state.filteredData}/>
                <Footer year="2022" month="Dec"/>
            </div>
        )
    }
    
}

export default App;