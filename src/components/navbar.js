import React, {Component} from 'react'
import { Navbar } from 'react-bootstrap'



class Navbar1 extends Component{
    render() {
        return (
          <Navbar>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <p>This is navigation bars</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        )
    }
};
export default Navbar1
