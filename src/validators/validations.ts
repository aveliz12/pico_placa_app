//Validar número de placa
export const validatePlaca = (placa: string): boolean => {
  const regexPlaca = /^[A-Z]{3}-\d{3,4}$/;

  return regexPlaca.test(placa);
};

//Validar hora ingresada
export const validateTime = (time: string): boolean => {
  const regexTime = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
  return regexTime.test(time);
};
