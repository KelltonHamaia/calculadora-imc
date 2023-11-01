import { Level } from "@/helpers/imc"

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={`flex-1 text-white rounded flex justify-center items-center flex-col p-5`} style={{backgroundColor: item.color}}>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-black/10">
                <img  
                    width="30"
                    src={item.icon === "up"? `/assets/${item.icon}.png` : `/assets/${item.icon}.png`} 
                />
            </div>
            <div className="mt-1 text-xl font-bold">{item.title}</div>
            {item.yourIMC && 
                <div className="mt-3 mb-12 text-base">Seu IMC é de {item.yourIMC} kg/m²</div>
            }
            <div className="mt-3 text-lg">
                <>IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></>
            </div>
        </div>
    )
}