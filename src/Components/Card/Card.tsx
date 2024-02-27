import style from './Card.module.css';
import building from "../../assets/building.png";

function Card(){
    return(
        <>
            <div className={style.container_cards}>
                <figure>
                    <img src={building} alt="This is a building"/>
                </figure>
                <div className={style.container_cards__text}>
                    <h2>Heading</h2>
                    <p className={style.container_card__text_info}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Exercitationem magnam nam repellendus sunt vero voluptatum!</p>
                </div>
            </div>

        </>
    )
}

export default Card;
