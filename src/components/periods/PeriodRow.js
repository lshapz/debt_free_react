import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deletePeriodFromRails } from '../../ducks/current'

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

  periodClick(event){
    this.props.clickPeriod(event)
  }

  render(){
      return (
        <tr className="middleList">
          <td><label><input type="checkbox" defaultChecked="checked"></input></label></td>
          <td key={1}>{this.props.period.name}</td>
          <td key={2}>{this.props.period.start_month} {this.props.period.start_year} </td>
          <td key={3}>{this.props.period.end_month} {this.props.period.end_year} </td>
          <td key={4}>${this.props.period.payment} </td>
          <td key={5}>${this.props.period.expenditure} </td>
          <td key={6}><input type="button" className="editdelete" id={this.props.period.id} onClick={this.deleteThing.bind(this)} value="delete" />
          <input type="button" className="editdelete" id={this.props.period.id} onClick={this.props.editButton} value="edit" /></td>
        </tr>
      )
  }
}

module.exports = PeriodRow
