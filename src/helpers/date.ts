//Obtener dias de la semana a traves de la fecha
export const getDay = (date: Date): string => {
  const daysWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const dayWeek = daysWeek[date.getDay()];
  return dayWeek;
};

export const isHoliday = (date: Date): boolean => {
  const holidays = [
    "01/01",
    "02/12",
    "02/13",
    "03/29",
    "05/03",
    "05/24",
    "08/09",
    "10/11",
    "11/02",
    "11/04",
    "12/25",
  ];

  const dateFormat = `${date.getMonth() + 1}/${date.getDate()}`;

  return holidays.includes(dateFormat);
};
