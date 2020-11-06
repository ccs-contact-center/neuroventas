import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import catorce from '../../assets/img/v/catorce.png'

class TemaCatorceView extends Component {
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
            <Col xs="8" md="9" className="">
              <p>
                <b>
                  ¡Ofrece siempre 3 opciones!
                  </b>
              </p>
              <p>
                Estudios realizados demuestran que el cerebro siente la
                necesidad de elegir, y que reacciona de mejor forma si elige entre
                3 alternativas.
                </p>
              <p>
                Por ejemplo: Un vendedor de móviles, tendrá más opciones de venta
                si enseña 3 móviles destacados, que si enseña todas las marcas disponibles.
                </p>
            </Col>
            <Col xs="4" md="3" className="">
              <img
                src={catorce}
                width="650px"
                alt="catorce"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCatorceView
