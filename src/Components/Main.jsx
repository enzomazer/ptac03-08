import { useState } from "react";

export default function telefone(){
        const [tel, setTel] = useState("telefone");
        const [nome, setNome] = useState("nome");
        const[listacontatos, setListacontatos] = useState([]);

        const registrar = (event) => {
                event.preventDefault();
        }

        return(
                <main>
                        <form onSubmit={registrar}>
                                <p>nome:</p>
                                <input type="text" name="" id="nome" onChange={(event)=> setNome(event.target.value)}/> 
                                <p>telefone:</p>
                                <input type="tel" name="" id="tele" onChange={(event)=> setTel(event.target.value)}/>
                                <br></br>
                                <button>enviar</button>
                        </form>
                        <div id="dados">
                                <label>
                                        <p>{nome}: {tel}</p>
                                </label>
                        </div>
                </main>
        );
    }