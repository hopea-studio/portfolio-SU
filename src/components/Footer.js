import React from 'react'
import { Box, Grid, Link, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid black",
  },
}))

const Footer = () => {
    const classes = useStyles()

    return (
      <Box
        py={15}
        className={classes.footer}
        display="flex"
        justifyContent="center"
        id="contact"
      >
        <Grid container xs={11} md={10} spacing={2}>
          <Grid item container lg={6} spacing={3}>
            <Grid item lg={4}>
              <Typography variant="h5">Contact Infomation</Typography>
            </Grid>
            <Grid item container lg={8} direction="column" spacing={5}>
              <Grid item>
                <Typography gutterBottom>Email</Typography>
                <Typography variant="h6">
                  <Link href="mailto:su2047@gmail.com" target="_blank">
                    su2047@gmail.com
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom>Location</Typography>
                <Typography variant="h6">Halifax, NS</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container lg={6} spacing={3}>
            <Grid item container lg={8} direction="column" spacing={5}>
              <Grid item>
                <Typography gutterBottom>Social Channels</Typography>
                <Typography variant="h6">
                  <Link
                    href="https://www.linkedin.com/in/suxyue/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link href="https://github.com/yue-su/" target="_blank">
                    GitHub
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={4}></Grid>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Footer
