import { Grid, Typography, Link as MuiLink } from "@material-ui/core"
import React from "react"
import Link from "./Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "110vh",
    position: "fixed",
    width: "3vw",
    borderRight: "1px solid black",
    paddingTop: "25px",
  },

  nav: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
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
        spacing={5}
      >
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
