import { useState } from 'react'
import './Formulario.css'

function Formulario() {

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setDatos(
      {
        ...datos,
        [e.target.id]: e.target.value
      }
    )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);

  }

  return (
    <div>
      <form onSubmit={handleSubmit} class="formulario">
        <h1>Formulario</h1>
        <div>
          <h2>Nombre</h2>
          <input id="nombre" type="text" value={datos.nombre} onChange={handleChange} />
        </div>
        <div>
          <h2>Email</h2>
          <input id="email" type="text" value={datos.email} onChange={handleChange} />
        </div>
        <div>
          <h2>Mensaje</h2>
          <textarea id="mensaje" value={datos.mensaje} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Enviar</button>

        </div>
      </form>
    </div>
  );
};

export default Formulario;
