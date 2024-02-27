import style from "./AddBlog.module.css";
import {useForm} from "react-hook-form";
import OrangeButton from "../OrangeButton/OrangeButton.tsx";

function AddBlog() {
    const {register} = useForm();
    return (
        <>
            <div className={style.container}>
                <form action="/" className={style.form}>
                    <h2>Plaats een blog bericht</h2>
                    <label htmlFor="id">Berichtnaam
                        <input
                            type="text"
                            id="name"
                            placeholder="Geen titel"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Naam is verplicht"
                                }
                            })}/></label>
                    <label htmlFor="categorie">Categorie
                        <input
                            type="text"
                            id="categorie"
                            placeholder="Geen Categorie"
                            {...register("categorie", {
                                required: {
                                    value: true,
                                    message: "Categorie is verplicht"
                                }
                            })}/></label>

                    <label htmlFor="file"> Header afbeelding
                        <input
                            type="file"
                            id="file"
                            {...register("file", {
                                required: {
                                    value: true,
                                    message: "File is verplicht"
                                }
                            })}/></label>


                    <label htmlFor="area">Bericht
                        <textarea
                            id="bericht"
                            {...register("bericht", {
                                required: {
                                    value: true,
                                    message: "Bericht is verplicht"
                                }
                            })}/></label>
                    <div className={style.btn}>
                        <OrangeButton
                            type="submit"
                            text="Bericht aanmaken"/>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddBlog;
