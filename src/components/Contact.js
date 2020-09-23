import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Paper } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
    height: 300,
  },
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      spacing={4}
      id="contact"
    >
      <Grid item>
        <Typography variant="h4">Contact</Typography>
      </Grid>
      <Grid item>
        <Paper className={classes.paper} elevation={2}>
          contact info
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Contact
