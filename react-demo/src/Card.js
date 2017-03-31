import React, { Component } from 'react';

class Card extends Component {
    render() {
        let styles={
            root:{
                maxWidth:'750px',
                margin:'0 auto',
                // background:'#9c27b0'
            },
            left:{
                float:'left',
                width:'80px',
                lineHeight:'80px',
                textAlign: 'center', 
                background:'#00ffff',
                color:"#fff"
            }
        }
        return (
            <div style={styles.root}>
            <div style={styles.left}>{this.props.index}</div>
            <h2>{this.props.title}</h2>
            <p>{this.props.date}</p> 
            </div>
        );
    }
}
Card.defaultProps={
    title:'默认标题',
    date:'2010.1.30',
    index:1
}

export default Card;