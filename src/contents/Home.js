import React, {Component} from 'react';
import ProfilePic from '../img/ProfilePic.JPG';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src={ProfilePic} className='profilepic'></img>
                <ReactTypingEffect className="typingeffect" text={['I am Rush Iwa','I am a web developer']} speed={100} eraseDelay={700}/>
                <Social />
            </div>
        )
    }
}

export default Home;
