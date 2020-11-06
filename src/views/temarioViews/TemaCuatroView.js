import React, { Component } from 'react'
import { CardBody, CardHeader,  Row } from 'reactstrap'
import cuatro from '../../assets/img/v/cuatro.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
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
              src={cuatro}
              width="650px"
              alt="cuatro"
              className="img-fluid  animated  bounceInRight delay-0s"
            />
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
