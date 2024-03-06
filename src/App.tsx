import { useState } from "react";
import CustomInput from "./components/CustomInput";
import "./styles/app_style.css";
import { picoPlacaVerify } from "./utils/pico-placa";
import { validatePlaca, validateTime } from "./validators/validations";
function App() {

  //Inicializar datos requeridos
  const [placa, setPlaca] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //Gestion de pico-placa
  const handlePicoPlaca = (e: any) => {
    e.preventDefault();

    if (placa == "" || date == "" || time == "") {
      alert("DEBE COMPLETAR TODOS LOS CAMPOS.");
    } else if (!validatePlaca(placa)) {
      alert("PLACA INVÁLIDA.");
    } else if (!validateTime(time)) {
      alert("HORA INVÁLIDA.");
    } else {
      picoPlacaVerify(placa.toUpperCase(), new Date(date), time);
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form action="" onSubmit={handlePicoPlaca}>
                <CustomInput
                  id="floatingPlaca"
                  type="text"
                  text="Placa"
                  onChange={(e: any) => setPlaca(e.target.value)}
                />
                <CustomInput
                  id="floatingDate"
                  type="date"
                  text="Fecha"
                  onChange={(e: any) => setDate(e.target.value)}
                />
                <CustomInput
                  id="floatingTime"
                  type="text"
                  text="Hora (06:00)"
                  onChange={(e: any) => setTime(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;