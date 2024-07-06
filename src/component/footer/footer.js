import './footer.css'



export default function Footer() {

    return (

        <div className='footer-bg-img'>
            <footer className='footer'>
                <div className='footer-logo'>
                    <img src='/btc japan logo white-02-04.png'></img>
                    <div>
                        <img src='/facebook icon.png' alt='ims' width='25px' height='25px'></img>
                        <img src='/Icon instagram.png' alt='ims' width='25px' height='25px'></img>
                        <img src='/Icon twitter.png' alt='ims' width='25px' height='25px'></img>
                        <img src='/Icon youtube.png' alt='ims' width='25px' height='25px'></img>
                    </div>

                </div>
                <div className="resources">
                    <h3 style={{ color: '#fe8c22' }}>CONTACT US<br></br><img src='/Line 92.png'></img></h3>
                    <span><img src='/location.png' alt='#' /><label style={{ color: 'white' }}>Address</label></span>
                    <span><img src='/phone.png' alt='#' /><labal style={{ color: 'white' }}>phone</labal></span>
                    <span><img src='/teliphone.png' alt='#' /><label style={{ color: 'white' }}>PTCL Phone</label></span>
                    <span><img src='/mail.png' alt='#' /><labal style={{ color: 'white' }}>Email</labal></span>

                </div>
                <div className="resources">
                    <h3 style={{ color: '#fe8c22' }}>RESOURCES<br></br><img src='/Line 92.png'></img></h3>
                    <label style={{ color: 'white' }}>About us</label>
                    <label style={{ color: 'white' }}>Contact us</label>
                    <label style={{ color: 'white' }}>Privacy Policy</label>
                    <label style={{ color: 'white' }}>Terms and Conditions</label>
                    <label style={{ color: 'white' }}>Newsletter</label>
                    <label style={{ color: 'white' }}>How to use BTC</label>

                </div>
                <div>
                    <button className='btn-sty'>
                        <img src='/line.png' alt='ims'></img>
                        Line us
                    </button><br></br>
                    <button className='btn-sty'>
                        <img src='/Whatsapp.png' alt='ims'></img>
                        Whatsapp us
                    </button>

                </div>


            </footer>


        </div>

    )
}