import { CardMedia, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import logo from "../images/logoblack.png"
import { makeStyles } from "@material-ui/core/styles"
import Particles from "./Particles"

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
  },
  header: {
    padding: theme.spacing(1),
  },
  logo: {
    height: "100%",
    width: "18rem",
  },
  footer: {
    padding: theme.spacing(2),
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Particles />
      <Grid container justify="center">
        <Grid item className={classes.header}>
          <CardMedia src={logo} component="img" className={classes.logo} />
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center" spacing={10}>
        {children}
      </Grid>
      <Grid container justify="center">
        <Grid item className={classes.footer}>
          <Typography variant="h6">Footer</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Layout
