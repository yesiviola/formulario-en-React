import React from 'react';

function App() {
  return (
    <div className="form-container">
      <h1>formulario contacto</h1>
      <form>
        <div>
          <label htmlFor="nombre">Nombre completo:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
        <label htmlFor="correo">correo Electronico:</label>
        <input type="email" id="correo" name="correo" />
        </div>
        <div>
          <label htmlFor ="asunto">Asunto:</label>
          <input type="text" id="asunto" name="asunto" />
        </div>
        <div>
          <label htmlFor ="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea>
        </div>
      </form>
  </div>

  );
}

export default App;
