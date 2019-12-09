import React, {Component} from "react";
import "../../iconFont/iconfont.css";
import PropsType from "prop-types";

class Icon extends Component {
  static propsType = {
    name: PropsType.string,
    color: PropsType.string,
    fontSize: PropsType.string,
  }
  static defaultProps = {
    name: "arrow-down",
    color: "inherit",
    fontSize: "inherit"
  }

  get name(){
    let iconName = this.props.name;
    return "icon iconfont icon"+iconName;
  }
  get style(){
    let {color, fontSize} = this.props;
    return {
      color: color,
      fontSize: fontSize,
    }
  }
  onClick(e){
    let {onClick} = this.props;
    if (onClick) {
      onClick(e)
    }
  }
  render(){
    return (
      <span className = {this.name} style={this.style} onClick = {this.onClick.bind(this)}></span>
    )
  }
}
export default Icon;
