import React, { Component } from 'react'
import { CardBody, CardHeader,  Row } from 'reactstrap'
import tres from '../../assets/img/v/tres.png'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Neuroventas</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <img
              src={tres}
              width="650px"
              alt="tres"
              className="img-fluid  animated  bounceInRight delay-0s"
            />
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
