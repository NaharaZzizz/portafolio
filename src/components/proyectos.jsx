import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import espark from '../assets/espark.jpg'
import heladeria from '../assets/images (1).jfif'

function Carta({titulo, texto,foto,link}) {
  return (
    <Card className='proyecto-card'>
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="dark" href={link}>visitar</Button>
      </Card.Body>
    </Card>
  );
}

function Proyectos() {
  const info=[{
    titulo:'E-spark',
    texto:'Página de promoción para una zapatilla inteligente',
    titulo2:"Heladeria",
    texto2:"Hecho en django",
  }]
    return(
        <div className="servicios">
            <div className="proyectos">
                <h1>My projects</h1>
                <div className='ordenn'>
                <Carta className="pro-cards" titulo={info[0].titulo} texto={info[0].texto} foto={espark} link={'https://e-spark-zeta.vercel.app/'}></Carta>
                <Carta className="pro-cards" titulo={info[0].titulo2} texto={info[0].texto2} foto={heladeria} link={'https://github.com/Candrinex/Heladeria'}></Carta>
                </div>
            </div>
            <div className='fondo'></div>
        </div>
    )
}
export default Proyectos;