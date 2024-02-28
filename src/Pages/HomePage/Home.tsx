import style from "./Home.module.css";
import AddBlog from "../../Components/AddBlog/AddBlog.tsx";
import LatestBlogs from "../../Components/LatestBlogs/LatestBlogs.tsx";


function Home() {

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <AddBlog/>
                <LatestBlogs/>
            </div>
        </div>
    )
}

export default Home;
