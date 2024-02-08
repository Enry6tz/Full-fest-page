"use client"

import React from 'react'
import { BackgroundRadialLeft } from '../BackgroundRadialLeft'
import { Reveal } from '../Reveal'
import { dataFeaturesFest } from './BestFest.data'
import Image from 'next/image'


export function BestFest() {
  return (
    <div className='relative px-6 py-20 md:py-64' id="features">
      <BackgroundRadialLeft />
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div>
          <Reveal>
            <h2 className='text-5xl font-semibold'> Arranca el
              <span className='block degradedBlue bg-greenLight'>FULL Tour 2024</span>
              y queremos que seas parte!
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>
              Estamos listos para darlo todo: más luces, un sonido envolvente y la mejor puesta en escena, todo diseñado para que tu experiencia sea inolvidable.
            </p>
          </Reveal>
        </div>
        <div className='grid items-center py-5 md:p-8'>
          {dataFeaturesFest.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className='grid grid-flow-col gap-5 px-4 py-2 mb-7 rounded-3xl group hover:bg-radialBlack'>
                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
              <div>
                <h4 className='text-primary'>{title}</h4>
                <p className='text-primaryDark'>{description}</p>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}