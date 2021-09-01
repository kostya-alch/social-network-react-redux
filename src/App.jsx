import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navigation from './components/Nav/Navigation';
import Profile from './components/Profile/Profile';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navigation />
            <div className='app-wrapper-content'>
               <Route path='/messages'
                  render={() => <DialogsContainer
                     store={props.store} />} />

               <Route path='/profiles'
                  render={() => <Profile
                     store={props.store} />} />
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App;