import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
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
                <b>¿DE QUÉ SE TRATA LAS NEUROVENTAS Y NEUROMARKETING?</b>
              </h3>
            </Col>
            <Col xs="12" className="">
              <div className="cajaRoja text-justify">
                <p>
                  Podemos decir que las <b>Neuroventas</b> y el <b>Neuromarketing</b>,
                van directamente a lo que más importa, estudiar el cerebro
                del consumidor con la toman de decisiones.
              </p>
                <p>
                  A través del <b>Neuromarketing</b> se realizan campañas que seducen emociones,
                que llegan al cerebro para cambiar o aumentar el gusto por un producto o servicio.
              </p>
                <p>
                  <b>Neurociencia</b><br />
                De hecho, la neurociencia juega un papel vital, porque el marketing debe conocer
                las emociones derivadas de los hemisferios cerebrales y luego generar estimulación.
              </p>
                <p>
                  Ya sabes, el propósito del neuromarketing es saber cómo piensa el consumidor,
                  cómo funciona la mente humana. Ver qué piensa de acuerdo con sus necesidades y
                  no lo que dice o lo que pide.

              </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
