import {
  Grid,
  Avatar,
  Breadcrumbs,
  IconButton,
  Paper,
  Typography,
  Button,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import AvatarImg from "../images/Avatar.jpg"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(2),
  },
  paper: {
    width: "100%",
    border: "3px solid grey",
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    
      <Paper className={classes.paper} elevation={0}>
        <Grid
          container
          spacing={1}
        >
          <Grid item>
            <Avatar className={classes.avatar} src={AvatarImg}></Avatar>
          </Grid>
          <Grid item>
            <Typography>Web Developer</Typography>
            <Typography>Site is still under development!</Typography>
          </Grid>
        </Grid>
      </Paper>
    
  )
}

export default Hero
