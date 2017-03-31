import React, {Component} from 'react';

class Tabs extends Component {
    constructor(){
        super();
        this.state={
            show:1
        }
    }
    selectTab(num){
        //bind 参数 第一个this 第二个是给函数用的
        this.setState({show:num});
    }
    render() {
        let tab1 = <p>我是选项卡1</p>;
        let tab2 = <p>我是选项卡2</p>;
        let tab3= <p>我是选项卡3</p>;
        return (
            <div>
                <button onClick={this.selectTab.bind(this,1)} style={{background: this.state.show?'blue':null}}>选项卡1</button>
                <button onClick={this.selectTab.bind(this,2)}>选项卡2</button>
                <button onClick={this.selectTab.bind(this,3)}>选项卡3</button>
                <div  style={{
                    width: '200px',
                    heigth: '100px',
                    border: '1px solid #ccc',
                    padding: '10px'
                }}>{
                    this.state.show===1?tab1:
                    this.state.show===2?tab2:tab3

                }</div>

            </div>
        );
    }
}

export default Tabs;