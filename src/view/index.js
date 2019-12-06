import React, {Component} from "react";
import InputNum from "../components/inputNum";
import Confirm from "../components/confirm";
class View extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "23e",
      value2: "345"
    }
  }
  render(){
    return (
        <div className="view">
          {/*<Confirm text="确定删除吗" />*/}
          <InputNum defaultVal={this.state.value} />
          <InputNum value={this.state.value2} onChange={(e)=>{
            var targetVal = e.target.value;
            this.setState({
              value2: targetVal
            })
          }}/>
        </div>
    )
  }
  async componentDidMount(){
    var res = await Confirm("确定删除吗");
    if (res) {
      console.log("是")
    } else {
      console.log("否")
    }
  }
}
export default View;