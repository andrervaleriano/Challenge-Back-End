import { useState } from 'react';

function Home() {
    return (
    <div>
        <h2>Meu amor, Maria Miguelina Pereira Avelino Valeriano</h2>
        <h1>Te amo Muito!</h1>
        <div>contador abaixo você adiciona mais amor </div>
        <Contador />
    </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function AdicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={AdicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home