import { CardMedia, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import logo from "../images/logoblack.png"
import { makeStyles } from "@material-ui/core/styles"
import Particles from "./Particles"
import { useSpring, a } from "react-spring"
import Nav from "./Nav"


const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: '1px solid black'
  },
  logo: {
    width: "18rem",
  },
  footer: { 
  },
}))

const Layout = ({ children }) => {
  const fade = useSpring({
    opacity: 1,
    width: "100%",
    from: { opacity: 0, width: "10%" },
    delay: 800,
  })
  const classes = useStyles()

  return (
    <Grid container>
      <Particles />
      <Grid item sm={1}>
        <Nav />
      </Grid>
      <Grid item container sm={11} direction="column" justify="center">
        <Grid item className={classes.header}>
          <a.div style={fade}>
            <CardMedia src={logo} component="img" className={classes.logo} />
          </a.div>
        </Grid>
        <Grid item container direction="column">
          {children}
        </Grid>
        <Grid item className={classes.footer}>
          <Typography variant="h6">Footer</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Layout
