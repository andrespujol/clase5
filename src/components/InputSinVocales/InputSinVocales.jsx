import React from 'react';

const InputSinVocales = () => {
  // función para manejar el evento onKeyDown
  const handleKeyDown = (event) => {
    // accede al valor de la tecla presionada
    const teclaPresionada = event.key;

    // realiza la validación para comprobar si la tecla es una vocal. Usamos tolowercase para normalizar la entrada de teclado y hacer la comparación de manera insensible a mayúsculas y minúsculas
    const esVocal = ['a', 'e', 'i', 'o', 'u'].includes(teclaPresionada.toLowerCase());

    // si la tecla es una vocal, cancela la acción predeterminada del evento
    // y lanza una alerta o un mensaje en la consola
    if (esVocal) {
      event.preventDefault(); // cancela la acción predeterminada del evento
      alert('No se permiten vocales en este campo.');

    }
  };

  return (
    <div>
      {/* input de texto con evento onKeyDown asignado a la función handleKeyDown */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Escribe aquí (sin vocales)"
      />
    </div>
  );
};

export default InputSinVocales;
