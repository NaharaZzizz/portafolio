import video from '../assets/video.mp4';
import foto from "../assets/foto.png"

function Hero() {
    const info=[{
        Nombre:'Nahara Alexia Belen Zizzetta, programador Full-stak',
        eslogan:' Soy Nahara Zizzetta, una estudiante de secundaria de último año, con el título de bachiller en informática.',
    }]
    return(
        <>
            <video src={video} autoplay="true" muted="true" loop="true" ></video>
            <div className='orden'>
                <img className='foto' src={foto} alt="" />
                <h1 className='letras'>{info[0].Nombre}</h1>
                <h4>{info[0].eslogan}</h4>
            </div>
        </>
    )
}
export default Hero