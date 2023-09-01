import React from 'react'
import { useMediaQuery } from 'react-responsive'
import SliderMobile from '../Home/SliderMobile'

const Diseños = () => {


    const mobile = useMediaQuery({ query: '(max-width: 680px)' })

    return (
        <div className='diseños'>
            {/* <div className="contenedor"> */}
                <div className='diseños__grid contenedor'>
                    <div className='diseños__desc'>
                        <h3>Diseños Personalizados</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus, ratione Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nsimilique, omnis aliquid laborum in quod velit eos doloribus non! magni ex numquam deleniti porro provident a quo dolores odio. Temporibus illum quisquam nesciunt quia rem animi impedit omnis.</p>
                    </div>
                { mobile
                    ? <SliderMobile/>
                    : 
                    <div className="galeria">
                        <div className="galeria__grid">
                            <img src="/src/img/Galeria1.jpg" />
                            <img src="/src/img/Galeria2.jpg" />
                            <img src="/src/img/Galeria3.jpg" />
                            <img src="/src/img/Galeria4.jpg" />
                            <img src="/src/img/Galeria5.jpg" />
                            <img src="/src/img/Galeria6.png" />
                        </div>
                    </div>
                }

                    
                {/* </div> */}








            </div>

        </div>
    )
}

export default Diseños