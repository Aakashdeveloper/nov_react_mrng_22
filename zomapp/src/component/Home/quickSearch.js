import React,{Component} from 'react';
import './quicksearch.css';

class QuickSearch extends Component{
    render(){
        return(
            <>
            <div id="quickSearch">
                <span id="QuickHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By Meal Type
                </span>
                <div id="mainContainer">
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src="images/lunch.png" alt="breakfast"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading">
                                <a href="#">Breakfast</a>
                            </div>
                            <div className="componentSubHeading">
                                Best Deal for Restaurants
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default QuickSearch