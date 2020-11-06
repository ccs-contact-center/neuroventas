import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import veintuno from '../../assets/img/v/veintuno.png'

class TemaVeintidosView extends Component {
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
            <Col xs="12" md="5" className="cajaRoja" style={{alignSelf:"stretch", marginRight:"5px"}}>
              <div className=" text-justify">
                <p>
                  <b>
                    1. Conoce a tu cliente para llegar a su mente.
                </b>
                </p>
                <p>
                  Habla como él, muestra empatía, sé su espejo, su reflejo.
              </p>
                <p>
                  <b>2. No expliques tanto y haz sentir más.</b>
                </p>
                <p>
                  No hables mucho y escucha más.
              </p>
                <p>
                  <b> 3. Busca y provoca emociones. </b>
                </p>
                <p>
                  Transmítelas, hazas sentir, muéstralas tu también.
                  No somos palabras somos puras emociones.
              </p>
                <p>
                  4. Busca el valor simbólico de lo que vendas.
              </p>
              </div>


            </Col>
            <Col xs="12" md="5" className="cajaGris" style={{alignSelf:"stretch", marginLeft:"5px"}}>
              <div className=" text-justify">
                <p>
                  <b>
                    5. Llama la atención.
                  </b>
                </p>
                <p>
                  Presenta lo novedoso a partir de lo que ya se conoce.
                  La clave es dar un nuevo enfoque a las cosas para provocar curiosidad.
                  Partir de lo existente para presentar lo nuevo. Esa es la clave:
                <span style={{ textShadow: "1px 1px" }}>
                    partir de lo conocido para llegar a la  novedad
                </span>
                </p>
                <p>
                  <b>
                    6. Detona buen humor, cordialidad, buena vibra, sonrisa.
                  </b>
                </p>
                <p>
                  Uno de los grandes motivos para que un cliente compre es que le
                  hayas caído bien, así de simple.
                </p>
              </div>
              {/* <img
                src={veintuno}
                width="650px"
                alt="veintuno"
                className="img-fluid  animated  bounceInRight delay-0s"
              /> */}
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintidosView
