import PicoPlacaVerfier from "./PicoPlacaVerifier";

describe("PicoPlacaVerifier", () => {
  test("should show if the car can circulation", () => {
    const testCasesPicoPlaca = [
      {
        placa: "ABC-1238",
        date: new Date("2024-03-07T17:00:00Z"),
        time: "11:00",
      },
      {
        placa: "ABC-1471",
        date: new Date("2024-01-02T17:00:00Z"),
        time: "12:00",
      },
      {
        placa: "ABC-2018",
        date: new Date("2024-03-07T17:00:00Z"),
        time: "06:10",
      },
    ];

    testCasesPicoPlaca.forEach((values) => {
      const { placa, date, time } = values;
      const verifier = new PicoPlacaVerfier(placa, date, time);
      //Espiar la funcion window.alert y proporcionar una implementación vacía
      const alert = vi.spyOn(window, "alert").mockImplementation(() => {});
      verifier.picoPlacaVerify();

      //Verificar si el resultado fue llamado con el mensaje correcto
      expect(alert).toHaveBeenCalledWith(
        expect.stringContaining("Este vehículo")
      );
    });
  });
});
