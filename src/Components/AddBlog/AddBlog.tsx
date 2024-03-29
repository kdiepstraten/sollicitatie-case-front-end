import style from "./AddBlog.module.css";
import {useForm} from "react-hook-form";
import OrangeButton from "../OrangeButton/OrangeButton.tsx";
import axios from "axios";
import {useState} from "react";

function AddBlog() {
    const {register, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function onSubmit(data) {
        const apiKey: string = 'pj11daaQRz7zUIH56B9Z';
        try {
            setError(false);
            setLoading(true);

            const formData = new FormData();
            formData.append('image', data.image[0]);
            formData.append('title', data.title);
            formData.append('category_id', data.category_id);
            formData.append('content', data.content);

            const result = await axios.post("https://frontend-case-api.sbdev.nl/api/posts", formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                    'token': `${apiKey}`
                }
            });
        } catch (e: string) {
            console.error(e);
            // console.error("Error status:", e.response.status);
            // console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            {
                loading ? <p>Loading...</p>
                    :

                    <div className={style.container}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={style.form}>
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
                                    id="category_id"
                                    {...register("category_id", {
                                        required: {
                                            value: true,
                                            message: "Categorie is verplicht"
                                        }
                                    })}>
                                    <option className={style.form_option} value="">Geen categorie</option>
                                    <option value="1">Tech</option>
                                    <option value="2">Nieuws</option>
                                    <option value="3">Sports</option>
                                    <option value="4">Lokaal</option>
                                </select></label>

                            <label htmlFor="image"> Header afbeelding
                                <input
                                    type="file"
                                    id="image"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "File is verplicht"
                                        }
                                    })}/></label>

                            <label htmlFor="content">Bericht
                                <textarea
                                    id="content"
                                    {...register("content", {
                                        required: {
                                            value: true,
                                            message: "Bericht is verplicht"
                                        }
                                    })}/></label>

                            <OrangeButton
                                text="Bericht aanmaken"
                                type="submit"
                            />

                        </form>
                    </div>
            }
            {error && <p> Something went wrong. Try again. </p>}
        </>
    )
}

export default AddBlog;
