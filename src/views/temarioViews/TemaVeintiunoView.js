import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import veintuno from '../../assets/img/v/veintuno.png'

class TemaVeintiunoView extends Component {
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
                <b></b>
              </h3>
            </Col>

          </Row>
          <Row className="centrado-fila">
            {/* <Col xs="12" md="9" className="">
              <p>
                <b>
               
                 </b>
              </p>
              <p>
                
              </p>
             
            </Col> */}
            <Col xs="12" md="12" className="centrado-fila">
              <img
                src={veintuno}
                width="650px"
                alt="veintuno"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintiunoView
