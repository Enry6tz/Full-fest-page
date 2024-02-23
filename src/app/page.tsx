import { BestFest } from "@/components/BestFest/BestFest"
import { Header } from "@/components/Header/Header"
import { Skills } from "@/components/Skills/Skills"
import { FirstBlock } from "@/components/FirstBlock"
import { CounterData } from "@/components/CounterData"
import { ChooseYourCards } from "@/components/ChooseYourCards"
import { ControlSocial } from "@/components/ControlSocial"
import { Photos } from "@/components/Photos"
import { PaymentsMethods } from "@/components/PaymentsMethods"
import { Footer } from "@/components/Footer"
import {SpotySection} from "@/components/SpotySection/SpotySection"


export default function Home() {
  return (
    <>
      <Header  />
      <FirstBlock />
      <CounterData />
      <BestFest />
      <ChooseYourCards/>
      <ControlSocial/>
      <Photos/>
      <PaymentsMethods/>
      <Footer/>

    </>
  )
}
