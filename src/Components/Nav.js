import React from "react";
import bars from './images/combined-shape@3x.png'
import searsh from  './images/fill-1@3x.png'
import contact from  './images/icon1@3x.png'
import tran from './images/translation@3x.png'
import map from './images/np-map-411527-000000@3x.png'
import iconslive from './images/icon@3x.png'
import celender from './images/icon2@3x.png'
import logo from './images/bmc-logo-blue@3x.png'
import infograghic from './images/infographic-icons-selected@3x.png'
import group from './images/group-40@3x.png'
import infograghic1 from './images/infographic-icons-2@3x.png'
import infograghic2 from './images/infographic-icons-3@3x.png'
import Bitmaps from './images/bitmap@2x.png'
var ReactFitText = require('react-fittext');






function Navbars() {
return(
    <div className='Navbars ' >
        <div className='container photos12 '>
            <div className='nav photoos'>
                <div className='icons-nav  text-center mt-5  '>
                    <div className='row'>
                        <div className='divbars    col-4 '>
                            <p className='margin500'><span className='bk-red'>appl</span>y online</p>
                        </div>
                        <div className='divicons    col-6  '>
                            <img className='celender ' src={celender}/>
                            <img className='iconslive ' src={iconslive}/>
                            <img className='map ' src={map}/>
                            <img className='tran ' src={tran}/>
                            <img className='contact ' src={contact}/>
                            <img className='searsh ' src={searsh}/>
                        </div>
                        <div className='divbars    col-2 '>
                            <img className='bars ' src={bars}/>
                        </div>
                    </div>
                </div>
                <div className='parag m-auto'>
                    <div  className='zindex1'>
                        <img src={Bitmaps}/>
                    </div>
                   <div className='zindex2'>
                       <p>
                           Batterjee Medical College has been <br/> dedicated to the commitment of<br/>
                           delivering a resounding message with the<br/> end in mind of excellence.
                       </p>

                       <p className='parag2  mt-3 ml-5'>
                           Watch the full video <span className='red'>___</span>
                       </p>
                   </div>


                </div>
            </div>
            <div className='logos'>
                <img className='logoimg mt-5' src={logo}/>
            </div>
            <div className='divparag333 text-center '>
                <p className=' divparag33'>VISIT BMC<span className='red'> ___</span></p>
                <p className='divparag331'>REQUEST INFO <span className='red'>___</span></p>
            </div>

            <div className=' icons-dow-navbar mt-5'>
                <div className=' row mt-5 text-center '>
                    <div className=' col-4  mt-5'>
                        <img src={infograghic}/>
                        <span className='number5100 ml-3'>5,100+</span>
                        <p className='student ml-4 '>student</p>
                    </div>
                    <div className='col-4  mt-5 '>
                        <img src={group}/>
                        <img src={infograghic1}/>
                        <img src={infograghic2}/>
                    </div>
                    <div className='col-4  mt-5'>
                        <p className='about-bmc'>ABOUT BMC <span className='red'>___</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Navbars