import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import intro from '../../assets/img/v/intro.png'
import ReactPlayer from 'react-player'

class IntroduccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Introducción</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="4" md="3" lg="3">
              <img
                src={intro}

                alt="intro"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="12" sm="8" md="9" lg="9">
              <p className="cajaRoja text-center pb-3">
                Conocer muy bien a nuestros clientes es clave para las ventas y en esta estrategia la
                aplicación del neuromarketing y de las neuroventas es clave.
                Más del 95% de las decisiones de compra se realizan de forma inconsciente.
                Así que es fundamental conocer en que consiste en neuromarketing.
              </p>
            </Col>
            <Col xs="12" sm="8" md="9" lg="9" className="centrado-fila">
              <div className="cajaGris">
              <ReactPlayer url='https://www.youtube.com/watch?v=9h017FCKWRw' controls />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default IntroduccionView;
