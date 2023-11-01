"use client"
import { useState } from "react";
import { levels, calculateIMC, Level } from "@/helpers/imc";
import { GridItem } from "@/components/GridItem";

const Page = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeigthField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level|null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
    } else {
      alert("Digite todos os campos.")
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeigthField(0);
  }

  return (
    <div className='container h-screen mx-auto'>
      <header className="w-full px-10 md:px-0">
        <div>
          <img src="/assets/powered.png" alt="logo" className="h-10 my-10"/>
        </div>
      </header>
      <main className="flex flex-col gap-20 px-10 mx-auto md:flex-row md:p-0 pb-10">
        <div className="flex-1 left-side">
          <h1 className="mb-5 text-xl text-gray-800 md:text-4xl">Calcule seu IMC</h1>
          <p className="mb-10 text-base text-gray-700">
            IMC é a sigla para índice de massa corpórea, 
            parâmetro adotado pela organização mundial da saúde 
            para calcular o peso ideal de cada pessoa.
          </p>

          <input 
            type="number"
            className="w-full px-3 py-1 mb-10 text-sm bg-transparent border-b outline-none border-fuchsia-600 disabled:opacity-50"
            placeholder="Digite sua altura. Ex 1.5(em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={e => setHeightField(parseFloat(e.target.value))} 
            disabled={toShow ? true : false}
          />

          <input 
            type="number"
            className="w-full px-3 py-1 mb-10 text-sm bg-transparent border-b outline-none border-fuchsia-600 disabled:opacity-50"
            placeholder="Digite seu peso. Ex 59.5(em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={e => setWeigthField(parseFloat(e.target.value))} 
            disabled={toShow ? true : false}
          />
          <button 
            className="w-full py-4 mt-10 text-lg text-white transition border-none rounded-md cursor-pointer bg-sky-500 hover:opacity-80 disabled:opacity-50"
            disabled={toShow ? true : false}
            onClick={handleCalculateButton}>Calcular
          </button>
        </div>
        <div className="flex flex-1 right-side">
          {!toShow && 
            <div className="grid flex-1 gap-5 md:grid-cols-2 md:gap-5">
            {levels.map((item, key) => (
             <GridItem key={key} item={item}/>
            ))}
          </div>
          }

          {toShow &&
            <div className="flex flex-1 r-big">
              <div 
                onClick={handleBackButton}
                className="r-arrow absolute bg-sky-400 w-16 h-16 md:rounded-full rounded-br-md flex items-center justify-center cursor-pointer md:mt-36 hover:bg-sky-700 transition-all">
                <img src={`/assets/leftarrow.png`} width="25"/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }

        </div>
      </main>
    </div>
  );

} 

export default Page;