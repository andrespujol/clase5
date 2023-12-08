import React, { useState } from 'react';

const MiComponente = () => {
  // creamos un estado usando useState inicializado como un string vacío
  const [valorInput, setValorInput] = useState('');

// Consigna: mostrar el valor que ponemos una vez que le damos enviar
// definimos el estado en false
const [mostrarValor, setMostrarValor] = useState(false);


  // Creamos la función handleOnChange que se ejecutará cuando cambie el input
  const handleOnChange = (event) => {
    // accedemos al valor del input a través del objeto event
    const nuevoValor = event.target.value;

    // actualizamos el estado con el nuevo valor del input
    setValorInput(nuevoValor);
  };
  // creamos la función y seteamos el estado a true
  const handleEnviar = () => {
    setMostrarValor(true);
  };

  return (
    <div>
      {/* creamos el input y asignamos la función handleOnChange al evento onChange */}
      <input
        type="text"
        value={valorInput} // el valor del input proviene del estado
        onChange={handleOnChange} // la función handleOnChange se ejecutará cuando el input cambie
        
        // extra:
        disabled={mostrarValor} // deshabilita el input cuando se muestra el valor

      />
    {/*Mostramos el valor actual del input */}
      <p>El valor del input es: {valorInput}</p>

      {/* extra: Agregamos un botón de enviar que, al hacer click, llama a la función handleEnviar para cambiar el estado mostrarValor a true. También deshabilitamos tanto el botón como el input cuando mostrarValor es true. */}
      <button onClick={handleEnviar} disabled={mostrarValor}>
        Enviar
      </button>
      {/* extra: mostramos el valor actual del input haciendo una condicional si mostrarValor es true*/}
      {mostrarValor && <p>El valor del input es: {valorInput}</p>}
    </div>
  );
};

export default MiComponente;
