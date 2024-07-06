import React, { useEffect, useState } from 'react';
import './personal.css'
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
import Stepper from 'react-stepper-horizontal';


export default function Personal({ handleStepsPlus, activeStep }) {

    const [isOpen, setIsOpen] = React.useState(false)
    const [image, setImage] = useState('/Icon feather-upload-cloud.png');
    const [value, setValue] = useState();
    const [userId, setUserId] = useState();
    const [gender, setGender] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [isValid, setIsValid] = useState(false);
    const [birth, setBirth] = useState();
    const [email, setEmail] = useState();
    const [number1, setNumber1] = useState();
    const [Contact1, setContact1] = useState();
    const [number2, setNumber2] = useState();
    const [Contact2, setContact2] = useState();
    const [streetarress, setStreetadress] = useState();
    const [zip, setZip] = useState();
    const [country, setCountry] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();

    let name1 = '';


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }

    }

    useEffect(() => {
        const userID = Math.floor(100000 + Math.random() * 900000);
        setUserId(userID);
    }, [])


    useEffect(() => {
        const Birth = Math.floor(100000 + Math.random() * 900000);
        setUserId(Birth);
    }, [])

    const onChangeCallback = (date) => {
        setValue(JSON.stringify(date))
        setIsOpen(false)
    }

    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
    ];

    const onSubmit = () => {
debugger
        // if (!name || !name.includes("A")) {
        //     alert("name not getting A")
        // }
        if (!name || !lastName || !gender || !birth || !email || !image || !number1 || !Contact1 || !Contact2 || !number2 || !streetarress || !street || !city || !country || !zip) {
            setIsValid(true);
        } else {
            handleStepsPlus();
        }
    }


    return (
        <div className='login-page'>

            <div className='form-outer'>
                <h2 className='box-1'>REGISTER WITH BTC</h2>
                <Stepper
                    steps={steps}
                    activeStep={activeStep} />
                <p className='personal-info'>Personal Imformation</p>
                <div className='form-rows'>
                    <input className='form-input' type="id" value={userId} disabled placeholder='USER ID' />
                    <div>
                        <div className='form-input-tr'>
                            <td>
                                <input checked={gender == "male" ? true : false} onChange={() => setGender('male')} className='input-type-form ' type="radio" name="gender" id="gendermale" placeholder='mail' />
                                <label className='gender' for="gendermale">Male</label>
                            </td>
                            <td>
                                <input checked={gender == "female" ? true : false} onChange={() => setGender('female')} className='input-type-form' type="radio" name="gender" id="genderfemale" placeholder='femail' />
                                <label className='gender' for="genderfemale">Female</label>
                            </td>
                            {!gender && isValid && <label style={{ color: 'red' }}>field is required</label>}

                        </div>
                    </div>
                </div>
                <div className='form-rows'>
                    <div style={{ display: 'grid' }}>
                        <input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setName(e.target.value)} className='form-input' type="email" placeholder='FIRST NAME' />
                        {!name && isValid && <label style={{ color: 'red' }}>field is required</label>}
                    </div>
                    <div>
                        <input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setLastName(e.target.value)} className='form-input' type="email" placeholder='LAST NAME' />
                        {!name && isValid && <label style={{ color: 'red' }}>field is required</label>}
                    </div>
                </div>
                <div className='form-rows'>

                    <button  style={{ width: "316px", border: '1.5px solid #707070', color: '#707070', fontSize: 'large', background: 'white', height: "75px", borderRadius: '10px' }}
                        onClick={() => {
                            setIsOpen(true)
                        }}
                    >
                        <img src='/Icon awesome-calendar-alt.png'></img>
                        <label style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setBirth(e.target.value)} >{value ? value : 'Select date of birth'}</label>
                        
                    </button>
                    <DatePicker
                        isOpen={isOpen}

                        onChange={onChangeCallback}
                        onClose={() => setIsOpen(false)}
                        defaultValue={value}
                        minDate={new Date(1980, 10, 10)}
                        maxDate={new Date(2021, 0, 10)}
                        headerFormat='DD, MM dd' />
                    <div style={{ display: "grid" }}>
                        <input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setEmail(e.target.value)}  className='form-input' type="email" placeholder='EMAIL' />
                        {!name && isValid && <label style={{ color: 'red' }}>field is required</label>}
                    </div>
                </div>
                <div className='form-rows'>
                    <div>
                        <div className='img-id'>
                            <input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setImage(e.target.value)} type="file" className="filetype" />
                            <img alt="preview image" src={image} />
                            <p>Upload Id Card From Front Side</p>

                        </div>
                    </div>
                    <div className='img-id'>
                        <input type="file" onChange={onImageChange} className="filetype" />
                        <img alt="preview image" src={image} />
                        <p>Upload Id Card From Back Side</p>
                    </div>
                </div>
                <div className='form-rows'>
                    <div>
                        <input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setNumber1(e.target.value)} className='country-code' type="email" placeholder='+92' />
                        <input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setContact1(e.target.value)} className='form-input-con' type="email" placeholder='Contuct no 1' />
                        {!name && isValid && <label style={{ color: 'red' }}>field is required</label>}

                    </div>
                    <div>
                        <span><input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setNumber2(e.target.value)} className='country-code' type="email" placeholder='+92' /></span>
                        <span><input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setContact2(e.target.value)} className='form-input-con' type="email" placeholder='Contuct no 2' /></span>
                        {!name && isValid && <label style={{ color: 'red' }}>field is required</label>}
                    </div>
                </div>
                <div className='form-rows-btn'>
                    <span><input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setStreetadress(e.target.value)} className='address' type="email" name="email" placeholder='Street Address' />{!name && isValid && <label style={{ color: 'red' }}>field is required</label>}</span>
                    <span><input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setZip(e.target.value)} className='country-code-lo' type="email" placeholder='Zip Code' />{!name && isValid && <label style={{ color: 'red' }}>field is required</label>}</span>
                </div>
                <div className='form-rows-btn'>
                    <span><input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setCity(e.target.value)} className='street' type="email" placeholder='City' />{!name && isValid && <label style={{ color: 'red' }}>field is required</label>}</span>
                    <span><input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setStreet(e.target.value)} className='street' type="email" placeholder='Street' />{!name && isValid && <label style={{ color: 'red' }}>field is required</label>}</span>
                    <span><input style={{ borderColor: `${!name && isValid ? 'red' : ''}` }} onChange={(e) => setCountry(e.target.value)} className='street' type="email" placeholder='Country' />{!name && isValid && <label style={{ color: 'red' }}>field is required</label>}</span>
                </div>
                <div>
                    <button onClick={() => handleStepsPlus()} className='btn-bg'>
                        NEXT
                        <img className='img-btn-next' src='/Icon navigate-next.png'></img>
                    </button>
                </div>


            </div>


        </div>

    )
}