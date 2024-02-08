import { useRef, useEffect } from 'react'
import { MotionTransitionProps } from './MotionTransition.types'
import { useAnimation, useInView, motion } from 'framer-motion';
import { fadeIn } from '@/utils/transition';



export function MotionTransition(props:MotionTransitionProps) {
    const {children , className} = props;

    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
    const mainControls = useAnimation()
    const slideControl = useAnimation()

    useEffect(() => {
      if(isInView){
        mainControls.start("visible")
        slideControl.start("visible")
      }
    }, [isInView, mainControls, slideControl])
    
  return (
    <div ref={ref}>
        <motion.div
            variants={fadeIn()}
            initial="hidden"
            animate={mainControls}
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    </div>
  )
}

