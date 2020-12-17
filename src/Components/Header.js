import React,{Component} from "react";
import photo from './images/bitmap2.png'
import photo2 from './images/owiess.jpg'
import photo3 from  './images/bitmap3@2x.png'
var ReactFitText = require('react-fittext');


function Header() {
    return (
        <div className='content'>
            <div className='container'>
                <div className='header-section1'>
                    <div className='row '>
                        <div className='col-md-4 col-sm-4  m-auto '>
                             <p className='header-p3 mt-5 '>The perfect environment for living and learning.</p>
                            <a className=' header-a1 mt-3 ml-2'><span className='bk-grey'>VIEW</span> ALL CLUBS...</a>
                        </div>
                        <div className='col-4 mt-5 php'>
                            <p className='header-p1 mt-4'><span className='red'>BMC Library</span></p>
                             <p className='header-p2 mb-5'  >The library is designed to provide easy access to the
                                latest information, books, journals and other
                                materials on all relevant subjects. It is equipped with
                                 the most modern communication technologies</p>
                            <img className='photo2 mt-3 ' src={photo2}/>
                        </div>
                        <div className='photo col-4 '>
                            <img  src={photo}/>
                        </div>
                    </div>
                </div>
                <div className='header-section2'>
                    <div className='row text-center'>
                        <div className='photo4 col-4'>
                            <img className='img-thumbnail' src={photo3}/>
                        </div>
                           <div className='col-8 padding120'>
                                <h6>Media Club</h6>
                               <p>Media Club at BMC Encourages students to develop their
                                   creative writing skills as a form of self-expression and a
                                   means of communicating emotions, ideas and history.</p>
                           </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header