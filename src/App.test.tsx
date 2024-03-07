import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should show title", () => {
    expect(screen.getByText("Pico y Placa")).toBeDefined();
  });

  test("should show button", () => {
    expect(screen.getByText("ENVIAR")).toBeDefined();
  });

  test("should click the button and submit", () => {
    //Simular entrada de datos
    const placaInput = screen.getByLabelText("Placa");
    const dateInput = screen.getByLabelText("Fecha");
    const timeInput = screen.getByLabelText("Hora (06:00)");
    //Dar click en un elemento o disparar un evento
    fireEvent.change(placaInput, { target: { value: "ABC-1234" } });
    fireEvent.change(dateInput, { target: { value: "2024-03-05" } });
    fireEvent.change(timeInput, { target: { value: "06:00" } });

    //Envio formulario
    const submitButton = screen.getByText("ENVIAR");
    fireEvent.click(submitButton);
  });
});
