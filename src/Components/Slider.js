import React, { useState } from 'react'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'


const Slider = ({ imgData }) => {
    const [SlideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {
        if(SlideIndex == 5) {
            setSlideIndex(1);
        } else {
            setSlideIndex(SlideIndex+1);
        }
    }
    const prevSlide = () => {
        if(SlideIndex == 1) {
            setSlideIndex(2)
        } else {
            setSlideIndex(SlideIndex-1);
        }
    }
    return (
        <>


            <div className="SliderBox">
                <div className="sm_Container">
                    <h2 className='Head4'>My <span className="ul4">Sketc</span>hes <span className="arrow">{`>`}</span><span className="arrow">{`>`}</span><span className="arrow">{`>`}</span></h2>
                    <div className="more_btn"><button type='button' className='See_More' onClick={()=>window.open('/Sketches')}>See More <span className="qus">?</span></button></div>
                </div>
                <div className="prevbtn_container btn"><BiLeftArrow className='pBtn' onClick={() => { prevSlide() }} /></div>

                <div className="Slider" >
                    <div className="slides">
                        <div className="slide1 ">
                            {imgData.map((obj, index) => {
                                return (
                                        <div key={"slide1"+index} className='slide2 slide_2 '>
                                            <img src={require(`../../public/images/sketches/img${SlideIndex}.jpg`)} alt="slider1-img" className="Slide Slide_Home mobile" />
                                        </div>
                                )
                            })}
                        </div>
                        <div className="slide2 mobile_slide">
                            {imgData.map((obj, index) => {
                                return (
                                        <div key={"slide2"+index} className='slide2 mobile_slide2 '>
                                            <img src={require(`../../public/images/sketches/img${SlideIndex+1}.jpg`)} alt="slider2-img" className="Slide " />
                                        </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="nextbtn_container btn"><BiRightArrow className='nBtn' onClick={() => nextSlide()} /></div>
            </div>

        </>
    )
}

export default Slider