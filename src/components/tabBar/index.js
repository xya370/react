import React, {Component} from 'react';
import PropsType from "prop-types";
import Icon from "../icon";
import "./tabBar.scss";
class TabBarItem extends Component {
  get Icon(){
    const {tabbarItem: {icon,iconSelect}, active} = this.props;
    return active ? iconSelect ? iconSelect : icon : icon;
  }
  get IconDom(){
    if(this.Icon.indexOf("image/") > 0) {
      return <img src={this.Icon} />
    } else {
      return <Icon name = {this.icon}/>
    }
  }
  render(){
    const {tabbarItem:{icon, title}, active, onClick} = this.props;
    return (
      <div className={active ? 'tabbarItem tabbarItem-active' : 'tabbarItem'} onClick = {(e)=>{
        if(onClick) {onClick(e)}
      }}>
        <span className ={!title ? "tabbarItem-span tabbarItem-icon tabbarItem-icon_only" : "tabbarItem-span tabbarItem-icon tabbarItem-both"}>
          {icon && this.IconDom}
          {title}
        </span>
      </div>
    )
  }
}
class TabBar extends Component {
  static propsType = {
    tabbarList: PropsType.array,
  }
  static defaultProps = {
    tabbarList: [],
  }
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 1,
    }
  }
  componentDidMount(){
    if(this.props.activeIndex) {
      this.setState({
        activeIndex: this.props.activeIndex
      })
    }
  }
  render(){
    const {tabbarList} = this.props;
    let {activeIndex} = this.state;
    let items = tabbarList.map((item, index)=>{
      return <TabBarItem tabbarItem = {item} key={item.id} active = {index+1 === activeIndex} onClick={(e)=>{
        this.setState({
          activeIndex: index+1
        })
      }}/>
    })
    let components = activeIndex && tabbarList[activeIndex-1].components
    return (
      <div className="tabBar">
        <div className="tabBar-content">
          {components && React.createElement(components, null, null)}
        </div>
        <div className="tabBar-tabs">{items}</div>
      </div>
    )
  }
}
export default TabBar;

