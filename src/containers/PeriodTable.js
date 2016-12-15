import React from 'react'
import {removePeriodFromCurrent, setPeriod} from '../ducks/current'
import {connect} from 'react-redux'
import PeriodHead from '../components/periods/PeriodHead'
import PeriodBody from './PeriodBody'

 class PeriodTable extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container">
        <div className="allforms">
          <div className="periodList">
            <h3>Payment Periods</h3>
              <table id="periods" className="table-fill">
                <PeriodHead />
                <PeriodBody />
              </table>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {current: state.current}
}

export default connect(mapStateToProps, {removePeriodFromCurrent, setPeriod})(PeriodTable)
