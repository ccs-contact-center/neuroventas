import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import diecisiete from '../../assets/img/v/diecisiete.png'

class TemaDiecisieteView extends Component {
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
                  Provoca que tu cliente pregunte.
                 </b>
              </p>
              <p>
                Si no hace preguntas incita a que las haga. Las preguntas estimulan a tu cerebro y le hacen mantener el interés.
              </p>
            </Col>
            <Col xs="4" md="3" className="">
              <img
                src={diecisiete}
                width="650px"
                alt="diecisiete"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiecisieteView
