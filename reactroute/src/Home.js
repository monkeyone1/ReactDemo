import React, { Component } from 'react';
import $ from 'jquery';
class Home extends Component {
    constructor() {
        super();
        this.state={
            data:[]
        }
    }
    
    componentWillMount() {
        let _this=this;
        $.ajax({
            type: "GET",
            url: "https://cnodejs.org/api/v1/topics",
            data: "data",
            success: function (response) {
                console.log(response);
                _this.setState({
                    data:response
                });
            }
        });
    }
    
    render() {
        return (
            <div>
                <button>全部</button>
                <button>精华</button>
                <button>分享</button>
                <button>问答</button>
                <button>招聘</button>
                <div>
                   {this.state.data.map((item) =>
                       <img src={item.authot.avatar_url} alt="img"/>
                       )}
                </div>
            </div>

        );
    }
}

export default Home;