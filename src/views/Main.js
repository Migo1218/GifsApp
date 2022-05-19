import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { setFav } from "../store/slices/favoritosSlice";


const Main = () => {
  const [gifs, setGifs] = useState([]);
  console.log(gifs);
  const dispatch = useDispatch();


  const RedirigirFavoritos = useNavigate();

  const guardar = (datos) => {
    console.log(datos.id)
    const favoritonuevo = {
        id: datos.id,
        nombre: datos.title,
        imagen: datos.images.downsized_medium.url
      };
    //   const favoritoArr = []
    //   favoritoArr.push(favoritonuevo)

    //   localStorage.setItem( "favoritos", JSON.stringify(...favoritoArr));
      
    dispatch(setFav(favoritonuevo));
      
  }

  const formik = useFormik({
    initialValues: {
      busqueda: "",
    },

    onSubmit: (data) => {
      console.log(data);
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=w9XjMRAcNWtcFxYyQeCy0MeCntdp00LA&q=${data.busqueda}&limit=25&offset=0&rating=g&lang=en`
        )
        .then((datos) => {
          setGifs(datos.data.data);
        });
    },
  });

  return (
    <div>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 cursor-pointer">
                  <img
                    className="h-8 w-8"
                    src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1652973477/PruebaGSE/dove-g35aec1cc9_640_i1kgc0.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <span
                    onClick={() => RedirigirFavoritos("/favoritos")}
                    className="text-white material-symbols-outlined hover:text-orange-500 cursor-pointer"
                  >
                    star
                  </span>
                </div>
              </div>
              {/* MOBILE MENÚ */}
              <div className="-mr-2 flex md:hidden"></div>
            </div>
          </div>

          {/* MOBILE MENÚ */}

          <div className="md:hidden" id="mobile-menu">
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <button
                  type="button"
                  className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span
                    onClick={() => RedirigirFavoritos("/favoritos")}
                    className="text-white material-symbols-outlined hover:text-orange-500 cursor-pointer"
                  >
                    star
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-full">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 text-center mt-10">
                  Librería de gifs
                </h2>
                <div class="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <div class="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="busqueda"
                          className="form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required=""
                          value={formik.values.busqueda}
                          onChange={formik.handleChange}
                        />
                        <label
                          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Buscar
                        </label>
                      </div>

                      <div className="">
                        <button
                          type="submit"
                          class="w-full text-white bg-gray-800 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Buscar
                        </button>
                      </div>
                    </div>
                  </form>

                  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-3 xl:gap-x-8">
                    {gifs &&
                      gifs.map((gif) => (
                        <div key={gif.id} class="mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-3 xl:gap-x-8">
                          <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                              class="w-full"
                              src={gif.images.downsized_medium.url}
                              alt="Sunset in the mountains"
                            />
                            <div class="px-6 py-4">
                              <div class="font-bold text-xl mb-2">
                                {gif.title}
                              </div>
                              {/* <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p> */}
                            </div>
                            <div class="px-6 pt-4 pb-2">
                              <span onClick={()=> guardar(gif)} class="cursor-pointer hover:bg-orange-500 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Guardar
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
