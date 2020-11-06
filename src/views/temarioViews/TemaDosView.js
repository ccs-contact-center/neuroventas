import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

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
          <Row >
            <Col xs="12" className="centrado-fila">
              <div className="cajaRoja" style={{ width: "320px" }}>
                <h1>
                  <b >
                    ¿QUE VENDEN LAS EMPRESAS EN REALIDAD?
                  </b>
                </h1>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
