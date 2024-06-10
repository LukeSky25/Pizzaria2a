const Inicio = () => {

    return (
        <>
            <h2>Página de Início</h2>
            <p>Aula de ReactJs</p>
            <input type="text" id="texto" />
            <input type="button" id="botao" value="Clique Aqui" onClick={() => alert('Olá Mundo')} />
        </>
    )
}
export default Inicio