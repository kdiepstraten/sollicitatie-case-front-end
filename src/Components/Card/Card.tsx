import style from './Card.module.css';

function Card({blog, id}){

    return(
        <>
            <div className={style.container_cards} key={id}>
                <figure>
                    <img src={blog.img_url} alt={blog.title}/>
                </figure>
                <div className={style.container_cards__text}>
                    <h2>{blog.title}</h2>
                    <p className={style.container_card__text_info}>{blog.content}</p>
                </div>
            </div>

        </>
    )
}

export default Card;
