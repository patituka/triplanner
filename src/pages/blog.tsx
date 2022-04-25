import React from "react";
import ArticleList from "../components/article-list"
import NavBar from "../components/navbar";

// markup
const Blog = () => {
    return (
        <div className="relative">
            <NavBar />
            <div className="mx-auto max-w-7xl lg:mt-30">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">

                        <ArticleList/>

                    </main>
                </div>
            </div>
        </div>
    )
}

export default Blog
