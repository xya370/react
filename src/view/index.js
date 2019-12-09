import React, {Component} from "react";
import Input from "../components/input";
import Confirm from "../components/confirm";
import Icon from "../components/icon";
import Button from "../components/button";
import Table from "../components/table";
import InputNum from "../components/inputNum";
class View extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "23e",
      value2: "345"
    }
  }
  render(){
    let columns = [{
      title: '姓名',
      dataIndex: "name",
      key: "name",
    },{
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },{
      title: "住址",
      dataIndex: "address",
      key: "address"
    }];
    let dataSource = [{
      name: "zhangsan",
      age: 13,
      address: "xxxxxx街道"
    },{
      name: "lisi",
      age: "24",
      address: "xxxxxx街道"
    },{
      name: "heqi",
      age: "20",
      address: "xxxxxx街道"
    }]
    return (
        <div className="view">
          {/*<Confirm text="确定删除吗" />*/}
          <Input defaultVal={this.state.value} />
          <Input value={this.state.value2} onChange={(e)=>{
            var targetVal = e.target.value;
            this.setState({
              value2: targetVal
            })
          }}/>
          <Icon />
          <Button> Default </Button>
          <Button type="primary" rander> Primary</Button>
          <Button type = "primary" icon = "select" />
          <Button type = "primary" icon = "select" rander>Select</Button>
          <Table columns = {columns} dataSource = {dataSource}/>
          <InputNum defaultVal = "123" />
          <InputNum value = {this.state.value2} onChange={(val)=>{
            this.setState({value2: val})
          }}/>
        </div>
    )
  }
  async componentDidMount(){
    var res = await Confirm("确定删除吗");
    console.log(res ? "是": "否")
  }
}
export default View;