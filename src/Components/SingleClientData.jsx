import React, { Component } from "react";
import "./SingleTracking.css";

//CSS
import { Row, Col } from "react-bootstrap";

export default class SingleClientData extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      client_name: "",
      price: ""
    };
  }

  render() {
    return (
      <div>
        <div>
          {/* Titulo del bloque: numero de orden */}
          <h3>Información número de orden: 123456789</h3>
          <br></br>

          <Row>
            {/* Datos de persona que compró */}
            <Col xs={12} md={6}>
              <b>Datos de Envío</b>
              <p>
                Nombre: <span>Carolina Herrera</span>
              </p>
              <p>
                Email: <span>correocliente@gmail.com</span>
              </p>
              <p>
                Dirección de Despacho:{" "}
                <span>
                  Mariano Sánchez Fontecilla 310, Santiago, Las Condes, Región
                  Metropolitana
                </span>
              </p>
              <p>
                Nombre del receptor: <span>Carolina Herrera</span>
              </p>
              <p>
                Costo de envío: <span>$10.990</span>
              </p>
              <p>
                Observaciones de envío: <span>-----</span>
              </p>
            </Col>

            {/* Datos de despacho */}
            <Col xs={12} md={6}>
              <b>Información de tu orden</b>
              <p>
                {" "}
                Fecha de recepción:{" "}
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2020-01-10"
                  min="2020-01-01"
                  max="2020-12-31"
                ></input>
              </p>
              <p>
                Hora despacho: <span>9 a 22 horas</span>
              </p>
              <p>
                Medio de Pago: <span>Tarjeta bancaria</span>
              </p>
              <p>
                Nº de Cuotas: <span>6</span>
              </p>
              <p>
                Fecha de Pago: <span>28/12/2019</span>
              </p>
              <p>
                Total compra: <span>$129.990</span>
              </p>
              <p>
                Boleta:{" "}
                <span>
                  <a href="https://drive.google.com/file/d/1W4aIjhdHCGufua_TnfbltFjiXSZhwu69/view?usp=sharing">
                    Ver Boleta{" "}
                  </a>
                </span>
              </p>
            </Col>
          </Row>

          <br></br>
        </div>
      </div>
    );
  }
}
