import style from "./LatestBlogs.module.css";
import OrangeButton from "../OrangeButton/OrangeButton.tsx";
import Card from "../Card/Card.tsx";
import {useEffect, useState} from "react";
import axios from "axios";


function LatestBlogs() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;

    useEffect(() => {
        const fetchBlogs = async () => {
            const apiKey: string = 'pj11daaQRz7zUIH56B9Z';
            try {
                setError(false);
                setLoading(true);
                const result = await axios.get('https://frontend-case-api.sbdev.nl/api/posts', {
                    headers: {
                        'token': `${apiKey}`
                    }
                });
                setData(result.data.data)
            } catch (e: string) {
                console.error(e);
                console.error("Error status:", e.response.status);
                console.error("Error data:", e.response.data);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        void fetchBlogs();
    }, []);

// sorting data on Date
    const sortedData = [...data].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
// getting the last 4 blogs
    const latestBlogs = sortedData.slice(0, blogsPerPage * currentPage);

    const loadMoreBlogs = () => {
      const startIndex = blogsPerPage * currentPage;
      const endIndex = startIndex + blogsPerPage;

      if (endIndex < sortedData.length) {
          const nextBlogs = sortedData.slice(startIndex, endIndex);
          setData(nextBlogs);
      }
    }

    return (
        <>
            {loading ?
                <p>Loading...</p>
                :
                <div className={style.container}>
                    <div className={style.container_cards}>
                        {latestBlogs.map((blog) => (
                            <Card
                                blog={blog}
                                key={blog.id}/>
                        ))}

                    </div>
                    <div className={style.container_btn}>
                        <OrangeButton
                            text="Laad meer"
                            type="button"
                            onClick={loadMoreBlogs}/>
                    </div>
                </div>
            }
            {error && <p> Something went wrong. Try again. </p>}
        </>
    )
}

export default LatestBlogs;
