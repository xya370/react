import React, {Component} from "react";
import PropsType from "prop-types";
import Icon from "../icon";

import "./button.scss";
class Button extends Component {
 static propsType = {
    type: PropsType.string,
    rander: PropsType.boolean,
    icon: PropsType.string,
  }
  static defaultProps = {
    type: "default",
    rander: false,
  }
  onClick(e){
    if(this.props.onClick){
      this.props.onClick(e)
    }
  }
  get ClassName(){
    const {type} = this.props;
    return "button button-"+type+this.Status;
  }
  get Status() {
    const {rander} = this.props;
    var status="";
    if (rander) {
      status += " button_rander";
    }
    return status;
  }
  render(){
    return <div className={this.ClassName}>
      {this.props.icon && <Icon name={this.props.icon}/> }
      {this.props.children && <span>{this.props.children}</span>}
    </div>
  }
}
export default Button;