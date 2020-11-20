import { Box, Hidden } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Particles from "./Particles"
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  nav: {
    width: '4vw',
    border: '1px solid black',
    position: 'relative'
  },
  main: {
    flexGrow: '1',
  },
}))

const Layout = ({ children }) => {
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
       <Header />
        {children}
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
