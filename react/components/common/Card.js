'use strict';

import React from 'react';


export default class Card extends React.Component {
    render() {
        return (
            <div style={{background: "lightblue", padding:"5px"}}>
                {this.props.children}
            </div>
        );
    }

}
