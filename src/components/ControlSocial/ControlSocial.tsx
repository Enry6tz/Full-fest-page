"use client"
import Image from "next/image";
import Link from "next/link";
import { MotionTransition } from "../MotionTransition";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";

export function ControlSocial() {
  return (
    <div className="relative p-4 md:py-40 ">
      <BackgroundRadialLeft />
      <BackgroundRadialRight />
      <div className="p-4 py-20 md:py-64">
        <div className='flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly'>
          <MotionTransition className=" flex-1 p-6 md:p-8">
            <Image src="/assets/Redes.png" alt="instragram de full telefono" width="700" height={900} className="w-full h-auto" />
          </MotionTransition>
          <div className="flex-1 p-6 md:p-8">
            <Reveal>
              <h2 className="text-5xl font-semibold">
                Seguinos en <span className="block degradedBlue bg-greenLight font-bold">
                  Instagram
                </span>
                y enterate de todas las novedades
              </h2>

            </Reveal>
            <Reveal>
              <div className="my-8">
                <Link href="https://www.instagram.com/full_fest_/" target="blank" className="px-6 py-4 rounded-md bg-greenRadial text-3xl">Seguir</Link>
              </div>

            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
