import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./confirm.scss";
class ConfirmDom extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
  }
  cb = {}
  on(name,cb) {
    this.cb[name] = cb
  }
  off(name) {
    delete this.cb[name]
  }
  trigger(name,args) {
    if(!this.cb[name]) {return}
    this.cb[name](args)
  }
  show(){
    this.setState({
      show: true
    })
  }
  close(){
    this.setState({
      show: false
    })
  }
  render(){
    let {text} = this.props;
    return (
      this.state.show
      &&
      <div className = "confirm">
        <div className = "confirm_header"></div>
        <div className = "confirm_main">
          {text}
        </div>
        <div className = "confirm_foot">
          <div className = "confirm_btns">
            <div className = "confirm_btn define" onClick={(e)=>{
              this.trigger("hanlderOk");
              this.close();
            }}>确定</div>
            <div className="confirm_btn cancle" onClick={(e)=>{
              this.trigger("hanlderCancle");
              this.close();
            }}>取消</div>
          </div>
        </div>
      </div>
    )
  }
}
var div = "";

let methods = {
  ref: "",
  init(label){
    div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(<ConfirmDom text={label} ref={el=>{this.ref = el}}/>, div)
  },
  show(){
    this.ref.show();
  },
  hide(){
    this.ref.close();
  },
  hanlderOK(fn){
    this.ref.on("hanlderOk",fn);
  },
  hanlderCancle(fn) {
    this.ref.on("hanlderOk",fn)
  }
}
function Confirm(label){
  return (
    new Promise((res, rej)=>{
      methods.init(label);
      if (div) {
        res()
      } else {
        rej()
      }
    }).then(()=>{
      return methods;
    }).catch(()=>{
      console.log("error")
    })
  )
}
export default Confirm;