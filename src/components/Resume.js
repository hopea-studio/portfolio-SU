import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  resume: {
    borderTop: "1px solid black",
  },
}))

const Resume = ({ data }) => {
  const {
    education: { nodes: edu },
    work: { nodes: work },
  } = data

  const classes = useStyles()

  return (
    <Box
      py={15}
      id="resume"
      display="flex"
      justifyContent="center"
      className={classes.resume}
    >
      <Grid container xs={11} md={10} spacing={2}>
        <Grid item container lg={6} spacing={3}>
          <Grid item lg={4}>
            <Typography variant="h5">Work Experience</Typography>
          </Grid>
          <Grid item container lg={8} direction="column" spacing={5}>
            {work.map((item, index) => {
              return (
                <Grid item key={index}>
                  <Typography gutterBottom>
                    {item.date} / {item.location}
                    <span role="img" aria-label="emoji">
                      {"  "}
                      💻
                    </span>
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {item.position} / {item.company}
                  </Typography>
                  {item.info.map((item, index) => (
                    <Typography key={index}>
                      <Typography display="inline" variant="h6">
                        •
                      </Typography>{" "}
                      {item}
                    </Typography>
                  ))}
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item container lg={6} spacing={3}>
          <Grid
            item
            container
            lg={8}
            direction="column"
            spacing={5}
            alignItems="flex-end"
          >
            {edu.map((item, index) => {
              return (
                <Grid item key={index}>
                  <Typography gutterBottom align="right">
                    <span role="img" aria-label="emoji">
                      📓{" "}
                    </span>
                    {item.date} / {item.location}
                  </Typography>
                  <Typography gutterBottom align="right" variant="h6">
                    {item.degree}
                  </Typography>
                  <Typography align="right">{item.school}</Typography>
                </Grid>
              )
            })}
          </Grid>
          <Grid item lg={4}>
            <Typography variant="h5">Education</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Resume
