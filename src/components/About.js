import { Avatar, Chip, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    //backgroundColor: theme.palette.grey[50],
    height: 240,
    border: "3px solid grey",
    padding: "5px",
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
        <Typography variant="h4">Skills</Typography>
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

export default About
