import React from "react";
import photo from './images/bitmap2.png'
import photo2 from './images/owiess.jpg'
import photo3 from  './images/bitmap3@2x.png'
var ReactFitText = require('react-fittext');
function Photo() {
    return (
        <div className='container mt-5'>
            <div className='photos row text-center'>
                <img className='col-2' src={photo}/>
                <img className='col-6' src={photo}/>
                <img className='col-4' src={photo}/>
            </div>
            <div className='sections row text-center  mt-5 mb-4'>
                <p className='parag3 col-6'>Stau up to date withe<br/> the latest developement</p>
                <div className='margin carosals col-6 '>
                    <p className="psmall" >VIEW ALL NEWS<span className='red'>____</span></p>
                </div>

            </div>
            <div className='photos1 row'>
                <div className='col-4'>
                <h6 className='red'>01</h6>
                <p className='mardin-72 mb-2'>BMC celebrates the gadtins of it's seventh batch</p>
                <img  className='roundeds  mb-5' src={photo2}/>
                <p className='psmall'>READ MORE<span className='red'>___</span></p>
                </div>
                <div className='col-4'>
                    <h6 className='red'>02</h6>
                    <p className='mardin-72 mb-2'>BMC's boerats of trustes Approves add Addminstrative Asainstrative dations</p>
                    <img  className='roundeds mb-5' src={photo2}/>
                    <p className='psmall'>READ MORE<span className='red'>___</span></p>
                </div>
                <div className='col-4'>
                    <h6 className='red'>03</h6>
                    <p className='mardin-72 mb-2'>BMC Hostis at Delecitions of Braithith unvirsites of Discus means of coopration</p>
                    <img className='roundeds  mb-5' src={photo2}/>
                    <p className='psmall'>READ MORE<span className='red'>___</span></p>
                </div>
            </div>
        </div>
    )
}
export default Photo