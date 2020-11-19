import { Grid, Typography } from "@material-ui/core"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({}))

const Resume = ({ data }) => {
  
  const {education:{nodes: edu}, work:{nodes: work}} = data

  const classes = useStyles()
  return (
    <Grid item container id="resume">
      <Grid item container lg={6}>
        <Grid item lg={4}>
          <Typography>Work Experience</Typography>
        </Grid>
        <Grid item container lg={8} direction='column'>
          {work.map((item, index) => {
            return (
              <Grid item key={index}>
                <Typography>{item.date }</Typography>
            </Grid>
          )})}
        </Grid>
      </Grid>
      <Grid item container lg={6}>
        <Grid item container lg={8} direction='column'>
          {edu.map((item, index) => {
            return (
              <Grid item key={index}>
                <Typography>{item.date}</Typography>
              </Grid>
            )
          })}
        </Grid>
        <Grid item lg={4}>
          Education
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Resume
