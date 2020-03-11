import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class FollowerCard extends Component{
    render() {
      return(
        this.props.followers.map(follower => {
          return(
       
        <Card body inverse style={{ backgroundImage:'linear-gradient(to right top, dodgerblue, grey, black, white)', border: '2px dashed crimson', width: '250px', color: '#9259DA', display: 'flex', flexDirection:'column-reverse', textAlign:'center', alignItems:'stretch', margin: '.5% .5%', fontFamily: 'Lobster, cursive', color: 'white' }} key={follower.id}>
          <CardImg style={{border:'1px solid transparent', borderRadius:'50%', width: '100px'}}src={follower.avatar_url}/>
            <CardBody bg='dark'>
                <CardTitle style={{textAlign:'center' , margin: '3% 6%'}}><p>{follower.login}</p></CardTitle>
                    <CardSubtitle><p>{follower.location}</p></CardSubtitle>
                <CardText><p><a style={{textDecoration:'none', color: 'paleturquoise'}} href ={follower.repos_url}> Repos</a></p></CardText>
            </CardBody>
        </Card> 
           )
        } )
      )
    }
  }
  
  export default FollowerCard