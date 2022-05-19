import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItemFav } from '../store/slices/favoritosSlice';

const Favoritos = () => {
  const RedirigirFavoritos = useNavigate();
  const dispatch = useDispatch();


  const RedirigirMain = useNavigate();
  const favoritosEle = useSelector(
    (state) => state.favoritos.favoritos
  );
  console.log(favoritosEle)

  const deleteItem = (id) => {
    const producto = JSON.parse(localStorage.getItem("favoritos"));
        const favoritosEli = producto.filter(producto => producto.id !== id);
    
        // localStorage.setItem('productosadd',JSON.stringify(nuevosProductos));
    dispatch(deleteItemFav(favoritosEli))
   
  }

  return (
    <div>
         <div>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div onClick={()=>RedirigirMain("/")} className="cursor-pointer flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1652973477/PruebaGSE/dove-g35aec1cc9_640_i1kgc0.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <span onClick={() =>RedirigirFavoritos("/favoritos")} className="text-white material-symbols-outlined hover:text-orange-500 cursor-pointer">
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
                  <span onClick={() =>RedirigirFavoritos("/favoritos")} className="text-white material-symbols-outlined hover:text-orange-500 cursor-pointer">
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
                   Gifs Favoritos
                  </h2>
                <div class="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                
                  
                  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 justify-center lg:grid-cols-2 xl:gap-x-8">


{
    favoritosEle && favoritosEle.map((datos) => (
  <div class="pt-6">
          <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:gap-x-8">
           
          
            <div class="aspect-w-full aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={datos.imagen}
                alt="Model wearing plain white basic tee."
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {datos.nombre}
              </h1>
            </div>

            {/* <!-- Options --> */}
            <div class="mt-4 lg:mt-0 lg:row-span-3">
              

              {/* <!-- Reviews --> */}

            

               
                <button
                onClick={()=>deleteItem(datos.id)}
                  type="button"
                  class="mt-10 w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-200"
                >
                  Eliminar de favoritos
                </button>

              
            </div>

            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* <!-- Description and details --> */}
             

             
            </div>
          </div>
        </div>
    ))
}


                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Favoritos