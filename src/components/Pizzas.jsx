import CreatePizzas from  './CreatePizzas'
import calabresa from '../Images/calabresa.jpg'
import frango from '../Images/frango.jpg'
import mussarela from '../Images/mussarela.jpg'
import portuguesa from '../Images/portuguesa.jpg'
import style from '../components/Style.module.css'


const PizzasImages = () =>{
    const elements = [
        {image: calabresa, nome: 'calabresa'},
        {image: frango, nome: 'frango'},
        {image: mussarela, nome: 'mussarela'},
        {image: portuguesa, nome: 'portuguesa'},
    ]
    
    return(
        <>  
            <div className={style.div}>
            <h1>Pizzas ITB</h1>
            </div>
            <CreatePizzas fields={elements}/>
        </>
    )
}
export default PizzasImages