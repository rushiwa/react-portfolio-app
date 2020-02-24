import React,{Component} from 'react';

class Wildcard extends Component {
    render() {
        return(
            <div class="wildcard">
                <div class="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 class="secondtext">{this.props.where}</h4>
                    <h4 class="secondtext">{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Wildcard;