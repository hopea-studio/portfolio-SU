import { CardMedia, Container, Grid, Hidden, Typography } from "@material-ui/core"
import React from "react"
import logo from "../images/logoblack.png"
import { makeStyles } from "@material-ui/core/styles"
import Particles from "./Particles"
import { useSpring, a } from "react-spring"
import Nav from "./Nav"


const useStyles = makeStyles((theme) => ({
  main: {
    paddingLeft: "2.5vw",
  },
  header: {
    borderBottom: "1px solid black",
  },
  logo: {
    width: "18rem",
  },
  footer: {},
}))

const Layout = ({ children }) => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 800,
  })
  const classes = useStyles()

  return (
    <Grid container xs={12}>
      <Particles />
        <Hidden smDown>
          <Nav />
        </Hidden>
      <Grid item container direction="column" className={classes.main}>
        <Grid item container className={classes.header} justify='center'>
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
