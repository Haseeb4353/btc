import React from 'react'
import { ReactDOM } from 'react-dom/client';
import './header.css'




export default function Header() {



  const [time, setTime] = React.useState(new Date());


  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);



  return (
    <div className='header-bg-img'>

      <div className='logo'>
        <img src='/btc japan logo white-02-04.png'></img>
      </div>
        <div className='time-pg'>
          <span>{time.toLocaleString("en-US", {
            // dateStyle: "full",
            timeStyle: "medium",
            hour12: false,
          })} </span>
        </div>

        <ul>
          <li>car search</li>
          <li>Auction</li>
          <li>sotck</li>
          <li>Services</li>
          <li>My page</li>
          <li>inquary</li>
          <li>about us</li>
        </ul>
      <div className='header-right-btns'>
        <button className='btn-header'>
          <img src='/Icon account.png' alt='img' width='15px' height='15px'></img>
          Login/Register
        </button>
        <center>
          <div class="switch">
            <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" />
            <label for="language-toggle"></label>
            <span class="on">ENGILISH</span>
            <span class="off">JAPNIESE</span>
          </div>
        </center>
      </div>
      <div className='btn-login'>
        <div>
          <button>
            <img src='/person.png' alt='img' width='15px' height='15px'></img>
            Login
          </button>
        </div>
        <div className='burger'>
          <img src='/burgerMenu.png' alt='#' height='25' width='25' />
        </div>
      </div>
    </div>

  )
}
