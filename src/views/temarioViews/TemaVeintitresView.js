import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactPlayer from 'react-player'

class TemaVeintitresView extends Component {
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
                <b>CLAVES QUE NO DEBES OLVIDAR</b>
              </h3>
            </Col>

          </Row>
          <Row className="centrado-fila">
            <Col xs="12" md="12" className="">
              <p>
                Veamos algunos consejos de Jürgen Klarić, considerado el divulgador de neurociencias
                aplicadas a la vida, felicidad y a los negocios más leídos en el mundo.
              </p>
            </Col>
            <Col xs="12" md="12" className="centrado-fila">
              <div className="cajaGris">
                <ReactPlayer url='https://www.youtube.com/watch?v=9h017FCKWRw' controls />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintitresView
