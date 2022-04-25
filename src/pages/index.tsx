import React from "react";
import Form from "../components/form";
import NavBar from "../components/navbar";

// markup
const IndexPage = () => {
  return (
    <div className="relative bg-cover	 bg-[url('./images/banner-md.jpg')]">
      <NavBar />
      <div className="mx-auto max-w-7xl lg:mt-30">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">

            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block py-6 text-white xl:py-8">Votre voyage commence ici</span>
              </h1>
              <div className="px-4 py-8 bg-black bg-opacity-50">
                <Form />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
