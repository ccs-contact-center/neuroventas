import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import diecinueve from '../../assets/img/v/diecinueve.png'

class TemaDiecinueveView extends Component {
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
                  Genera emociones.
                 </b>
              </p>
              <p>
                Los seres humanos, somos emocionales. Como vendedores debemos ser capaces
                de generar emociones positivas y negativas a la hora de vender.
              </p>
              <p>
                Generar empatía y una relación de amistad, con el cliente nos da muchas
                mas posibilidades de vender.
              </p>
            </Col>
            <Col xs="4" md="3" className="">
              <img
                src={diecinueve}
                width="650px"
                alt="diecinueve"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiecinueveView
