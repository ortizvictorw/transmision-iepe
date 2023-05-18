'use client'
import React from "react";
import { useRouter } from 'next/navigation'
import signIn from "@/firebase/signIn";
import Image from "next/image";

export default function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: any) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error)
    }

    // else successful
    return router.push("/checklist")
  }

  return (
    <main className=" dark:bg-slate-800 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-xs">

          <div className='flex min-h-full flex-1 flex-col justify-center py-12 '>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <Image
                className='mx-auto w-auto'
                src='/android-icon-192x192.png'
                alt='IEPE'
                width={1000}
                height={1000}
              />
              <h2 className=' text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              IEPE
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form onSubmit={handleForm} className='space-y-6' action='#' method='POST'>
                <div>
                  <div className="mb-5">

                  <label htmlFor='email'>Ingrese su correo</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id='email' type='email' onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <label htmlFor='password'>Ingrese su contraseña</label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                  <button
                    type='submit'
                    className=' my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className='mt-10 text-center text-sm text-gray-500'>
                No eres miembro?{' '}
                <a href='https://api.whatsapp.com/send/?phone=3412617775' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                  Contactate con nosotros.
                </a>
              </p>
            </div>
          </div>

        <p className="text-center text-gray-500 text-xs">
          &copy;2023 IEPE All rights reserved.
        </p>
      </div>
    </main>


  )
}
