import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'redux';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navigation from './components/Nav/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { withRouter } from 'react-router';
import { initialazeApp } from './redux/app-reducer';
import Preloader from './components/common/Prealoder/Preloader'

class App extends React.Component {

   componentDidMount() {
      this.props.initialazeApp()
   }
   render() {

      if (!this.props.initialized) {
         return <Preloader />
      }

      return (
         <BrowserRouter>
            <div className="app-wrapper">
               <HeaderContainer />
               <Navigation />
               <div className='app-wrapper-content'>
                  <Route path='/messages'
                     render={() => <DialogsContainer
                     />} />

                  <Route path='/profiles/:userId?'
                     render={() => <ProfileContainer />} />

                  <Route path='/users'
                     render={() => <UsersContainer />} />
                  <Route path='/login'
                     render={() => <Login />} />
               </div>
            </div>
         </BrowserRouter>
      )
   }
}


const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})


export default compose(
   withRouter,
   connect(mapStateToProps, { initialazeApp }))(App)
