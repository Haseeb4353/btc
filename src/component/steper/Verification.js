import React, { useState } from 'react';
import './Verification.css'
import Stepper from 'react-stepper-horizontal';
import { useNavigate } from 'react-router-dom';



export default function Verification({ handleStepsMinus, handleStepsPlus, activeStep }) {

    const navigate = useNavigate();
    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
    ];

    const handleNavigate = () => {
        navigate('gallary')
    }



    return (
        <div className='login-page'>
            <div className='form-outer'>
                <h2 className='box-1'>REGISTER WITH BTC</h2>
                <Stepper
                    steps={steps}
                    activeStep={activeStep} />
                <p className='Verification-p'>Verification</p>
                <div className='form-rows'>
                    <div className='div-img'>
                        <img className='img-con' src='/Email.png' alt='#' />
                        <input className='form-input' type="email" placeholder='Email' />
                    </div>
                    <input className='form-input-code' type="email" placeholder='Enter Code' />
                </div>
                <div className='btn-div'>
                    <button className='btn-pag'>Sent Code</button>
                </div>
                <div className='form-rows'>
                    <div className='div-img'>
                        <img className='img-con' src='/sms.png' alt='#' />
                        <input className='form-input' type="text" placeholder='Phone Number' />
                    </div>
                    <input className='form-input-code' type="text" placeholder='Enter Code' />
                </div>
                <div className='btn-div'>
                    <button className='btn-pag'>Sent Code</button>
                </div>
                <div className='form-rows'>
                    <button onClick={() => handleStepsMinus()} className='back-div'>
                        <img src='/Icon material-navigate-next.png'></img>
                        <label className=''>Back</label>
                    </button>

                    <button onClick={() => handleNavigate()} className='regis-btn'>
                        Register
                    </button>
                </div>
               <div>hello</div>
            </div>
        </div>
    )
}
