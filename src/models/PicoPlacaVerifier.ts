import { getDay, isHoliday } from "../helpers/date";
import { getCorrectTime } from "../helpers/time";

class PicoPlacaVerfier {
  placa: string;
  date: Date;
  time: string;

  constructor(placa: string, date: Date, time: string) {
    this.placa = placa;
    this.date = date;
    this.time = time;
  }

  //Verificar pico y placa

  picoPlacaVerify(): void {
    let resp = "";
    const day = getDay(this.date);
    const holiday = isHoliday(this.date);
    const correctTime = getCorrectTime(this.time);

    const lastDigit = this.placa[this.placa.length - 1];
    console.log(day);
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
  }
}

export default PicoPlacaVerfier;
