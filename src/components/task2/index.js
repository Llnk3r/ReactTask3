import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(k) {
        this.setState({ 
            count: this.state.count + k
        })
    }

    render() {
        return (
            <div> 
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={() => this.handleClick(1)}>+</button>
                    <button onClick={() => this.handleClick(-1)}>-</button>
                </div>
            </div>
        )
    }
}

export default Count;