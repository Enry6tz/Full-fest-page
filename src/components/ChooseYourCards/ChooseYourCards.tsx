"use client"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Link from "next/link";
import Image from "next/image";

export function ChooseYourCards() {
    return (
      <div className="relative px-6 py-20 md:py-64" id="Proximas">
        <BackgroundRadialRight />
        <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
            <div className='p-5'>
          <Reveal>
            <h2 className="text-5xl font-semibold mr-6 mb-9">
              <span className="block degradedBlue bg-greenLight">Proximos eventos</span>no te quedes afuera!
            </h2>
            </Reveal>
            <Reveal>
                <div className="my-8">
                    <Link href="#Proximas" className="px-4 py-3 rounded-md bg-greenRadial  sm:text-3xl">Comprar tickets</Link>
                </div>
            </Reveal>
            </div>
          <div className=" px-5 md:px-0 md:col-span-1">
            <MotionTransition>
              <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
                {dataCards.map(({ image, id }) => (
                  <SwiperSlide key={id}>
                    <Image src={image} alt="proximos eventos card" width="400" height="470" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </MotionTransition>
          </div>
        </div>
      </div>
    );
  }
  