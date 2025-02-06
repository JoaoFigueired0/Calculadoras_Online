import Input from "./components/inputs.jsx";
import Button from "./components/button.jsx";
import backImg from "./components/backgroundIMG.jsx";
import { useState } from "react";
import tabelaImc from "./assets/tabela_imc.jpg";
import "./App.css";


function App() {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [showImage, setShowImage] = useState(false);

  function Calcular() {
    const weight = parseFloat(numOne.replace(",", "."));
    const height = parseFloat(numTwo.replace(",", "."));

    if (isNaN(weight) || isNaN(height)) {
      console.log("Por favor, insira valores válidos.");
      alert("Por favor, insira valores válidos.");
      return;
    }

    const resultado = weight / (height * height);
    alert(`Seu IMC é: ${resultado.toFixed(2)}`);
    console.log(`Resultado: ${resultado}`);

    setShowImage(true);
    return resultado;
  }

  return (
    <div>
      <backImg />
      <div className="h-screen flex items-center justify-center flex-col">
        <main className="flex h-100 items-center justify-start py-[30px] px-20">
          <div className="flex h-[380px] w-[470px] flex-col items-center justify-center bg-[#D7D5D5] px-10 gap-[25px] rounded-md">
            <p className="flex items-center justify-center font-bold text-lg text-[25px] w-full">Calculadora de IMC</p>
            <Input
              label="Qual o seu peso?"
              value={numOne}
              onChange={(e) => setNumOne(e.target.value)}
              placeholder="Coloque seu peso em Kg"
            />
            <Input
              label="Qual a sua altura?"
              value={numTwo}
              onChange={(e) => setNumTwo(e.target.value)}
              placeholder="Coloque sua altura em metros"
            />
            <Button nome="Calcular" onClick={Calcular} />
          </div>
        </main>

        <div className="h-1000">
          {showImage && (
            <img src={tabelaImc} alt="Tabela IMC" className="mt-4" />
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
