import React, { Component } from 'react'
import { CardBody, CardHeader,  Row } from 'reactstrap'
import once from '../../assets/img/v/once.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOnceView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Neuroventas</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <img
              src={once}
              width="650px"
              alt="once"
              className="img-fluid  animated  bounceInRight delay-0s"
            />
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOnceView
