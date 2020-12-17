import React from "react";
import photo5 from './images/bitmap-copy-2@3x.png'
import photo6 from './images/bitmap-copy-3@3x.png'
import shere from './images/link@2x.png'



function Resarsh() {
    return(
        <div className='container'>
    <div className='background-color'>
        <div className='row m-auto '>
            <div className='col-6'>
                <p   className=' parag4 ml-5 '>Resrsh<br/> publication</p>
            </div>
            <p className='col-6 psmall2 text-center '>All resersh <span className='red'>___</span> </p>
        </div>
    </div>
            <div className=' section-photo row   ml-4'>
                <div className='backkground-white col-4  padding-20'>
                    <p>ALUMNI PAPLICTION VALUM6</p>
                </div>
                <div className='col-4 padding-20'>
                    <img className='  text-center' src={photo5}/>
                    <p className='positions'>ALUMNI PAPLICTION VALUM6</p>
                </div>
                <div className='col-4 padding-20 '>
                    <img className='  text-center' src={photo6}/>

                    <p className='positions'>ALUMNI PAPLICTION VALUM6</p>
                </div>

            </div>
    </div>
)
}
    export default Resarsh;

