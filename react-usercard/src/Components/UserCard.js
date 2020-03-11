import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class UserCard extends Component{
  render() {
    return(
      <Card style={{ backgroundImage:'linear-gradient(to right top, white, black, grey, dodgerblue)', border: '2px dotted crimson', width: '250px', color: 'dodgerblue', textAlign:'center', justifyContent: 'center', marginRight:'em', fontFamily: 'Indie Flower, cursive'}}>
        <CardImg style={{border:'1px solid transparent', borderRadius:'50%', width: '100px'}} src={this.props.main.avatar_url}/>
          <CardBody>
            <CardTitle><p>{this.props.main.login}</p></CardTitle>
                <CardSubtitle><p>{this.props.main.location}</p></CardSubtitle>
            <CardText><p><a style={{color: 'gold', textDecoration: 'underline'}} href ={this.props.main.repos_url}> Repos</a></p></CardText>
          </CardBody>
      </Card>
    )
  }
}

export default UserCard