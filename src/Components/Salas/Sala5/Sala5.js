import "./Sala5.css"
import React,{ useState,useEffect } from 'react';

export default function Sala1 (){


    const [ingressodisp, SetIngressodips] =  useState(100)
    const [ingressosvend, SetIngressosvend] = useState(0)
    const [faturamento, SetFaturamento] = useState(0)
    const [programacao, SetProgramacao] = useState("Avatar ")
    const [duracao, SetDuracao] = useState("150 Minutos")
    const [capacidade, SetCapacidade] = useState(100)


    const ingressos = () =>{

        SetIngressodips(ingressodisp - 1)
        SetIngressosvend(ingressosvend + 1)
        SetFaturamento(ingressosvend * 10)
    }
    



    return(
        
        <div>

            <div className="header-sala1">
                    <h1>WS CINEFILMEs</h1>
                </div>

            <div className="container-sala1">

                <div className="infos-sala1">

                    <h1 className="texto_nome-sala1">Sala 5 </h1>

                    
                    <p className="texto_infos">Programação : {programacao}</p>
                    <p className="texto_infos">Duração Do Filme : {duracao}</p>
                    {/* <p>faturamento Sala : {faturamento}</p> */}
                    <p className="texto_infos">Capacidade : {capacidade}</p>
                    <p className="texto_infos">Ingressos Disponiveis : {ingressodisp}</p>
                    <p className="texto_infos">Ingressos vendidos : {ingressosvend}</p>
                    
                    <button  className="botao-sala1" onClick={ingressos}>Comprar Ingresso</button>
                    
                </div>
            </div>
        </div>
    )
}