import style from "./Style.module.css"

const Pizza = ({fields}) =>{
    return(
        <>
            {fields.map((e, index ) =>(
                <div key={index} className={style.container}>
                    <ul>
                        <li>
                            <img src={e.image} alt={e.nome} />
                        </li>
                    </ul>
                </div>
            ))}
        </>
    )
}
export default Pizza