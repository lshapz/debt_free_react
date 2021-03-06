import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deletePeriodFromRails } from '../../ducks/current'
import {editThisPeriod} from '../../ducks/newperiod'
import {browserHistory} from 'react-router'
class PeriodRow extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  deleteThing(event){
    this.props.deletePeriodFromRails(event.target.id)
  }

  handleClick(event){
    // debugger
    this.props.clickChild(event)
  }

  showEdit(event){
    event.preventDefault()
    var thing = this.props.current.periods.filter(period=>{
      return period.id == event.target.id
    })
    this.props.editThisPeriod(thing[0])
    browserHistory.push('/periods/edit')
  }

  periodClick(event){
    this.props.clickPeriod(event)
  }

  render(){
      return (
        <tr className="middleList">
          <td><label><input type="checkbox" defaultChecked="checked" id={this.props.period.id} onClick={this.periodClick.bind(this)} ></input></label></td>
          <td key={1}>{this.props.period.name}</td>
          <td key={2}>{this.props.period.start_month} {this.props.period.start_year} </td>
          <td key={3}>{this.props.period.end_month} {this.props.period.end_year} </td>
          <td key={4}>${this.props.period.payment} </td>
          <td key={5}>${this.props.period.expenditure} </td>
          <td key={6}><input type="button" className="editdelete" id={this.props.period.id} onClick={this.deleteThing.bind(this)} value="delete" />
          <input type="button" className="editdelete" id={this.props.period.id} onClick={this.showEdit.bind(this)} value="edit" /></td>
        </tr>
      )
  }
}
function mapStateToProps(state){
  return {current: state.current }
}

export default  connect(mapStateToProps, {deletePeriodFromRails, editThisPeriod})(PeriodRow)