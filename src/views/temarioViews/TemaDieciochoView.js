import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import diecisiete from '../../assets/img/v/diecisiete.png'

class TemaDieciochoView extends Component {
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
                  Véndele al cerebro reptil.

                 </b>
              </p>
              <p>
                El cerebro reptil, es el cerebro de supervivencia. La especie humana
                sobrevivió gracias a ese cerebro. Por eso los procesos de compra se dan
                en ese cerebro. Te invito a que vendas al cerebro reptil que es el que
                predomina en las decisiones.

              </p>
              <p>
                Por ejemplo: ¿Por qué una persona compra una casa?

              </p>
              <p>
                El cerebro analítico, va a dar una serie de explicaciones de porque
                compro una casa. Pero, la verdadera razón de compra es de supervivencia,
                la mente se quiere asegurar de que ante cualquier acontecimiento, tiene un
                lugar donde puede estar a salvo.

              </p>
            </Col>
            {/* <Col xs="4" md="3" className="">
              <img
                src={diecisiete}
                width="650px"
                alt="diecisiete"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col> */}
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciochoView
