import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({}))

const Contact = () => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      id="contact"
    ></Grid>
  )
}

export default Contact
