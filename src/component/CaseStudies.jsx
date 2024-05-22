import React from 'react'
import image1 from "../assets/case-studies/image(1).png"
import image2 from "../assets/case-studies/image(2).png"
import image3 from "../assets/case-studies/image(3).png"
function CaseStudies() {
    return (
        <div>
            <h2 className='case-title'>Our recent<br /><span>Case studies</span></h2>

            <div className='case_Content'>
                <div className='case_One'>
                    <div className='case_img1'>
                        <img src={image1} width="600" height="400" />
                    </div>
                    <div className='case_con1'>
                        <h2>Website Design for SCFC Canada</h2>
                        <p>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                    </div>
                </div>
            </div>

            <div className='case_Content'>
                <div className='case_One'>
                    <div className='case_img1'>
                        <img src={image2} width="600" height="400" />
                    </div>
                    <div className='case_con1'>
                        <h2>Website Design for SCFC Canada</h2>
                        <p>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                    </div>
                </div>
            </div>

            <div className='case_Content'>
                <div className='case_One'>
                    <div className='case_img1'>
                        <img src={image3} width="600" height="400" />
                    </div>
                    <div className='case_con1'>
                        <h2>Website Design for SCFC Canada</h2>
                        <p>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies
