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

  render(){
    if (this.props.showChildren && (this.props.calledChild === this.props.period.name)){
      return (
        <tr className="middleList">
          <td key={1}>{this.props.period.name}</td>
          <td key={2}>{this.props.period.start_month} {this.props.period.start_year} </td>
          <td key={3}>{this.props.period.end_month} {this.props.period.end_year} </td>
          <td key={4}>${this.props.period.payment} </td>
          <td key={5}>${this.props.period.expenditure} </td>
          <td key={6}><input type="button" id={this.props.period.id} onClick={this.deleteThing.bind(this)} value="delete period" /></td>
          <td key={7}><input type="button" id={this.props.period.id} onClick={this.props.editButton} value="edit period" /></td>
        </tr>
      )
    }
    else {
      return (
        <tr className="middleList">
          <td>{this.props.period.name}</td>
          <td><button id={this.props.period.name} onClick={this.handleClick.bind(this)}>Expand</button></td>
        </tr>
      )
    }
  }
}

module.exports = PeriodRow
