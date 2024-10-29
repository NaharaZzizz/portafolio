import foto from '../assets/foto.png';
import Progreso from './progreso';

function About() {
    const info=[{
        componente:'Sobre mi',
        texto:' Soy una estudiante de secundaría de último año, con el titulo de bachiller en informática. He aprendido a desarrollar aplicaciones y páginas webs ',
        html:'HTML:',
        css:'CSS:',
        react:'REACT:',
        javascript:'JAVASRIPT:',
        dos:'Años de experiencia',
        diez:'Proyectos',
        diez2:'Clientes felices'
    }]
    return(
        <div className='about'>
            <h1>{info[0].componente}</h1>
            <div className='about-orden'>
                <img className='about-foto' src={foto}></img>
                <div className='about-text'>
                    <h5>{info[0].texto}</h5>
                    <br></br>
                    <h5>{info[0].html}</h5>  <Progreso variant="info" numero={90}></Progreso>
                    <h5>{info[0].css}</h5>  <Progreso variant="info" numero={80}></Progreso>
                    <h5>{info[0].react}</h5>  <Progreso variant="info" numero={50}></Progreso>
                    <h5>{info[0].javascript}</h5>  <Progreso variant="info" numero={40}></Progreso>
                    <div className='orden2'>
                        <div>
                            <h5>2+</h5><h6>{info[0].dos}</h6>
                        </div>
                        <div>
                            <h5>10+</h5><h6>{info[0].diez}</h6>
                        </div>
                        <div>
                            <h5>10+</h5><h6>{info[0].diez2}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;