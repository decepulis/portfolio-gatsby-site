import React, { useState, useCallback } from "react"

import RequestSensorPermission from "./RequestSensorPermission"
import useEventListener from "./useEventListener"

import clamp from "lodash/clamp"

const styles = {
  position: "fixed",
  zIndex: 0,
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",

  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  willChange: "transform",
  color: "white",
}

export default function ParallaxBackground({ img, color }) {
  const [sensorPermissionGranted, setSensorPermissionGranted] = useState()
  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
  })
  // -- Step 1: Define functions for calculating transforms by mouse or device motion --
  const onMouseMove = useCallback(
    ({ x: docX, y: docY }) => {
      let x = 0
      let y = 0

      if (typeof window !== "undefined") {
        const docW = window.innerWidth
        const docH = window.innerHeight

        x = (2 * (docW / 2 - docX)) / docW
        y = (2 * (docH / 2 - docY)) / docH
      }

      setTransform({
        x,
        y,
      })
    },
    [setTransform]
  )

  const onDeviceMotion = useCallback(
    ({ rotationRate }) => {
      // abs(alpha) and abs(beta) tend to range between 0 and the low hundreds
      // we scale that to the 1s to make it at least in the same ballpark as our transforms
      const rotationSpeed = -0.1
      const xRotation = (rotationSpeed * rotationRate?.beta) / 100 ?? 0
      const yRotation = (rotationSpeed * rotationRate?.alpha) / 100 ?? 0

      // transform.x and transform.y both should range from -1 to 1
      setTransform(transform => ({
        x: clamp(transform.x + xRotation, -1, 1),
        y: clamp(transform.y + yRotation, -1, 1),
      }))
    },
    [setTransform]
  )

  // -- Step 2: Determine whether to use mousemove or device motion or neither --
  let eventName
  // If the user hasn't indicated that they prefer less motion,
  // we assign an event.
  const mediaReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  )
  if (mediaReducedMotion.matches || mediaReducedMotion.media === "not all") {
    const mediaHover = window.matchMedia("(hover: hover)")
    // can we assume mouse input? Then we use mouse for location
    if (mediaHover.matches) {
      eventName = "mousemove"
    } else {
      if (sensorPermissionGranted === "granted") {
        eventName = "devicemotion"
      }
    }
  }

  useEventListener(
    eventName,
    eventName === "mousemove"
      ? onMouseMove
      : eventName === "devicemotion"
      ? onDeviceMotion
      : () => {}
  )

  // -- Step 3: Calculate and Apply Styles --
  const translateSpeed = eventName === "mousemove" ? 3 : 5
  const style = {
    ...styles,
    backgroundColor: color,
    backgroundImage: `url(${img})`,
    transform: `
      scale(1.25)
      perspective(1000px)
      rotateY(${-1 * transform.x}deg)
      rotateX(${1 * transform.y}deg)
      translate3d(
        ${translateSpeed * transform.x}px,
        ${translateSpeed * transform.y}px,
        -100px
      )
    `,
  }

  return (
    <>
      <RequestSensorPermission
        permissionGranted={sensorPermissionGranted}
        setPermissionGranted={setSensorPermissionGranted}
      />
      <div aria-hidden="true" focusable="false" style={style} />
    </>
  )
}
