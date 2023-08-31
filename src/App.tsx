import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@scss/App.scss';
import Header from '@pages/HomeHeader';
import Main from '@pages/Main';
import NotFound from '@pages/NotFound';
import Posting from '@root/pages/Post'
import Posts from '@pages/Post/Posts';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter basename='OvertaleGit'>
          <Header/>
          <div className='Main'>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/posts" element={<Posts/>}></Route>
              <Route path="/posts/:id" element={<Posting/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
