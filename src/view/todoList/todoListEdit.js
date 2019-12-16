import React ,{Component} from 'react';
import Dialog from "../../components/dialog";
import Input from "../../components/input";
import Button from "../../components/button";
import "./todoList.scss";
class TodoEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      editData: {},
    }
  }
  get editData(){
    return Object.keys(this.state.editData).length > 0 ?this.state.editData : this.props.data
  }
  get foot(){
    const {saveHandler} = this.props;
    return  <div className = "confirm_btns">
              <Button type="default" rander onClick={this.props.closeHandler}>取消</Button>
              <Button type="primary" rander onClick={()=>{
                saveHandler(this.editData)
              }}>保存</Button>
            </div>
  }
  render(){
    const {visible, closeHandler,data} = this.props;
    var editData = this.editData;
    return (
        <Dialog visible={visible} title="编辑" closeHandler = {closeHandler} foot={this.foot}>
          <div className="edit_form">
            <div className="edit_cell">
              <div className="edit_label">标题</div>
              <div className="edit_input">
                <Input defaultVal = {editData && editData.title} onChange={(e)=>{
                  editData.title = e.target.value;
                  this.setState(editData)
                }}/>
              </div>
            </div>
            <div className="edit_cell">
              <div className="edit_label">完成时间</div>
              <div className="edit_input">
                <Input defaultVal = {editData && editData.time} onChange={(e)=>{
                  editData.time = e.target.value;
                  this.setState(editData)
                }}/>
              </div>
            </div>
          </div>
        </Dialog>
      )
  }
}
export default TodoEdit;
