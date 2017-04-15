import React, { Component } from 'react';
import $ from 'jquery';
class Home extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            accesstoken:''
        }
    }
    
    componentWillMount() {
        let _this=this;
        $.ajax({
            type: "GET",
            url: "https://cnodejs.org/api/v1/topics",
            data: "data",
            success: function (response) {
                //console.log(response);
                _this.setState({
                    data:response
                });
             
            }
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let data={accesstoken:this.state.accesstoken};
        console.log(data);
        $.ajax({
            type: "POST",
            url: "https://cnodejs.org/api/v1/accesstoken",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                console.log(response);
            },
            error:function  (e) {
                // body
                console.log(e);
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
                <form onSubmit={this.handleSubmit.bind(this)}> 
                 <input type="text" onChange={(e) => {
                     return this.setState({
                         accesstoken:e.target.value
                     })
                 }}/>
                <button>hello</button>
                </form>
            </div>

        );
    }
}

export default Home;