import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import quice from '../../assets/img/v/quice.png'

class TemaQuiceView extends Component {
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
                  El miedo vende.
                 </b>
              </p>
              <p>
                Vamos a entenderlo con un ejemplo, todos conocemos la empresa Red Bull, todas sus
                campañas están dirigidas a hacer sentir al consumidor parte de una comunidad, consiguiendo que se sienta integrado.

                </p>
              <p>
                Con vender miedo no queremos decir que tengas que hacer pasar un mal rato al cliente,
                sino que debes detectar su carencia para introducírsela como argumento de venta.

                </p>
            </Col>
            <Col xs="4" md="3" className="">
              <img
                src={quice}
                width="650px"
                alt="quice"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaQuiceView
