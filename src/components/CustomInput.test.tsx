import { render, screen } from "@testing-library/react";
import CustomInput from "./CustomInput";

//Agrupar distintos test
describe("CustomInput", () => {
  //Hook para ejecutar antes de cada test
  beforeEach(() => {
    render(<CustomInput id="floatingText" type="text" text="Título" />);
  });

  //Test Unitarios
  test("should show custom input param text", () => {
    //Comprobar si existen elementos (screen)
    expect(screen.getByText("Título")).toBeDefined();
  });
  test("should show input element", async () => {
    const input = screen.queryByText("input") as HTMLInputElement;

    if (input) {
      //Prueba de type
      expect(input.type).toBe("text");

      //Prueba de id
      expect(input.id).toBe("floatingText");
    }
  });
});
