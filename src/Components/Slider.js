import React, { useState } from 'react'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'


const Slider = ({ imgData }) => {
    const [SlideIndex, setSlideIndex] = useState(1);
    const [SlideIndex2, setSlideIndex2] = useState(2);
    // console.log(SlideIndex)
    const nextSlide = () => {
        if (SlideIndex !== imgData.length) {
            setSlideIndex(SlideIndex + 1);
        }
        else if (SlideIndex === imgData.length) {
            setSlideIndex(1);
        }
        if (SlideIndex !== 3) {
            setSlideIndex2(SlideIndex2 + 1);
        }
        else if (SlideIndex === 3) {
            setSlideIndex2(1);

        }
    }
    const prevSlide = () => {
        if (SlideIndex !== 1) {
            setSlideIndex(SlideIndex - 1);
        }
        else if (SlideIndex === 1) {
            setSlideIndex(imgData.length);
        }
        switch (SlideIndex) {
            case 1:
                setSlideIndex2(3);
                break;
            case 2:
                setSlideIndex2(4);
                break;
            case 3:
                setSlideIndex2(1);
                break;
            case 4:
                setSlideIndex2(2);
                break;
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
                                // console.log(index);
                                return (
                                    <>
                                        <div key={obj.id} className='slide2 slide_2 '>
                                            <img src={`../images/sketches/img${SlideIndex}.jpg`} alt="images" className="Slide Slide_Home mobile" />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="slide2 mobile_slide">
                            {imgData.map((obj, index) => {
                                // console.log(index + 1);
                                return (
                                    <>
                                        <div key={obj.id} className='slide2 mobile_slide2 '>
                                            <img src={`../images/sketches/img${SlideIndex2}.jpg`} alt="images" className="Slide " />
                                        </div>
                                    </>
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