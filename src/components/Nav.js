import { Button, Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import Link from "./Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    sidebar: {
        height: '110vh',
        position:'fixed'
  },

  nav: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    borderRight: "1px solid black",
  },

  icons: {
      borderRight: "1px solid black",
  },
}))

const Nav = () => {

    const classes = useStyles()

    return (
      <Grid
        container
        spacing={2}
        className={classes.sidebar}
        direction="column"
        md={1}
      >
        <Grid
          item
          container
          className={classes.nav}
          spacing={1}
          alignItems="center"
          md={6}
          direction="column"
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
          spacing={1}
          md={6}
          direction="column"
        >
          <Grid item>
            <Link to="https://www.linkedin.com/in/suxyue/" target="_blank">
              <IconButton>
                <LinkedInIcon color="primary" />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="https://github.com/yue-su/" target="_blank">
              <IconButton>
                <GitHubIcon color="secondary" />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default Nav
