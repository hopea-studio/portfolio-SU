import { Grid, Typography } from "@material-ui/core"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({}))

const Resume = () => {
  const classes = useStyles()
  return (
    <Grid item container id="resume">
      <Grid item container lg={6}>
        <Grid item lg={4}>
          <Typography>Work Experience</Typography>
        </Grid>
        <Grid item container lg={8}>
          {}
        </Grid>
      </Grid>
      <Grid item container lg={6}>
        <Grid item container lg={8}>
          {}
        </Grid>
        <Grid item lg={4}>
          Education
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Resume
