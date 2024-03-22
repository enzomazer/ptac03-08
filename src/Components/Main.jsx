import { useState } from "react";

export default function telefone(){
        const [tel, setTel] = useState("");
    
        return(
                <main>
                        <form>
                                <p>nome:</p>
                                <input type="tel" name="a" id="tele"/> 
                                <p>telefone:</p>
                                <input type="tel" name="" id="nome"/>
                                <br></br>
                                <button onClick={(event)=> setTel(document.getElementById("tele").value +": "+ document.getElementById("nome").value)}>enviar</button>
                        </form>
                        <label>{tel}</label>
                </main>
        );
    }