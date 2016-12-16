import $ from 'jquery';
import {setCurrentUser, setCard, setPeriod} from './current'
import {findUser, loginUser} from './signin'
import {setValue} from './tableData'
import { browserHistory } from 'react-router'

export function fetchUser(id){
  // debugger
  return function(dispatch){
    dispatch(findUser())
    $.ajax({
      url: `https://ancient-hollows-21533.herokuapp.com/users/${id}`,
      type: 'GET',
      data: id,
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => {
      dispatch(loginUser())
      dispatch(setCurrentUser(response))
      if (response.credit_cards.length > 0 ){
        var recentCard = response.credit_cards[0]
        let recentCardPeriods = response.periods.filter(period=>{
              return period.credit_card_id === recentCard.id
            })
        let averagePayment
        let averageExpenditure

        // if (recentCardPeriods.length > 0) {
        //   averageExpenditure = recentCardPeriods.reduce((a,b)=>{return a + b.expenditure}, 0)/recentCardPeriods.length
        //   averagePayment = recentCardPeriods.reduce((a,b)=>{return a + b.payment}, 0)/recentCardPeriods.length 
        // }
        // else {
        //   recentCardPeriods = []
        //   averageExpenditure = 0
        //   averagePayment = recentCard.min_payment
        // }
        dispatch(setCard(recentCard))
        dispatch(setPeriod(recentCardPeriods))
        const newValues = {debt: recentCard.debt,
                        start_month: new Date().getMonth(),
                        start_year: new Date().getFullYear(),
                        creditcard: recentCard.name,
                        payment: recentCard.min_payment, // averagePayment,
                        expenditure: recentCard.min_payment/2, // averageExpenditure,
                        interest: recentCard.interest_rate}
        dispatch(setValue(newValues))
        browserHistory.push('/user')
      }
    else {
      browserHistory.push('/cards/new')}
    })
  }
}
