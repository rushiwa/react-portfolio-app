import React, {Component} from 'react';
import Wildcard from '../components/Wildcard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Wildcard title="MSc Computer Science" where="University of Birmingham" from="September 2017" to="December 2018" />
                <Wildcard title="BA Product Design" where="University for the Creative Arts" from="September 2013" to="December 2016" />
            </div>
        )
    }
}

export default Education;