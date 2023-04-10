import './ContactUs.css'
import '../../../index.css'
import Image from '../../../image/contact-us-image.png'

function ContactUs() {
    return (
        <div className="contact-us | bg-clr-600 row-for-desktop">
            <div className="images | bg-clr-400 hide-for-mobile">
                <div >
                    <h3 className='fs-500 letter-spacing start semi-bold'>We'd Love to</h3>
                    <h2 className='fs-800 letter-spacing start bold'>Hear from you</h2>
                </div>

                <img src={Image} alt="" />
            </div>

            <div className="form">
                <h3 className='fs-400 letter-spacing start semi-bold txt-clr-500'>Contact Us</h3>
                <form action="" className='grid'>
                    <div className="row | colummn-for-mobile row-for-desktop ">
                        <div>
                            <h5 className='fs-300 letter-spacing start txt-clr-500'>First Name</h5>
                            <input type="text" />
                        </div>
                        <div>
                            <h5  className='fs-300 letter-spacing start txt-clr-500'>Last Name</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="row | colummn-for-mobile row-for-desktop ">
                        <div>
                            <h5 className='fs-300 letter-spacing start txt-clr-500'>Country code</h5>
                            <input type="text" />
                        </div>
                        <div>
                            <h5  className='fs-300 letter-spacing start txt-clr-500'>Mobile number</h5>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="row | colummn-for-mobile row-for-desktop">
                        <div>
                            <h5 className='fs-300 letter-spacing start txt-clr-500'>Message</h5>
                            <textarea type="text" className='full-width full-height'/>
                        </div>
                    </div>

                    <button className='bg-clr-500 fs-500 txt-clr-500'>Submit</button>

                    <div className="row | flex fx-jc-sb ">
                        <div>
                            <h5 className='fs-300 letter-spacing start txt-clr-500'>E-Mail</h5>
                            <input type="email" className='full-width'/>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContactUs;