import { getDay, isHoliday } from "../helpers/date";
import { getCorrectTime } from "../helpers/time";

//Verificar pico y placa
export const picoPlacaVerify = (
  placa: string,
  date: Date,
  time: string
): void => {
  let resp = "";
  const day = getDay(date);
  const holiday = isHoliday(date);
  const correctTime = getCorrectTime(time);

  const lastDigit = placa[placa.length - 1];

  if (
    ((day === "Lunes" && (lastDigit === "1" || lastDigit === "2")) ||
      (day === "Martes" && (lastDigit === "3" || lastDigit === "4")) ||
      (day === "Miércoles" && (lastDigit === "5" || lastDigit === "6")) ||
      (day === "Jueves" && (lastDigit === "7" || lastDigit === "8")) ||
      (day === "Viernes" && (lastDigit === "9" || lastDigit === "0"))) &&
    correctTime
  ) {
    resp = "Este vehículo NO puede circular.";
  } else if (day === "Sábado" || day === "Domingo" || holiday) {
    resp = "Circulan TODOS los vehículos.";
  } else {
    resp = "Este vehículo SI puede circular.";
  }
  alert(resp);
};
