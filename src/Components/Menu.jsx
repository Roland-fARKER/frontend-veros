import React from "react";
import Logo from "./../assets/img/logo.png"

const Menu = () => {
  return (
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src= {Logo} alt="" className=" w-20"/>
      </a>
      <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a href="/"  class=" mr-5 w-auto my-3 mx-3 hover:text-white  hover:bg-black">Dashboard</a>
        <a href="/" class="mr-5 hover:text-[#018BD3]">Inventario</a>
        <a href="/" class="mr-5 hover:text-[#018BD3]">bodegas</a>
        <a href="/" class="mr-5 hover:text-[#018BD3]">Configuración</a>
      </div>
      <button class="inline-flex items-center bg-[#018BD3] border-0 py-1 px-3 mt-4 md:mt-0 text-white rounded-2xl">
         
        <a href="/login">Cerrar Sesión</a>
      </button>
    </div>
  );
};

export default Menu;
