import { Box, CardMedia, Hidden, Typography } from "@material-ui/core"
import React from "react"
import logo from "../images/logoblack.png"
import { makeStyles } from "@material-ui/core/styles"
import Particles from "./Particles"
import { useSpring, a } from "react-spring"
import Nav from "./Nav"

const useStyles = makeStyles((theme) => ({
  nav: {
    width: '4vw',
    border: '1px solid black',
    position: 'relative'
  },
  main: {
    flexGrow: '1',
  },
  header: {
    borderBottom: "1px solid black",
  },
  logo: {
    width: "18rem",
  },
  footer: {
    borderTop: "1px solid black",
  },
}))

const Layout = ({ children }) => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 800,
  })
  const classes = useStyles()

  return (
    <Box display="flex">
      <Hidden smDown>
        <Box className={classes.nav}>
          <Particles />
          <Nav />
        </Box>
      </Hidden>
      <Box className={classes.main}>
        <Box className={classes.header} display='flex' justifyContent='center'>
          <a.div style={fade}>
            <CardMedia src={logo} component="img" className={classes.logo} />
          </a.div>
        </Box>
        <Box>{children}</Box>
        <Box className={classes.footer}>
          <Typography variant="h6">Footer</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
