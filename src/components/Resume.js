import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
        height: "100%",
      minHeight:100,
  },
  resume: {
    border: "2px solid grey",
    borderRadius: "10px",
  },
}))

const Resume = () => {
  const classes = useStyles()
  return (
    <Grid item container direction="column" alignItems="center" spacing={4} id="resume">
      <Grid item>
        <Typography variant="h4">Timeline</Typography>
      </Grid>

      <Grid
        item
        container
        spacing={2}
        md={8}
        sm={10}
        xs={12}
        className={classes.resume}
        justify="center"
      >
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>Working History</Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>Education</Paper>
        </Grid>
        <Grid item container justify="flex-end">
          <Grid item>Button 1</Grid>
          <Grid item>Button 2</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Resume
