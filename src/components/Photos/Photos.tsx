"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Photos() {
  return (
    <div className="relative p-8 md:py-64" id="Ediciones">
        <BackgroundRadialLeft/>
        <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
            <Reveal>
                <h2 className="text-5xl mb-5 font-semibold">Galeria de fotos revivi <span className="block degradedBlue bg-greenLight">FULL</span></h2>
            </Reveal>
            <Reveal>
                <div className="self-center">
                    <p className="text-primaryDark">¡Full Fest en cada clic! Descubre la galería de fotos y revive la energía, la música de las mejores noches <br />¡Clickea ahora para sumergirte en la verdadera experiencia Full Fest!
                    </p>
                </div>
            </Reveal>
        </div>
        <Slide/>
    </div>
  )
}
