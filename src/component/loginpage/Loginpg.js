import React, { useState } from 'react';
import './Loginpg.css'



export default function Loginpg() {

    const [checked, setChecked] = React.useState(true);


    return (
        <div className='login-page'>

            <div className='form-outer'>
                <div className='logo-img-div'>
                    <img className='box-b' src='/logo btc.png'></img>
                </div>
                <div className='form-rows'>
                    <input className='form-input-typ' type="email" name="email" value="USER ID" />
                </div>
                <div className='form-rows'>
                    <input className='form-input-typ' type="email" name="email" value="PASWORD" />
                </div>
                <div className='labal-st'>
                    <label className='label-box'>
                        <input type="checkbox"
                            defaultChecked={checked}
                            onChange={() => setChecked((state) => !state)} />
                    </label>
                    Remember
                    <p className='p-labal'>Forget your Pasword</p>
                </div>
                <div>
                    <button className='div-btn'>Login</button>
                </div>
                <div>
                    <button className='reg-btn'>Register</button>
                </div>
            </div>
        </div>
    )
}