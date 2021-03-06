import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Widget extends Component {

    constructor(props) {
        super(props);
        this.actionHandlerWrapper = this.actionHandlerWrapper.bind(this);
        this.state = {
            inputValue: ''
        };
    }

    actionHandlerWrapper(event) {
        event.preventDefault();
        this.props.actionHandler(this.state.inputValue);
        if (this.props.erase) {
            this.setState({inputValue: ''})
        }
    }

    render() {
        return  (
                <div className="widget">
                    <form>
                        <input onChange={(e)=>this.setState({inputValue:e.target.value})} value={this.state.inputValue}></input>
                        <button onClick={this.actionHandlerWrapper}>{this.props.action}</button>
                    </form>
                </div>
            );
    }
}

Widget.propTypes = {
    action: PropTypes.string,
    actionHandler: PropTypes.func
};

export default Widget;
