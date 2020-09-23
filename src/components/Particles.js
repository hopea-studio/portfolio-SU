import React from "react"
import ParticlesJS from "react-tsparticles"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  particles: {
    position: "fixed",
    zIndex: "-1",
    left: "0",
  },
}))

const Particles = () => {
  const classes = useStyles()

  return (
    <ParticlesJS
      className={classes.particles}
      height="100vh"
      width="100vw"
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#f5f5f5",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#311b92",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "up",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.9,
          },
          shape: {
            type: "triangle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default Particles
