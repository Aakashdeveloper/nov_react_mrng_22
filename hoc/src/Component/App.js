import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';

class App extends Component {
  
  render() {
    return (
      <div>
        <StockList></StockList>
        <UserList></UserList>
      </div>
    )
  }
}

export default App;