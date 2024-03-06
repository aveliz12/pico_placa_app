import { validateTime } from "../validators/validations";

//Verificar si la hora ingresada está dentro del rango establecido
export const getCorrectTime = (time: string): boolean => {
  if (!validateTime(time)) {
    return false;
  }

  if (
    (time >= "06:00" && time <= "09:30") ||
    (time >= "16:00" && time <= "21:00")
  ) {
    return true;
  } else {
    return false;
  }
};
