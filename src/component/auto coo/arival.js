import React from "react";
import './arival.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from "react-slideshow-image";


const slideImages = [
    {
        url: '/website.png'

    },
    {
        url: '/website.png'
    },
    {
        url: '/website.png'
    },
];

const divStyle = {
    display: 'flex',
    alignItems: "center",
    height: "500px",
    width: "1130px",
    backgroundSize: 'cover',
}


const arr = [

    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Karachi"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Gujramwala"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Lahore"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Islambad"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Karachi"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Karachi"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Karachi"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Karachi"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Karachi"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Gujramwala"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Lahore"
    },
    {
        stockNumber: "3534424",
        url: "/Rectangle 898.png",
        name: 'A 14 Audi',
        price: '1500',
        location: "Islambad"
    },
]


// const increaseLength = Array(10).fill(arr);
// console.log(increaseLength, '  length');


function Arival() {
    return (
        <div className='slide-container'>
            <Fade>
                {slideImages.map((image, index) => (
                    <div className="testing" key={index}>
                        <div style={{...divStyle, backgroundImage: `url(${image.url})` }}>
                        </div>
                    </div>
                ))}
            </Fade>
            <label className="label-st">Stock By Country</label><br></br>
            <img src="/Group 8.png"></img>
            <div style={{ display: "flex" }}>
                <div className="country">
                    <img src="/flag-japan_1f1ef-1f1f5.png"></img>
                    <label>japan</label>
                </div>
                <div>
                    <img src="/flag-pakistan_1f1f5-1f1f0.png"></img>
                    <label className="country">Pakistan</label>
                </div>
                <div>
                    <img src="/flag-united-kingdom_1f1ec-1f1e7.png"></img>
                    <label className="country">UK</label>
                </div>
                <div>
                    <img src="/flag-canada_1f1e8-1f1e6.png"></img>
                    <label className="country">Canada</label>
                </div>
                <div>
                    <img src="/flag-united-arab-emirates_1f1e6-1f1ea.png"></img>
                    <label className="country">UAE</label>
                </div>
                <div>
                    <img src="/flag-thailand_1f1f9-1f1ed.png"></img>
                    <label className="country">Thailand</label>
                </div>
                <div>
                    <img src="/flag-kenya_1f1f0-1f1ea.png"></img>
                    <label className="country">kenya</label>
                </div>
                <div>
                    <img src="/flag-uganda_1f1fa-1f1ec.png"></img>
                    <label className="country">Uganda</label>
                </div>
                <div>
                    <img src="/flag-south-africa_1f1ff-1f1e6.png"></img>
                    <label className="country">South Africa</label>
                </div>

            </div>
            <label className="label-st">New Arrivals</label><br></br>
            <img src="/Group 8.png"></img>
            <div className="stoke-item-next" style={{ display: "flex", justifyContent: "space-around", marginBottom: '50px' }}>
                {/* <div style={{ display: "flex", justifyContent: "space-around", marginBottom: '20px' }}> */}
                {
                    arr && arr.map((item, index) => {

                        return <>
                            <div className="stoke-item-col-md-3">
                                <img className="img-arrivals" src={item.url}></img>
                                <div className="stoke-item-inner" style={{ boxShadow: "0.2px 0.5px 0.5px 0.2px" }}>
                                    <img className="img-start" src="/Group 17.png"></img>
                                    <img className="img-bid" src="/Group 14.png"></img>
                                    <p className="stoke-number" style={{ color: "#0944C2" }}>Stoke NO. {item.stockNumber}</p>
                                    <div style={{ display: "flex" }}><p className="vehicle-name" style={{ color: "#3E3E3E" }}>{item.name}</p><button className="btn-damage">Damage</button></div>
                                    <p className="vehicle-price" style={{ color: "#E30000" }}>{item.price} yen</p>
                                    <p className="tender" style={{ color: "#000000" }}>Tender</p>
                                    <p style={{ color: "#3E3E3E" }}>Location: <span className="location" style={{ color: "#0944C2" }}>{item.location}</span></p>
                                </div>
                            </div>
                        </>

                    })
                }

            </div>
            <div>
                <label className="label-st">Special Offer</label><br></br>
                <img src="/Group 8.png"></img>
            </div>

            <div>
                <div className="btc">

                    <div className="div-img-1">
                        <div className="transport-left">
                            <img src="/Ellipse 5.png" alt="Image" className="background-circle" />
                            <img src="/kindpng_3352827.png" alt="Image" className="ship" />
                        </div>
                        <div className="transport-right">
                            <h1 className="btc-h">BTC TRANSPORT SERVICE</h1>
                            <label className="label-sty">DISCOVER THOUSANDS <br></br>OF VEHICLES & HEAVY EQUIPMENT<br></br> AT A FRACTION OF THE PRICE</label>
                            <button className="btn-st">VIEW MORE</button>
                        </div>
                    </div>
                    <div className="logistic">
                        <div className="transport-left">
                            <img src="/Ellipse 5.png" alt="Image" className="background-circle" />
                            <img src="/favpng_car-pickup-truck-mover-transport.png" alt="Image" className="ship-right" />
                        </div>
                        <div className="transport-right">
                            <h1 className="btc-h-right">BTC LOGISTIC</h1>
                            <label className="label-sty-right">DISCOVER THOUSANDS <br></br>OF VEHICLES & HEAVY EQUIPMENT<br></br> AT A FRACTION OF THE PRICE</label>
                            <button className="btn-st-right">VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default Arival;