import { Grid, Typography, Link as MuiLink } from "@material-ui/core"
import React from "react"
import Link from "./Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100vh",
    position: "fixed",
    width: "3vw",
  },

  nav: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    paddingTop: "40px",
    paddingRight: "5px",
    textTransform: "uppercase",
  },
  icon: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    paddingBottom: "20px",
    paddingRight: "5px",
  },
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.sidebar}
      direction="column"
      justify="space-between"
      wrap='nowrap'
    >
      <Grid item container className={classes.nav} justify="center" spacing={5}>
        <Grid item>
          <Link color="textPrimary" to="/">
            <Typography>Home</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link color="textPrimary" to="#hero">
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
        className={classes.icon}
        justify="center"
        spacing={5}
      >
        <Grid item>
          <MuiLink href="https://www.linkedin.com/in/suxyue/" target="_blank">
            <LinkedInIcon />
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink href="https://github.com/yue-su/" target="_blank">
            <GitHubIcon />
          </MuiLink>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Nav
