import React, {Component} from 'react';

import TodoList from './TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '', //输入的值
            data: [], //列表数据
            show:'All',
            type:['All','Active','Completed']

        }

    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.inputValue.trim()) {

            this.setState({
                data: [
                    ...this.state.data, {
                        text: this.state.inputValue,
                        completed: false,
                        id: new Date().getTime()
                    }
                ]
            });
        } else {
            alert('请输入数值');

        }
        this.setState({inputValue: ''});
    }
    
    handleCompleted(id){
        // console.log(index);
        let newData =this.state.data;
        let index=newData.findIndex((item) =>item.id===id);
         newData[index].completed=!newData[index].completed;
         this.setState({data:newData});
        
    }
    handleRemove(id){
        // console.log('rem');
        let r=confirm('确定删除');
        if(r){

        let newData =this.state.data;
        let index=newData.findIndex((item) =>item.id===id)
      
        newData.splice(index,1);
        this.setState({
            data:newData
        });
        }

    }
    render() {
        let showData;
        switch (this.state.show) {
            case 'Active': showData=this.state.data.filter((item) => !item.completed
            )
                break;
                 case 'Completed': showData=this.state.data.filter((item) => 
                 item.completed
            )
                break;
            default: showData=this.state.data;
                
        }
        return (

            <div className='container'>

                <h1 className='text-center'>TODO</h1>
                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <div className=" text-center">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='add'
                                value={this.state.inputValue}
                                onChange={(e) => {
                                this.setState({inputValue: e.target.value});
                            }}/>
                            <span className="input-group-btn">

                                <button className="btn btn-default" type="submit">ADD{this.state.data.length + 1}</button>
                            </span>
                        </div>
                    </div>
                    <TodoList data={showData} handleCompleted={this.handleCompleted.bind(this)} 
                     handleRemove={this.handleRemove = this.handleRemove.bind(this)}
                    />
                </form>
                {
                    this.state.type.map((item) => <button key={Math.random()} className={`btn ${this.state.show===item?'btn-success':'btn-primary'}`}type="button" onClick={(x)=>this.setState({show:x})}>
                    {item}
                    </button>
                
                        
                 )
                }
              
            </div>

        );
    }
}

export default App;
