import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import veinte from '../../assets/img/v/veinte.png'

class TemaVeinteView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Neuroventas</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h3
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>TIPS DE NEUROVENTAS Y NEUROMARKETING</b>
              </h3>
            </Col>

          </Row>
          <Row className="centrado-fila">
            <Col xs="12" md="9" className="">
              <p>
                <b>
                Reduce un miedo.
                 </b>
              </p>
              <p>
                Al cerebro le fascinan dos cosas: Aumentar el placer y reducir un miedo. 
                La manera mas poderosa de vender, es que tu producto o servicio, 
                reduzca un miedo o aumente un placer. 
              </p>
             
            </Col>
            <Col xs="4" md="3" className="">
              <img
                src={veinte}
                width="650px"
                alt="veinte"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeinteView
