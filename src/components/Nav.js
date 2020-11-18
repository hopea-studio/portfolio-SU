import { Button, Grid, IconButton, Typography } from "@material-ui/core"
import React from "react"
import Link from "./Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "110vh",
    position: "fixed",
    width: "2.5vw",
        borderRight: "1px solid black",
    paddingTop: '10px'
  },

  nav: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
  },

  icons: {
      position: 'fixed',
      top: '50vh',
      left: "5px",
      transform: "translate(0, -50%)"
  },
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.sidebar} direction="column">
      <Grid
        item
        container
        className={classes.nav}
        alignItems="center"
        justify="center"
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Link color="textPrimary" to="#about">
            <Typography>Skills</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link color="textPrimary" to="#portfolio">
            <Typography>Portfolio</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link color="textPrimary" to="#resume">
            <Typography>Timeline</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link color="textPrimary" to="#contact">
            <Typography>Contact</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.icons}
              direction="column"
              spacing={2}
      >
        <Grid item>
          <Link to="https://www.linkedin.com/in/suxyue/" target="_blank">
            <LinkedInIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://github.com/yue-su/" target="_blank">
              <GitHubIcon />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Nav
