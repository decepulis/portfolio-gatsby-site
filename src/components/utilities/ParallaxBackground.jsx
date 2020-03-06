import React, { useRef } from "react"

import { useMouse } from "react-use"

const styles = {
  position: "fixed",
  zIndex: -1,
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",

  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  willChange: "transform",
  color: "white",
}

export default function ParallaxBackground({ img, color }) {
  const ref = useRef(null)
  // TODO: accelerometer for mobile
  const { docX, docY } = useMouse(ref)

  let style = {
    ...styles,
    backgroundColor: color,
    backgroundImage: `url(${img})`,
  }

  if (typeof window !== "undefined") {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    )

    if (reducedMotion.matches || reducedMotion.media === "not all") {
      const docW = window.innerWidth
      const docH = window.innerHeight

      const prcX = (2 * (docW / 2 - docX)) / docW
      const prcY = (2 * (docH / 2 - docY)) / docH

      style = {
        ...style,
        transform: `
        scale(1.25)
        perspective(1000px)
        rotateY(${-1 * prcX}deg)
        rotateX(${1 * prcY}deg)
        translate3d(${3 * prcX}px, ${3 * prcY}px, -100px)
      `,
      }
    }
  }
  return <div ref={ref} aria-hidden="true" focusable="false" style={style} />
}
