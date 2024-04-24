import Item from "./item"

function List() {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1095}/>
            <Item marca="Mercedes" ano_lancamento={1997}/>
            <Item marca="Fiat"/>
            <Item marca="Chevrolet" ano_lancamento={1999}/>
            <Item/>
        </ul>
        
        </>
    )

}

export default List