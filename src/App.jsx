import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navigation from './components/Nav/Navigation';
import UsersContainer from './components/Users/UsersContainer';
import { withRouter } from 'react-router';
import { initialazeApp } from './redux/app-reducer';
import Preloader from './components/common/Prealoder/Preloader'
import { WithSuspense } from './hoc/WithSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
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
                     render={WithSuspense(DialogsContainer)} />

                  <Route path='/profiles/:userId?'
                     render={WithSuspense(ProfileContainer)} />

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
