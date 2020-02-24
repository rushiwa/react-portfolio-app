import React, {Component} from 'react';
import Social from '../components/Social';

class Contact extends Component {
    
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email  :   rush-mike@hotmail.com</h3>
                <h3>Instagram   :   @rush_iwa</h3>
                <Social />
            </div>
        )
    }
}

export default Contact;