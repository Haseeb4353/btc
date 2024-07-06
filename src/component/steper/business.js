import React, {useEffect, useState } from 'react';
import './business.css'

import Stepper from 'react-stepper-horizontal';




export default function Business({ handleStepsMinus, handleStepsPlus, activeStep }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [image, setImage] = useState('/Icon feather-upload-cloud.png');
    const [value, setValue] = useState();
    const [business, setBusiness] = useState();
    const [damage, setDamage] = useState();
    const [term, setTerm] = useState();
    const [gender, setGender] = useState();
    const [port, setPort] = useState();
    const [country, setCountry] = useState();
    const [pasword, setPasword] = useState();
    const [Comform, setComform] = useState();
    




    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    const [checked, setChecked] = React.useState(true);

    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
    ];

    // const onSubmit = () => {
    //     if(!business || ! damage || !term || !gender || !port || !country || !pasword || !Comform)
    //     setIsValid(true);
    //  else {
    //     handleStepsPlus();
    // }
    // }




    return (
        <div className='login-form'>
            <div className='form-outer'>
                <h2 className='box-1'>REGISTER WITH BTC</h2>
                <Stepper
                    steps={steps}
                    activeStep={activeStep} />
                <p className='business-info'>Business Imformation</p>
                <div className='form-rows'>
                    <input  className='form-input' type="email" name="email" placeholder='Business Name' />
                    <select className='form-input-select'>
                        <option value="1">Business Type</option>
                        <option selected value="2">All type</option>
                        <option selected value="3">Damage Car</option>
                        <option value="4">Used Car</option>
                        <option value="5">Truck/Bus</option>
                        <option value="6">Forklift</option>
                        <option value="6">Construction Machinery</option>
                        <option value="6">Industrial Machinery</option>
                        <option value="6">Form Machinery</option>
                        <option value="6">parts</option>
                    </select>
                    

                </div>
                <div className='form-rows'>
                    <div className='form-img'>
                        <input type="file" onChange={onImageChange} className="filetype" />
                        <img alt="preview image" src={image} />
                        <p>Upload Id Card From Front Side</p>

                    </div>
                    <div>
                        <select className='form-input-select'>
                            <option>Trade Term</option>
                            <option>C&L</option>
                            <option>C&L</option>
                            <option>ClF</option>
                        </select>
                        <div>
                            <p className='p-st'>Shipping Methed</p>
                            <div>
                                <td>
                                    <input  type="radio" name="gender" id="gendermale" placeholder='mail' />
                                    <label for="gendermale">Male</label>
                                </td>
                                <td>
                                    <input  type="radio" name="gender" id="genderfemale" placeholder='Femail' />
                                    <label for="genderfemale">Female</label>
                                </td>
                                {/* {!gender && isValid && <label style={{ color: 'red' }}>field is required</label>} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='label-box'>Distination</p>
                </div>
                <div className='form-rows'>
                    <input className='form-input' type="email" placeholder='Port' />
                    <input className='form-input' type="email" placeholder='Country' />
                </div>
                <div className='form-rows'>
                    <input className='form-input' type="email" placeholder='Pasword' />
                    <input className='form-input' type="email" placeholder='Comform Pasword' />
                </div>
                <div className='form-input-text'>
                    <h4 style={{ color: '#21429D' }}>BTC Term and Condation</h4>
                    <p>I Agree to this Condation Term & Condation</p>
                    <p>I Agree to this Condation Term & Condation</p>
                    <p>I Agree to this Condation Term & Condation</p>
                    <p>I Agree to this Condation Term & Condation</p>
                    <p>I Agree to this Condation Term & Condation</p>
                </div>
                <div className='form-rows-box '>
                    <div className='labal-st'>
                        <label className='label-box'>
                            <input type="checkbox"
                                defaultChecked={checked}
                                onChange={() => setChecked((state) => !state)} />
                            I Agree to this Condation Term & Condation
                        </label>
                    </div>
                    <div className='labal-st'>
                        <label className='label-box'>
                            <input type="checkbox"
                                defaultChecked={checked}
                                onChange={() => setChecked((state) => !state)} />
                            Recive RTC promotional notification
                        </label>
                    </div>
                </div>
                <div className='div-bnt'>
                    <button onClick={() => handleStepsMinus()} className='btn-set'>
                        <img className='img-back' src='/Icon material-navigate-next.png'></img>
                        <label className='label-bt'>Back</label>
                    </button>
                    <button onClick={() => handleStepsPlus()} className='next-btn'>
                        Next
                        <img className='img-next' src='/Icon navigate-next.png'></img>
                    </button>
                </div>
            </div>
        </div >
    )
}
