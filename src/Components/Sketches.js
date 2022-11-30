import React, { useState,useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Aos from "aos";


const Sketches = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    },);
    const Sketch = [
        {
            id: 1,
            img: "../images/sketches/img1.jpg"
        },
        {
            id: 2,
            img: "/images/sketches/img2.jpg"
        },
        {
            id: 3,
            img: "/images/sketches/img3.jpg"
        },
        {
            id: 4,
            img: "/images/sketches/img4.jpg"
        },
        {
            id: 5,
            img: "/images/sketches/img5.jpg"
        },
        {
            id: 6,
            img: "/images/sketches/img6.jpg"
        },
    ];
    const [sketchIndex, setsketchIndex] = useState(Sketch);

    return (
        <>
            <Header />
            <section className='_Sketch_section'>
                <div className="_Sketch">

                    {sketchIndex.map((Elem, index) => {
                        return (
                            <>
                                <div className="Sketch_container" key={index} data-aos="fade-up" data-aos-duration="1200">
                                    <div className='slide2_Sketches slide_2 '>
                                        <img src={`/images/sketches/img${index + 1}.jpg`} alt="images" className="Slide mobile" />
                                    </div>

                                </div>


                            </>

                        )
                    })}




                </div>
                <Footer />

            </section>
        </>
    )
}

export default Sketches