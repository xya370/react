import React, {Component} from "react";
import PropsType from "prop-types";
import "./table.scss";
class Columns extends Component {
  render(){
    var columnsItems = this.props.columns.map((item)=>{
      return <th key={item.key}>{item.title}</th>
    })
    return (<thead>
      <tr>{columnsItems}</tr>
    </thead>)
  }
}
class DataSourceItem extends Component {
  render(){
    const {columns, dataItem, index} = this.props;
    let trs = columns.map((item)=>{
      if(item.render){
        return <td key={item.key}>{item.render(dataItem[item.dataIndex], dataItem,index)}</td>
      } else {
        return <td key={item.key}>{dataItem[item.dataIndex]}</td>
      }
    })
    return <tr>{trs}</tr>
  }
}
class DataSource extends Component {
  render(){
    const {columns, dataSource} = this.props;
    let trs = dataSource.map((item,index)=>{
      return <DataSourceItem dataItem = {item} columns = {columns} key={index+'_0'} index = {index}/>
    })
    return (
      <tbody>{trs}</tbody>
    )
  }
}
class Table extends Component {
  static propsType = {
    columns: PropsType.array,
    dataSource: PropsType.array,
  }
  static defaultProps = {
    columns: [],
    dataSource: [],
  }
  render(){
    const {columns, dataSource} = this.props;
    return (
      <div className="table">
        <table>
          <Columns columns = {columns}/>
          <DataSource dataSource = {dataSource} columns = {columns}/>
        </table>
      </div>
    )
  }
}
export default Table;
