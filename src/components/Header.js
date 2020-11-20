import React from 'react'
import { Box, CardMedia } from "@material-ui/core"
import logo from "../images/logoblack.png"
import { makeStyles } from "@material-ui/core/styles"
import { useSpring, a } from "react-spring"

const useStyles = makeStyles((theme) => ({
  
  header: {
    borderBottom: "1px solid black",
  },
  logo: {
    width: "18rem",
  },
 
}))

const Header = () => {

      const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 800,
      })
    const classes = useStyles()
    
    return (
      <Box className={classes.header} display="flex" justifyContent="center">
        <a.div style={fade}>
          <CardMedia src={logo} component="img" className={classes.logo} />
        </a.div>
      </Box>
    )
}

export default Header
