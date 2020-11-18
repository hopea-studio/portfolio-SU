import {
  Grid,
  Avatar,
  Paper,
  Typography,
  Chip,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
import AvatarImg from "../images/Avatar.jpg"
import { red, blueGrey, grey, deepPurple } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(2),
  },
  paper: {
    width: "100%",
  },
  card: {
    //backgroundColor: theme.palette.grey[50],
    height: 440,
    padding: "5px",
    border: "1px solid black",
    backgroundColor: 'transparent',
  },
}))

const Hero = (props) => {
  const {
    about: { nodes: about },
  } = props.data

  const classes = useStyles()

  return (
    <Grid container className={classes.hero} spacing={2}>
        <Grid
          lg={4}
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar className={classes.avatar} src={AvatarImg}></Avatar>
          </Grid>
          <Grid item>
            <Typography>Web Developer</Typography>
          </Grid>
          <Grid item>
            <Typography>This site is still under development!</Typography>
          </Grid>
        </Grid>
      <Grid item container lg={8} spacing={2}>
        {about.map((i) => {
          return (
            <Grid item sm={3} xs={6} key={i.id}>
              <Paper
                elevation={0}
                className={classes.card}
              >
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="subtitle1" align="center">
                      {i.title}
                    </Typography>
                  </Grid>
                  {/* <Avatar src={i.icon.fluid.src} variant="circle" /> */}
                  {i.points.map((item) => {
                    return (
                      <Grid item key={item}>
                        <Chip
                          avatar={<Avatar>{item[0]}</Avatar>}
                          label={item}
                          variant="outlined"
                        />
                      </Grid>
                    )
                  })}
                </Grid>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Hero
