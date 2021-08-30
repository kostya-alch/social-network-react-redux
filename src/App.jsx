import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Nav/Navigation';
import Profile from './components/Profile/Profile';
import { addPost } from './redux/state';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navigation />
            <div className='app-wrapper-content'>
               <Route path='/messages'
                  render={() => <Dialogs
                     store={props.store} />} />

               <Route path='/profiles'
                  render={() => <Profile
                     dispatch={props.dispatch}
                     profilePage={props.state.profilePage} />} />
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App;