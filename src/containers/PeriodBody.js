import React from 'react'
import PeriodRow from '../components/periods/PeriodRow'
import {removePeriodFromCurrent,setPeriod} from '../ducks/current'
import {connect} from 'react-redux'

class PeriodBody extends React.Component {
  constructor(props){
    super(props)
    this.state = {showChildren: false, calledChild: "", showEditForm: false, editChild: ""}

    // let showChildren = this.showChildren.bind(this)
    let editPeriodDetails = this.editPeriodDetails.bind(this)
    let editShownPeriod = this.editShownPeriod.bind(this)
  }

  showChildren(event){
    if (this.state.calledChild !== event.target.id && this.state.calledChild !== ""){
      this.setState({calledChild: event.target.id})
    }
    else if (this.state.calledChild === event.target.id){
      this.setState({showChildren: !this.state.showChildren, calledChild: ""})
    }
    else {
      this.setState({showChildren: !this.state.showChildren, calledChild: event.target.id})
    }
  }

  editPeriodDetails(event){
    debugger
    this.setState({showEditForm: !this.state.showEditForm, editChild: event.target.id})
  }

  submittedPeriodDetails(){
    this.setState({showEditForm: false, editChild: ""})
  }

  editShownPeriod(event){
    let thing = this.props.current.periods.filter((item)=>{
      if (item.id == event.target.id) {
        return item
      }
    })

    if (thing.length >= 1) {
      this.props.removePeriodFromCurrent(event.target.id)
    }

    else {
      let period = this.props.current.user.periods.filter(item=>{return item.id == event.target.id})
      this.props.setPeriod(period)
    }
  }

  render(){
    console.log(this.props)
    let body = this.props.current.user.periods.filter(period=>{
      return period.credit_card_id === this.props.current.card.id
    }).map((period, index)=>{
      return <PeriodRow clickEdit={this.editPeriodDetails.bind(this)} clickPeriod={this.editShownPeriod.bind(this)} clickChild={this.showChildren.bind(this)} showChildren={this.state.showChildren} calledChild={this.state.calledChild} key={index} period={period} />
    })
    return (
      <tbody>
        {body}
      </tbody>
    )
  }
}

function mapStateToProps(state){
  return {current: state.current}
}

export default connect(mapStateToProps, {removePeriodFromCurrent,setPeriod})(PeriodBody)
