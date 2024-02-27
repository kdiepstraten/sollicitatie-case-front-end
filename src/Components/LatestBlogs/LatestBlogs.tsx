import style from "./LatestBlogs.module.css";
import OrangeButton from "../OrangeButton/OrangeButton.tsx";
import building from "../../assets/building.png";
import Card from "../Card/Card.tsx";


function LatestBlogs() {




    return (

        <div className={style.container}>
            <div className={style.container_cards}>


                {/*{allBlogs.map((blog) => (*/}
                {/*    <div className={style.container_cards__item}>*/}
                {/*        <figure>*/}
                {/*            /!*<img src={blog.image} alt="This is a building"/>*!/*/}
                {/*        </figure>*/}
                {/*        <div className={style.container_cards__text}>*/}
                {/*            <h2>blog.header</h2>*/}
                {/*            <p className={style.container_card__text_info}>blog.text</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*))}*/}

                <Card/>
                <div className={style.container_cards__item}>
                    <figure>
                        <img src={building} alt="This is a building"/>
                    </figure>
                    <div className={style.container_cards__text}>
                        <h2>Heading</h2>
                        <p className={style.container_card__text_info}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Exercitationem magnam nam repellendus sunt vero voluptatum!</p>
                    </div>
                </div>
                <div className={style.container_cards__item}>
                    <figure>
                        <img src={building} alt="This is a building"/>
                    </figure>
                    <div className={style.container_cards__text}>
                        <h2>Heading</h2>
                        <p className={style.container_card__text_info}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Exercitationem magnam nam repellendus sunt vero voluptatum!</p>
                    </div>
                </div>
                <div className={style.container_cards__item}>
                    <figure>
                        <img src={building} alt="This is a building"/>
                    </figure>
                    <div className={style.container_cards__text}>
                        <h2>Heading</h2>
                        <p className={style.container_card__text_info}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Exercitationem magnam nam repellendus sunt vero voluptatum!</p>
                    </div>
                </div>
            </div>
            <div className={style.container_btn}>
                <OrangeButton text="Laad meer" type="button"/>
            </div>
        </div>

    )
}

export default LatestBlogs;
