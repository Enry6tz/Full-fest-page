"use client"

import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export  function CounterData() {
  return (
    <MotionTransition className="max-w-5xl py-10 mx-auto md:py-64">
        <div className="justify-between md:flex">
            {dataCounter.map(({id, startNumber, endNumber,text}) => (
                <div key={id} className="py-5 text-2xl text-center md:text-left ml-3">
                    +
                    <CountUp start={startNumber} end={endNumber} duration={3.5} enableScrollSpy />
                    {" "}
                    <span className=" block degradedBlue bg-greenLight ">{text}</span>

                </div>
                ))}
        </div>
    </MotionTransition>
  )
}
