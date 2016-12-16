import React, {Component} from 'react'
import SignIn from '../components/users/SignIn.js'
import SignUp from '../components/users/SignUp.js'
import NavBarGuest from './NavBarGuest.js'
import {Link} from 'react-router'
export default class GuestHome extends Component {

constructor(props){
  super(props)
}

render(){
  return (<div> 

  <NavBarGuest />
    {this.props.children ? this.props.children :
    <div id="intro">
<p className="intro">You're finally earning more than your monthly expenses, and it's time to start paying down your debt. Once you do, you're gonna buy yourself that new laptop (or pair of shoes, or five star steak dinner). But it's hard to look forward to a reward when you don't know when you're gonna get it. </p>
<p className="intro">That's where we come in. </p>
<p className="intro">Debt Free provides a fast, easy-to-use calculator for you to determine when you'll finally be free of debt. You're welcome to <Link to="/try"> try out the basic calculator</Link> before you register. </p>
<p className="intro">For logged in users, we provide a "payment period" functionality. If you have an unusally large expense one month, you can put that in and see how it'll affect your plans. Similarly, if you get some extra cash (a one time thing like an end of year bonus, or a longer-term but still temporary income stream like a part time freelance gig) and you want to put it towards your cards, you can put that in and see your goal get ever-closer. </p>
 <p className="intro">Debt Free was created as our final project for our Flatiron School Web Development Bootcamp. We are <a href="https://github.com/pgaret">Perry</a>, <a href="https://github.com/JasonGluck/">Jason</a>, and <a href="https://github.com/lshapz/">Laura</a>, and we hope you enjoy.</p>
 </div> }
  </div>)
}

}