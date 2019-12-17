import React, {Component} from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Confirm from "../../components/confirm";
import TodoEdit from "./todoListEdit";
import "./todoList.scss";
class TodoListCell extends Component {
  render(){
    const {data, onCheck, delect, edit} = this.props;
    return (
      <div className="todoList_cell">
        <div className="todoList_cell-checkbox">
          <input type="checkbox" checked={data.status} onChange={(e)=>{
            if(onCheck){onCheck(e);}
          }}/>
        </div>
        <div className = {data.status ? "todoList_cell-content delLine" : "todoList_cell-content"}>
          <div className = "cell_span">{data.title}</div>
          <div className = "cell_span">{data.time}</div>
        </div>
        <div className = "todoList_cell-btns">
          <Button type="default" rander onClick={()=>{
            if(edit){edit(data.id)}
          }}>编辑</Button>
          <Button type="danger" rander onClick={()=>{
            if(delect){
              delect(data.id)
            }
          }}>删除</Button>
        </div>
      </div>
    )
  }
}
class TodoColumns  extends Component{
  render(){
    const {columns} = this.props
    let columnsItem = columns.map((item,index)=>{
      return <div className = "cell_span" key={item.key}>{item.title}</div>
    })
    return <div className="todoList_th">
      {columnsItem}
      <div className="cell_span activeLable">操作</div>
    </div>
  }
}
class TodoListBody extends Component {
  render(){
    var {data, delectEvent,editEvent} = this.props;
    var cells = data.map((item, index)=>{
      return <TodoListCell data = {item}  key= {item.id} onCheck={(e)=>{
        item.status = !item.status;
        this.setState({
          data:data
        })
      }} delect={(ids)=>{
        if(delectEvent){
          delectEvent(ids, index)
        }
      }} edit = {(ids)=>{
        if(editEvent){
          editEvent(ids, index)
        }
      }}/>
    })
    return <div>
      {cells}
    </div>
  }
}
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{
        title: "未处理事件一",
        status: true,
        id: "2xdf",
        time: "2019-12-01",
      },{
        title: "未处理事件二",
        status: false,
        id: "3fsr",
        time: "2019-12-03",
      },{
        title: "未处理事件三",
        status: false,
        id: "swdwe4",
        time: "2019-12-04"
      }],
      editIndex:"",
      confirm: "",
      dialogVisible: false,
      columns: [{
        title: '标题',
        dataIndex: "title",
        key: "title",
      },{
        title: '完成时间',
        dataIndex: "time",
        key: "time"
      }]
    }
  }
  getRandId(){
    return Math.random().toString(36).substr(2)
  }
  render(){
    let {data,dialogVisible, editIndex, columns} = this.state;
    return (
        <div>
          <div className="todoList">
            <div className="todoList-header">
              <Input suffixEvent={(val)=>{
                data.push({
                  id: this.getRandId(),
                  status: false,
                  title: val
                })
                this.setState(data)
              }} suffixIcon="add"/>
            </div>
            <TodoColumns columns = {columns} />
            <div className ="todoList-body">
              <div className = "todoList_table">
                <TodoListBody data = {this.state.data}
                   delectEvent={(id, index)=>{
                      Confirm("确定删除吗").then((
                      )=>{
                        data.splice(index,1)
                        this.setState(data)
                      })
                    }}
                  editEvent = {(ids,index)=>{
                    this.setState({
                      dialogVisible: true,
                      editIndex: index
                    })
                    console.log(ids,index)
                  }}
                />
              </div>
            </div>
          </div>
          <TodoEdit visible = {dialogVisible} data = {data[editIndex]} closeHandler={()=>{
            this.setState({
              dialogVisible: false,
            })
          }} saveHandler={(editData)=>{
            data[this.state.editIndex] = editData;
            this.setState({
              data:data,
              dialogVisible: false,
            })
          }}/>
        </div>
     )
  }
}
export default TodoList;
