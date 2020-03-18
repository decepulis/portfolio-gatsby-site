import React, { useEffect } from "react"

export default function RequestSensorPermission({
  permissionGranted,
  setPermissionGranted,
}) {
  const motionPermissionRequired =
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  const orientationPermissionRequired =
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  const permissionRequired =
    motionPermissionRequired || orientationPermissionRequired

  useEffect(() => {
    setPermissionGranted(permissionRequired ? "pending" : "granted")
  }, [setPermissionGranted, permissionRequired])

  if (!permissionRequired) {
    return null
  }

  const requestMotionPermission = () => {
    return DeviceMotionEvent.requestPermission()
  }

  const requestOrientationPermission = () => {
    return DeviceOrientationEvent.requestPermission()
  }

  const requestPermission = () => {
    requestMotionPermission()
      .then(requestOrientationPermission)
      .then(permissionState => {
        if (permissionState === "granted") {
          setPermissionGranted("granted")
        }
      })
      .catch(e => {
        setPermissionGranted("denied")
      })
  }

  const dismissPermission = event => {
    setPermissionGranted("denied")
    event.stopPropagation()
  }

  const visible = permissionGranted === "pending"
  return (
    <div
      className={`request-sensor-permission ${
        !visible ? "request-sensor-permission--hidden" : ""
      }`}
      aria-hidden={!visible}
    >
      <button
        className={"request-sensor-permission__button"}
        onClick={requestPermission}
        aria-label="tap to enable wallpaper parallax effect"
      >
        <div>
          <b>Motion Features</b>
          <br />
          Tap to enable motion features
        </div>
      </button>
      <button
        className="request-sensor-permission__dismiss"
        onClick={dismissPermission}
        aria-label="close"
      >
        &times;
      </button>
    </div>
  )
}
