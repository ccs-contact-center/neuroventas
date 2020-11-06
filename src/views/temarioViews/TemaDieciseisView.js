import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import dieciseis from '../../assets/img/v/dieciseis.png'

class TemaDieciseisView extends Component {
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
                  El género influye.
                 </b>
              </p>
              <p>
                El cerebro femenino procesa mucha más información y es más comunicador que el masculino.
                Si quieres vender a un hombre debes reducir los argumentos de venta, mientras que si vendes
                a una mujer debes aumentarlos.
              </p>
              <p>
                Esto ha sido demostrado a partir de estudios científicos, por lo que parece
                que se trata de una cuestión biológica.
              </p>
            </Col>
            <Col xs="4" md="3" className="">
              <img
                src={dieciseis}
                width="650px"
                alt="dieciseis"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciseisView
