import style from "./AddBlog.module.css";
import {useForm} from "react-hook-form";
import OrangeButton from "../OrangeButton/OrangeButton.tsx";
import axios from "axios";
import {useState} from "react";

function AddBlog() {
    const {register} = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const apiKey: string = 'pj11daaQRz7zUIH56B9Z';
    async function onSubmit(data){
        try {
            setError(false);
            setLoading(true);
            const result = await axios.post("https://frontend-case-api.sbdev.nl/api/posts", data, {
                headers: {
                    'token' : `${apiKey}`
                }
            });
            console.log(result);
        } catch (e: string) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }

    }


    return (
        <>
            <div className={style.container}>
                <form onSubmit={() => handleSubmit(onSubmit)} className={style.form}>
                    <h2>Plaats een blog bericht</h2>
                    <label htmlFor="title">Berichtnaam
                        <input
                            type="text"
                            id="title"
                            placeholder="Geen titel"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Naam is verplicht"
                                }
                            })}/></label>

                    <label htmlFor="category">Categorie
                        <select
                            id="category"
                            {...register("category_id")}>
                            <option className={style.form_option} value="" >Geen categorie</option>
                            <option value="1">Tech</option>
                            <option value="2">Nieuws</option>
                            <option value="3">Sports</option>
                            <option value="4">Lokaal</option>
                        </select></label>

                    <label htmlFor="file"> Header afbeelding
                        <input
                            type="file"
                            id="file"
                            {...register("file", )}/></label>

                    <label htmlFor="content">Bericht
                        <textarea
                            id="content"
                            {...register("content", {
                                required: {
                                    value: true,
                                    message: "Bericht is verplicht"
                                }
                            })}/></label>

                    <div className={style.btn}>
                        <OrangeButton
                            type='submit'
                            text="Bericht aanmaken"/>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddBlog;
