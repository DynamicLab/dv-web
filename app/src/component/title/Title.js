import React, {Component} from 'react';

export class Title extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <h1>Hello World! {this.props.title}</h1>
        </div>
        )
    }
}