import style from './Blog.module.css';
import Card from "../../Components/Card/Card.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';

function Blog() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [blog, setBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 8;

    useEffect(() => {
        void fetchBlogs();
    }, []);

    async function fetchBlogs() {
        const apiKey: string = 'pj11daaQRz7zUIH56B9Z';
        try {
            setError(false);
            setLoading(true);
            const result = await axios.get(`https://frontend-case-api.sbdev.nl/api/posts?page=${currentPage + 1}&perPage=10&sortBy=title&sortDirection=asc&searchPhrase=test ber&categoryId=1`, {
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

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    }
    // console.log(blog);
    const startIndex = currentPage * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = blog.slice(startIndex, endIndex);

    return (
        <>
            {loading ? <p>Loading...</p>
                :
                <div className={style.container}>

                    {currentBlogs.map((blog) => (
                        <Card
                            blog={blog}
                            id={blog.id}/>
                    ))}
                    {blog.length > 0 && (
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={Math.ceil(blog.length / blogsPerPage)}
                            previousLabel="< Previous"
                            containerClassName={style.pagination}
                            activeClassName={style.active}
                            />
                        )}
                </div>
            }
            {error && <p> Something went wrong. Try again. </p>}

        </>
    )
}

export default Blog;
