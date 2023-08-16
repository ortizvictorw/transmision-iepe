'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

import Image from "next/image";
import moment from "moment";

import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import signOutUser from "@/firebase/loguot";

export default function CheckList() {

  const [form, setForm] = useState<any>({
    id: moment().format('MMMM Do YYYY, h:mm:ss a')
  });

  const [valid, setValid] = useState<any>();
  const [submit, setSubmit] = useState<any>(false);

  const router = useRouter()

  const handleForm = async (event: any) => {
    try {
      setSubmit(true)
      event.preventDefault()
      await addDoc(collection(db, "informes",), form);
      setSubmit(false)
      await signOutUser()
      router.push("/")

    } catch (error) {
      console.error(error)
    } finally {
      setSubmit(false)

    }

  }

  const handleFormValue = (event: any) => {
    const { id, type, value, checked } = event.target;
    form[id] = type === 'checkbox' ? checked : value
    setForm(form)
    verifyForm()
  }

  const verifyForm = () => {
    setValid(Object.keys(form).length === 26)
  }

  return (
    <form onSubmit={handleForm} onChange={(e) => handleFormValue(e)} className="m-4 mt-6 w-full max-w-2xl bg-slate-300 px-16 rounded-md mx-auto">
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Image
          className='mx-auto w-auto'
          src='/android-icon-192x192.png'
          alt='IEPE'
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
      <h1 className="font-bold mx-auto mt-16 mb-7 uppercase">Lista de chequeo</h1>

        <div className="w-full p-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="responsable-obs">
            Operador de OBS
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="responsable-obs" type="text" placeholder="Menganito..." />
        </div>

        <div className="w-full  px-3">
         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="responsable-cam">
            Responsable de Checklist
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="responsable-cam" type="text" placeholder="Fulanito.." />
        </div>

        <h1 className="font-bold mx-auto mt-16 mb-7 uppercase">ANTES DE COMENZAR</h1>
        <div className="w-full  px-3">
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">Colosenses 3:23</p>
          </blockquote>

          <div className="flex items-center mb-6">
            <input id="orar-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="orar-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿ORARON ANTES DE COMENZAR?</label>
          </div>

          <div className="flex items-center">
            <input id="conetion-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="conetion-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Hay internet?</label>
          </div>

          <div className="flex items-center">
            <input id="auri-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="auri-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Hay auricular?</label>
          </div>

          <div className="flex items-center">
            <input id="cel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="cel-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿El celular tiene carga?</label>
          </div>

          <div className="flex items-center">
            <input id="web-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="web-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Ingresa correctamente Youtube y Facebook con la cuenta de IEPE?</label>
          </div>

          <div className="flex items-center">
            <input id="public-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="public-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Esta en público la transmisión en Youtube?</label>
          </div>

          <div className="flex items-center">
            <input id="tittle-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="tittle-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Hay título?</label>
          </div>

          <div className="flex items-center">
            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Llega audio en el OBS?</label>
          </div>

          <div className="flex items-center">
            <input id="offline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="offline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se probó el OFFLINE?</label>
          </div>

          <div className="flex items-center">
            <input id="video-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="video-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Las cámaras funcionan bien?</label>
          </div>

          <div className="flex items-center">
            <input id="jostick-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="jostick-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Las cámaras se mueven bien?</label>
          </div>

          <h1 className="flex justify-center font-bold mx-auto mt-16 mb-7 uppercase">DURANTE LA TRANSMISIÓN</h1>
     
          <div className="flex items-center">
            <input id="audio-facebook-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="audio-facebook-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Sale bien el audio en Facebbok?</label>
          </div>

          <div className="flex items-center">
            <input id="audio-youtube-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="audio-youtube-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Sale bien el audio en Youtube?</label>
          </div>

          <div className="flex items-center">
            <input id="shared-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="shared-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se compartio el link de transmisión en los grupos de IEPE?</label>
          </div>

          <div className="flex items-center">
            <input id="offline-start-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="offline-start-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Arrancó el OFFLINE?</label>
          </div>

          <div className="flex items-center">
            <input id="youtube-tittle-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="youtube-tittle-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se colocó titulo en Youtube?</label>
          </div>

          <div className="flex items-center">
            <input id="youtube-min-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="youtube-min-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se colocó miniatura en Youtube?</label>
          </div>

          <div className="flex items-center">
            <input id="face-tittle-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="face-tittle-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se colocó titulo en Facebook?</label>
          </div>

          <div className="flex items-center">
            <input id="face-min-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="face-min-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se colocó miniatura en Facebook?</label>
          </div>

          <div className="flex items-center">
            <input id="inicio-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="inicio-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se creo el inicio con el titulo de la predica en canvas?</label>
          </div>

          
          <div className="flex items-center">
            <input id="audio-ambiente-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="audio-ambiente-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se bajo el audio del ambiente en la prédica?</label>
          </div>

          <div className="flex items-center">
            <input id="descripcion-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="descripcion-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se colocó la descripción en Youtube y Facebook?</label>
          </div>


          <div className="flex items-center">
            <input id="category-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="category-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se compartio en Youtube y Facebook el formulario para realizar el contacto?</label>
          </div>


          <div className="flex items-center">
            <input id="category-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="category-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se colocó la transmisión en una lista de reproducción en Youtube</label>
          </div>


          <div className="flex items-center">
            <input id="category-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="category-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Revisar el correo de IEPE para verificar si alguien completo el formulario -Entregarselo a Jose Cabrera-</label>
          </div>


          <div className="w-full p-3 mt-3">

         

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="predica-tittle">
          Colocar título de la prédica
          </label>
          <input id="predica-tittle" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Escriba título de la predicación..." />
          
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3" htmlFor="name-prise">
          Colocar nombre de alabanza
          </label>
          <input id="name-prise" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Escriba nombre de alabanza..." />


          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3" htmlFor="link-facebook">
          Pegar link de Facebook
          </label>
          <input id="link-facebook" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="https://.." />
          
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3"  htmlFor="link-youtube">
          Pegar link de Youtube
          </label>
          <input id="link-youtube" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="https://.." />
        </div>

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3"  htmlFor="link-youtube">
          Colocar descripción
          </label>
          <textarea id="description-text" rows={4} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Escriba la descrición..."></textarea>
          <h1 className="flex justify-center font-bold mx-auto mt-16 mb-7 uppercase">AL FINALIZAR LA TRANSMISIÓN</h1>

          <div className="flex items-center">
            <input id="cel-bat-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="cel-bat-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se dejo cargando el celular?</label>
          </div>
          <div className="flex items-center">
            <input id="luz-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="luz-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se dejarón las luces apagadas?</label>
          </div>
          <div className="flex items-center">
            <input id="orden-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="orden-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se dejó la sala ordeneda?</label>
          </div>
          <div className="flex items-center">
            <input id="off-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="off-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿Se apagó PC, Joystick y Swich?</label>
          </div>
          <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3">¿Algo para mejorar o comentar?</label>
          <textarea id="message" rows={4} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="
          *Comentario uno
          
          *Comentario dos
          "></textarea>
          <div className="flex justify-center my-16">
            {
              valid ? (
                <button disabled={!valid} type="submit" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{submit ? 'Enviando....' : 'ENVIAR INFORE'}</button>

              ) : (
                <button disabled={valid} type="submit" className=" text-slate-700 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ENVIAR INFORE</button>

              )
            }

            
          </div>
        </div>
      </div>
    </form>

  )
}
