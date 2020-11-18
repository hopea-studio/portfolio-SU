import { Avatar, Chip, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    //backgroundColor: theme.palette.grey[50],
    height: 240,
    border: "1px solid grey",
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
      id="about"
    >
      <Grid item>
        <Typography variant="h4">Skills</Typography>
      </Grid>
      <Grid item container spacing={2}>
        
      </Grid>
    </Grid>
  )
}

export default About
