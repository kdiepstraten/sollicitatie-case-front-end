import style from "./Home.module.css";
import AddBlog from "../../Components/AddBlog/AddBlog.tsx";
import LatestBlogs from "../../Components/LatestBlogs/LatestBlogs.tsx";


function Home() {

    return (
        <body className={style.container}>
        <div className={style.wrapper}>
            <AddBlog/>
            <LatestBlogs/>
        </div>
        </body>
    )
}

export default Home;
