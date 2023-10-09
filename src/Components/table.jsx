import React from "react";

const Table = () => {
  return (
    <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="p-6 pb-0 mb-0 bg-[#018BD3] rounded-t-2xl divide-y flex justify-center items-center text-white">
        <h1 className=" text-xl">Inventario</h1>
      </div>
      <div className="flex-auto px-0 pt-0 pb-2">
        <div className="p-0 overflow-x-auto">
          <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
            <thead className="align-bottom">
              <tr>
                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-[#018BD3] shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-[#018BD3] opacity-70">
                  Producto
                </th>
                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-[#018BD3] shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-[#018BD3] opacity-70">
                  Bodega
                </th>
                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-[#018BD3] shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-[#018BD3] opacity-70">
                  Estado
                </th>
                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-[#018BD3] shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-[#018BD3] opacity-70">
                  Fecha
                </th>
                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-[#018BD3] border-solid shadow-none tracking-none whitespace-nowrap text-[#018BD3] opacity-70"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">
                        Producto 1
                      </h6>
                      <p className="mb-0 leading-tight text-xs text-slate-400">
                        descripción producto 1
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">
                    Id bodega
                  </p>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    Nombre bodega
                  </p>
                </td>
                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                  <span className="bg-gradient-to-tl w-20 h-5  from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                    en stok
                  </span>
                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="font-semibold leading-tight text-xs text-slate-400">
                    23/04/18
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <a
                    href="/"
                    class="font-semibold leading-tight text-xs text-slate-400"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">
                        Producto 1
                      </h6>
                      <p className="mb-0 leading-tight text-xs text-slate-400">
                        descripción producto 1
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">
                    Id bodega
                  </p>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    Nombre bodega
                  </p>
                </td>
                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                  <span className="bg-gradient-to-tl w-20 h-5  from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                    en stok
                  </span>
                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="font-semibold leading-tight text-xs text-slate-400">
                    23/04/18
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <a
                    href="/"
                    className="font-semibold leading-tight text-xs text-slate-400"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">
                        Producto 1
                      </h6>
                      <p className="mb-0 leading-tight text-xs text-slate-400">
                        descripción producto 1
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">
                    Id bodega
                  </p>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    Nombre bodega
                  </p>
                </td>
                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                  <span className="bg-gradient-to-tl w-20 h-5  from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                    en stok
                  </span>
                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="font-semibold leading-tight text-xs text-slate-400">
                    23/04/18
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <a
                    href="/"
                    className="font-semibold leading-tight text-xs text-slate-400"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">
                        Producto 1
                      </h6>
                      <p className="mb-0 leading-tight text-xs text-slate-400">
                        descripción producto 1
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">
                    Id bodega
                  </p>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    Nombre bodega
                  </p>
                </td>
                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                  <span className="bg-gradient-to-tl w-20 h-5  from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                    en stok
                  </span>
                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="font-semibold leading-tight text-xs text-slate-400">
                    23/04/18
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <a
                    href="/"
                    className="font-semibold leading-tight text-xs text-slate-400"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">
                        Producto 1
                      </h6>
                      <p className="mb-0 leading-tight text-xs text-slate-400">
                        descripción producto 1
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">
                    Id bodega
                  </p>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    Nombre bodega
                  </p>
                </td>
                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                  <span className="bg-gradient-to-tl w-20 h-5  from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                    en stok
                  </span>
                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="font-semibold leading-tight text-xs text-slate-400">
                    23/04/18
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <a
                    href="/"
                    className="font-semibold leading-tight text-xs text-slate-400"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">
                        Producto 1
                      </h6>
                      <p className="mb-0 leading-tight text-xs text-slate-400">
                        descripción producto 1
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">
                    Id bodega
                  </p>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    Nombre bodega
                  </p>
                </td>
                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                  <span className="bg-gradient-to-tl w-20 h-5  from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                    en stok
                  </span>
                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="font-semibold leading-tight text-xs text-slate-400">
                    23/04/18
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <a
                    href="/"
                    className="font-semibold leading-tight text-xs text-slate-400"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                      <h6 className="mb-0 leading-normal text-sm">
                        Producto 1
                      </h6>
                      <p className="mb-0 leading-tight text-xs text-slate-400">
                        descripción producto 1
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <p className="mb-0 font-semibold leading-tight text-xs">
                    Id bodega
                  </p>
                  <p className="mb-0 leading-tight text-xs text-slate-400">
                    Nombre bodega
                  </p>
                </td>
                <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                  <span className="bg-gradient-to-tl w-20 h-5  from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                    en stok
                  </span>
                </td>
                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <span className="font-semibold leading-tight text-xs text-slate-400">
                    23/04/18
                  </span>
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                  <a
                    href="/"
                    className="font-semibold leading-tight text-xs text-slate-400"
                  >
                    {" "}
                    Edit{" "}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
