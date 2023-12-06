import { createContext, useState } from "react";
import react, { ReactNode } from "react";

export type Valores = {
    receita: number,
    despesa: number,
    balanco: number
}

export type Infos = {
    data: string;
    categoria: string;
    titulo: string;
    valor: number;
}

interface TypeChildrenNode {
    children: ReactNode;
}

interface Props {
    valores: Valores;
    infos: Infos[];
    modificaInfos: (data: string, categoria: string, titulo: string, valor: number) => void;
}

export const InfosContext = createContext({} as Props);

export function InfosProvider({children}: TypeChildrenNode) {

    const [valores, setValores] = useState<Valores>({
        receita: 0,
        despesa: 0,
        balanco: 0
    });

    const [infos, setInfos] = useState<Infos[]>([]);

    function modificaValores(categoria: string, valor: number) {
        let categoriasPositivas = ['Salário'];
        let categoriasNegativas = ['Aluguel', 'Alimentação'];

        let rec: number;
        let des: number;

        if (categoriasPositivas.includes(categoria)){
            rec = valores.receita + valor;
            des = valores.despesa;
        } else{
            rec = valores.receita;
            des = valores.despesa + valor;
        }

        let obj = {
            receita: rec,
            despesa: des,
            balanco: rec - des
        }
        
        setValores(obj);        
    }

    function modificaInfos(data: string, categoria: string, titulo: string, valor: number){
        let obj = {
            data,
            categoria,
            titulo,
            valor
        }

        modificaValores(categoria, valor);
        setInfos([...infos, obj]); // Voltar aqui qualquer coisa
    }


    return <InfosContext.Provider value={{valores, infos, modificaInfos}}>{children}</InfosContext.Provider>
}