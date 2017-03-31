import React, { Component } from 'react';

class CardList extends Component {
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
        let cards=this.props.data.map((item,i) =>   
             <div key={i} style={styles.root}>
            <div style={styles.left}>{item.index}</div>
            <h2>{item.title}</h2>
            <p>{item.date}</p> 
            </div>      
        )
        return (
            <div>

            {cards}
            </div>
        );
    }
}

export default CardList;