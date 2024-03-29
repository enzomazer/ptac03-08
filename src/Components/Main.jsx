import { useState } from "react";

export default function telefone(){
        const [telefone, setTel] = useState("telefone");
        const [nome, setNome] = useState("nome");
        const[listacontatos, setListacontatos] = useState([]);

        const registrar = (event) => {
                event.preventDefault();
                setListacontatos(
                        [
                                ...listacontatos, {
                                        nomeSalvo: nome,
                                        telefoneSalvo: telefone
                                }
                        ]
                )
                console.table(listacontatos)

        };

        return(
                <main>
                        <form onSubmit={registrar}>
                                <p>nome:</p>
                                <input type="text" name="" id="nome" onChange={(event)=> setNome(event.target.value)}/> 
                                <p>telefone:</p>
                                <input type="tel" name="" id="tele" onChange={(event)=> setTel(event.target.value)}/>
                                <br></br>
                                <button onClick={registrar}>enviar</button>
                        </form>
                        <div id="dados">
                                <label>
                                        <p>{nome}: {telefone}</p>
                                </label>
                        </div>
                </main>
        );
    }