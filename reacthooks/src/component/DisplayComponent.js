import React from 'react';

function Display(props){

    const renderCity = ({myCity}) => {
        if(myCity){
            return myCity.map((item) => {
                return(
                    <div key={item._id}>
                        {item.restaurant_name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>Restaurant List</h2>
                {renderCity(props)}
            </center>
        </div>
    )
}

export default Display