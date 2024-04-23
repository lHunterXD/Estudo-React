import style from './frase.module.css'


function Frase (){
    return (
        <div className={style.fraseConteiner}>
            <p className={style.fraseContent}>Este e um componente com uma frase!</p>
        </div>
    )
}

export default Frase