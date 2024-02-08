"use client"

import Link from "next/link";
import Image from "next/image";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
export function FirstBlock() {
  return (
    <div className="relative p-4 md:py-40 ">
        <BackgroundRadialRight/>
        <BackgroundRadialLeft/>
        <div className="grid max-w-5xl mx-auto md:grid-cols-2">
            <div className="mt-10">
               <Reveal>
                <h1 className="text-5xl font-semibold">
                    ¡Bienvenido a
                    <span className="block degradedBlue bg-greenLight font-bold">
                        EXPERIENCIA
                    </span>
                    del año!
                </h1>
                </Reveal>
                <Reveal>
                <p className="max-w-md mt-10"> La elegancia se fusiona con la energía, creando una atmósfera única para aquellos que buscan una experiencia sin igual. Desde las luces deslumbrantes hasta los ritmos cautivadores, cada detalle está diseñado para cautivar tus sentidos y brindarte una noche inolvidable. </p>
                </Reveal>
                
                <Reveal>
                <div className="my-8">
                    <Link href="#Proximas" className="px-4 py-3 rounded-md bg-greenRadial">Proximas Fechas</Link>
                </div>
                </Reveal>
            </div>
            <MotionTransition className="flex items-center justify-center">
                <Image src='/assets/logo-Fest.png' alt='logo full fest' width={650} height={650} className="h-auto w-72 md:w-full" />
            </MotionTransition>
        </div>
    </div>
  )
}
