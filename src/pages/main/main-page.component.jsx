import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './main-page.styles.scss';

const MainPage = () => {
    return (
        <div className='main-page'>
                  <header className="main-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Main Page
        </p>

        <div className='page-link'>
          <Link to="/example">Example Page</Link>
        </div>
        
      </header>
        </div>
    )
}

export default MainPage
