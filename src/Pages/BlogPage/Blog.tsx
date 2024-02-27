import style from './Blog.module.css';
import Card from "../../Components/Card/Card.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

function Blog() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        void fetchBlogs();
    }, []);
    async function fetchBlogs(){
        const apiKey: string = 'pj11daaQRz7zUIH56B9Z';
        try {
            setError(false);
            setLoading(true);
            const result = await axios.get('https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=10&sortBy=title&sortDirection=asc&searchPhrase=test ber&categoryId=1', {
                headers: {
                    'token': `${apiKey}`
                }
            });
            setBlog(result.data.data)
        } catch (e: string) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    // console.log(blog);

    return (
        <>

            <div className={style.container}>

                {blog.map((blog) => (
                    <Card
                        blog={blog}
                        id={blog.id}/>
                ))}
            </div>
        </>
    )
}

export default Blog;
