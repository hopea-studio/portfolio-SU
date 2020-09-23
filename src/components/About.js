import { Avatar, Chip, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    //backgroundColor: theme.palette.grey[50],
    height: 240,
  },
}))

const About = (props) => {
  const {
    about: { nodes: about },
  } = props.data

  const classes = useStyles()
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      md={10}
      spacing={4}
      id="about"
    >
      <Grid item>
        <Typography variant="h4">About Me</Typography>
      </Grid>
      <Grid item container spacing={2}>
        {about.map((i) => {
          return (
            <Grid item md={3} sm={6} xs={12} key={i.id}>
              <Paper
                elevation={1}
                className={classes.card}
                style={{ backgroundColor: `${i.backgroundColor}` }}
              >
                <Typography>{i.title}</Typography>
                <Avatar src={i.icon.fluid.src} variant="circle" />
                {i.points.map((item) => {
                  return (
                    <Chip
                      key={item}
                      avatar={<Avatar>{item[0]}</Avatar>}
                      label={item}
                      variant="outlined"
                    />
                  )
                })}
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default About
