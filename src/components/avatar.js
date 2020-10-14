import React, {Component} from  'react'
import { Card } from 'react-bootstrap' 
import './avatar.css'
let defaultImg = "https://i.stack.imgur.com/l60Hf.png"
class Avatar extends Component {
    render () {
      const {image, firstName, lastName, star}= this.props;
      return (
        <div class='Card1'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image? image : defaultImg}/>
          <Card.Body className={star}>
          <h1>{firstName}{lastName}</h1>
          </Card.Body>
          </Card>
        </div>
      )
    } 
    }

  export default Avatar

