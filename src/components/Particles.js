import React from "react"
import ParticlesJS from "react-tsparticles"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

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
            value: grey[100],
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#bdbdbd",
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
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default Particles
