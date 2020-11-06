import React, { Component } from 'react'
import { CardBody, CardHeader,  Row } from 'reactstrap'
import diez from '../../assets/img/v/diez.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDiezView extends Component {
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
              src={diez}
              width="650px"
              alt="diez"
              className="img-fluid  animated  bounceInRight delay-0s"
            />
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiezView
