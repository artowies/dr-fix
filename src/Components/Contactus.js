import React from "react";
import photogroup from './images/group-27.png'
import fb from './images/fb.png'
import insta from './images/insta-logo.png'
import inl from './images/in-logo.png'
import tweetr from './images/twitter-logo.png'
import youtube from './images/you-tube.png'
import {Navbar,NavDropdown,NavbarBrand,Nav,NavLink} from "react-bootstrap";


function Contactus() {
    return (
        <div className='container'>
            <div className='section01'>
                <p className='parg01 mt-5'>BUILD YOUR FUTURE</p>
                <h1 className='parg02'>Take The Netx Step</h1>
                <p className='parag03' >Null scripit tempas enim tac return praseant id arci postions uena val,blanded<br/>
                esr.visteactons nec pharetions massa
                </p>
            </div>
            <div className='section012 row'>
                <p className='col-4 parag032'><span className='bk-grey'>REQUES</span>T INFO <span className='red'>___</span> </p>
                <p className='col-4 parag032'><span className='bk-grey'>VIST</span> ONE OF THE CAMPUSSES<span className='red'>___</span></p>
                <p className='col-4 parag032'_><span className='bk-grey'>APPLA</span>Y TO A PROGRAME<span className='red'>___</span></p>

            </div>
            <div className='mtop row'>
                <div className='col-7 bk-color1'>
                    <img className='imagess1' src={photogroup}/>
                    <span className='font '>for you </span>
                    <span className='font'>studend  </span>
                    <span className='font'>Parents & Families</span>
                    <span className='font'>albums</span>
                    <span className='font'>sports & health</span>
                    <div className='row mt-4'>
                        <div className='col-4'>
                            <ul>
                                <li className='parag001'>About BMC</li>
                                <li className='parag00'>About</li>
                                <li className='parag00'>Message From The Dean</li>
                                <li className='parag00'>Timeline CSR</li>
                                <li className='parag00'>Accreditations & Partnerships</li>
                            </ul>
                        </div>
                        <div className='col-4'>
                            <ul>
                                <li className='parag001'>Admissions & Aid</li>
                                <li className='parag00'>Program Admission</li>
                                <li className='parag00'>Daem Program</li>
                                <li className='parag00'>Tomouh Program</li>
                                <li className='parag00'>Al Forsan Program</li>
                                <li className='parag00'>Excellence Program</li>
                                <li className='parag00'>BMC Discounts</li>
                            </ul>
                        </div>
                        <div className='col-4'>
                            <ul>
                                <li className='parag001'>News & Events</li>
                                <li className='parag00'>News & Media</li>
                                <li className='parag00'>Events Calendar</li>

                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <ul>
                                <li className='parag001'>Academics</li>
                                <li className='parag00'>Medicine</li>
                                <li className='parag00'>Dentistry</li>
                                <li className='parag00'>Doctor of Pharmacy (Pharm.D)</li>
                                <li className='parag00'>Healthcare Administration</li>
                                <li className='parag00'>Nursing</li>
                                <li className='parag00'>Radiologic Sciences</li>
                                <li className='parag00'>Respiratory Therapy</li>
                            </ul>
                        </div>
                        <div className='col-4'>
                            <ul>
                                <li className='parag001'>Life at BMC</li>
                                <li className='parag00'>College Tour</li>
                                <li className='parag00'>College Affairs</li>
                                <li className='parag00'>Services</li>
                                <li className='parag00'>Campus</li>

                            </ul>
                        </div>
                        <div className='col-4'>
                            <ul>
                                <li className='parag001'>Research & Publication</li>
                                <li className='parag00'>Research Centers</li>
                                <li className='parag00'>Researches</li>
                                <li className='parag00'>Publications</li>
                                <li className='parag00'>Researches</li>

                            </ul>


                        </div>
                        <div className='  mt-5 end'>
                            <span className='end2 parag001 '>Other Links</span>
                            <span className='font'>Programs</span>
                            <span className='font'>Fees</span>
                            <span className='font'>Registration Dates</span>
                            <span className='font'>Announcements</span>
                            <span className='font'>Work at BMC</span>
                            <span className='font'>FAQ</span>

                        </div>
                    </div>

                </div>
                <div className='col-5  bk-color2 text-center'>
                        <div className='contents  mt-5'>
                            <p className='parag001'>Contact</p>
                            <p className='parag00'>Tel: 920033923</p>
                            <p className='parag00'>info@BMC.edu.sa</p>
                        </div>
                    <div className='contents mt-5 '>
                        <p className='parag00' >P.O. Box 6231</p>
                        <p className='parag00'>North Obhur, Jeddah</p>
                        <p className='parag00'>Prince Abdullah Al-Faisal Street</p>
                        <p className='parag00'>21442 Jeddah, Saudi Arabia</p>
                    </div>
                    <div className='contents mt-5 '>
                        <ul>
                            <img className='icons ml-4' src={fb}/>
                            <img  className='icons ml-4' src={insta}/>
                            <img  className='icons ml-4' src={inl}/>
                            <img  className='icons ml-4' src={tweetr}/>
                            <img  className='icons ml-4' src={youtube}/>
                        </ul>
                    </div>
                    <div className='contents mt-5'>
                            <p className='parag001'>Subscribe to BMC Newsletter</p>
                    </div>
                </div>
            </div>


        </div>
    )

}


export default Contactus