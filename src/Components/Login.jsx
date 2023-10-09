import React from 'react'
import Logo from "./../assets/img/logo.png"
import 'tailwindcss/tailwind.css';

export default function Login() {
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-48"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inicia Sesión
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre de usuario
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#018BD3] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#018BD3]  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#018BD3] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#018BD3] sm:text-sm sm:leading-6"
              />
            </div>
            <div className="text-sm">
                <p className="font-semibold text-[#E30713] hover:text-[#018BD3] cursor-pointer">
                  Ha olvidado su contraseña ?
                </p>
              </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-m rounded-md bg-[#018BD3] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#E30713] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Iniciar
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
