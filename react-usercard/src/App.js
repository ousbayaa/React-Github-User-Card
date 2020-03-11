import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './Components/UserCard';
import FollowerCard from './Components/FollowerCard'

class App extends Component {
  constructor() {
  super()
  this.state= {
    main: [],
    followers: [],
    }
  }
  componentDidMount() {
    axios
    .get('https://api.github.com/users/ousbayaa')
    .then(res => {
      this.setState({
        main: res.data
      })
      return res.data.followers_url
    })
    .then(res => {
      console.log(res)
      axios.get(res)
      
      .then(res => {
        console.log('DATA', res.data)
        this.setState({
          followers: res.data
        })
      })
    })
    
  }

  render(){
    return(
      <div style={{width: '1600px', height: '1300px', marginTop: 'auto', margin: 'auto', flexDirection: 'column', justifyContent:'center', backgroundImage:'linear-gradient(to right top, white, black)'}}>
        <h1 style={{textAlign:'center', color: 'salmon', fontFamily: 'Indie Flower, cursive'}}>Lambda Cards</h1>
        <div>
         <UserCard main={this.state.main}/> 
        </div>
        
        <div style={{width: '1500px', height: '900px', display:'flex', flexWrap:'wrap', margin: 'auto'}}>
        <FollowerCard followers={this.state.followers}/>
        </div>
      
      </div>
    )
  }
}

export default App;