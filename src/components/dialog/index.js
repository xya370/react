import React, {Component} from 'react';
import Icon from "../icon";
import "../../theme.scss";
import "./dialog.scss";
class Dialog extends Component{
  render(){
    const {visible, foot, title, closeHandler} = this.props
    return (
        visible &&
        <div className="dialog shadow">
          <div className="dialog_header">
            <span className="dialog_header_title">{title}</span>
            <span className="dialog_close" onClick={()=>{
                closeHandler()
              }}>
              <Icon name="searchclose"/>
            </span>
          </div>
          <div className = "dialog_body">
            {this.props.children}
          </div>
          {foot && <div className="dialog_foot">{foot}</div>}
        </div>
      )
  }
}
export default Dialog;
