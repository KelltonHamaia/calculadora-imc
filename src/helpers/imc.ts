export type Level = {
    title: string,
    color: string,
    icon: "up"|"down",
    imc: number[],
    yourIMC?: number
}

export const levels:Level[] = [
    { title: "Magreza", color: "#52525B", icon: "down", imc: [0.00, 18.59] },
    { title: "Normal", color: "#059669", icon: "up", imc: [18.60, 24.99] },
    { title: "Sobrepeso", color: "#CA8A04", icon: "down", imc: [25.01, 30.00] },
    { title: "Obesidade", color: "#DC2626", icon: "down", imc: [30.01, 99] }
]

export const calculateIMC = (height: number, weight: number) => {
    let imc = weight / (height * height);
    // imc = parseFloat(imc.toFixed(1));

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            let levelCopy = {...levels[i]};
            levelCopy.yourIMC = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;

}