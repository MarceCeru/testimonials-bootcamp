import miImagen from './assets/imagees/image-john.jpg'
import imagenTanya from './assets/imagees/image-tanya.jpg'
import iconPrev from './assets/imagees/icon-prev.svg'
import iconNext from './assets/imagees/icon-next.svg'
import { useState } from 'react'



const Container = () => {

    const [mostrarPrimera, setMostrarPrimera] = useState(true);

    return (
        <div className="w-[375px] bg-white mx-auto xl:flex xl:w-full xl:flex-row-reverse xl:h-[800px] xl:relative">
            <section className="w-[375px] h-[360px] bg-[url(./assets/imagees/pattern-bg.svg)] bg-size-[auto_310px] bg-center bg-no-repeat relative xl:w-[830px] xl:bg-size-[700px_660px] xl:h-full xl:bg-[center_top_50px] xl:left-15" >
                <div className='flex justify-center items-center absolute top-[54px] left-15 shadow-2xl xl:top-[115px]  xl:left-31' >
                    <img className={`absolute w-[253px] rounded-[6px] xl:w-[540px] transition-opacity duration-300 ${mostrarPrimera ? "opacity-100" : "opacity-0"
                        }`} src={miImagen} alt="image-John" />
                    <img className={`w-[253px] rounded-[6px] xl:w-[540px] transition-opacity duration-300 ${mostrarPrimera ? "opacity-0" : "opacity-100"} `} src={imagenTanya} alt="image-tanya" />
                </div>

                <div className='flex items-center justify-around w-21 h-10 absolute top-72 left-36 rounded-3xl bg-white xl:top-157 xl:left-46 xl:w-[110px] xl:h-14 xl:rounded-4xl'>
                    <button onClick={() => setMostrarPrimera(true)} className='w-8 h-8 rounded-2xl'><img className='mx-auto my-auto h-3.5' src={iconPrev} alt="icon-prev" /></button>
                    <button onClick={() => setMostrarPrimera(false)} className='w-8 h-8 rounded-2xl '><img className='mx-auto my-auto h-3.5' src={iconNext} alt="icon-next" /></button>
                </div>
            </section>

            <section className='xl:absolute xl:left-0 xl:w-[750px] xl:top-[212px] xl:h-[585px] '>
                <div className='h-[235px] bg-[url(./assets/imagees/pattern-quotes.svg)] bg-size-[auto_55px] bg-[center_top] bg-no-repeat xl:h-[350px] xl:ml-[165px] xl:bg-size-[auto_105px] xl:bg-[95px_top]'>
                    <div className={`w-[375px] absolute transition-opacity duration-300 ${mostrarPrimera ? "opacity-100" : "opacity-0"}`}>
                        <p className='px-9 pt-6 text-[18.5px] text-center text-blue-951 leading-6.5 xl:text-left xl:text-[34px] xl:leading-11 xl:pt-17.5 xl:px-0 xl:w-[635px]'>
                            “ If you want to lay the best foundation possible I’d recommend taking this course.
                            The depth the instructors go into is incredible. I now feel so confident about
                            starting up as a professional developer. ”</p>

                        <div className='xl:flex xl:pt-8 xl:w-[635px]'>
                            <p className='text-blue-951 text-center text-[15.5px] font-bold pt-4 xl:text-[20px]'>John Tarkpor</p>
                            <p className='text-gray-402 text-center leading-5 font-bold xl:ml-4 xl:pt-5 xl:text-[20px]'>Junior Front-end Developer</p>
                        </div>

                    </div>

                    <div className={`transition-opacity duration-300 ${mostrarPrimera ? "opacity-0" : "opacity-100"}`}>
                        <p className='px-9 pt-6 text-[18.5px] text-center text-blue-951 leading-6.5 xl:text-left xl:text-[34px] xl:leading-11 xl:pt-17.5 xl:px-0 xl:w-[635px]'>
                            “ I’ve been interested in coding for a while but never taken the jump, until now.
                            I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                            excited about the future. ”</p>

                        <div className='xl:flex xl:pt-8'>
                            <p className='text-blue-951 text-center text-[15.5px] font-bold pt-3 xl:text-[20px]'>Tanya Sinclair</p>
                            <p className='text-gray-402 text-center leading-5 font-bold xl:ml-4 xl:pt-5 xl:text-[20px]'>UX Engineer</p>
                        </div>

                    </div>

                </div>
                <div className='xl:absolute bottom-0 h-[73px]  bg-[url(./assets/imagees/mi-curva.svg)] bg-no-repeat bg-size-[auto_60px] bg-left-bottom xl:h-[500px] xl:w-[595px]  xl:bg-size-[auto_152px]'></div>
            </section>
        </div>
    );
};

export default Container;

/* style={{backgroundImage: `url(${imagen})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '375px', width: '375px', position: 'relative', zIndex: 1}} */