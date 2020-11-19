import {
  Box,
  Button,
  Chip,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
//import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  cover: {
   
  },
  chip: {
    fontSize: "1rem",
    marginRight: "2px",
  },
}))

const Portfolio = (props) => {
  const classes = useStyles()

  const {
    recent: { nodes: recent },
  } = props.data

  return (
    <Box
      id="portfolio"
      py={12}
      display='flex'
      justifyContent='center'
    >
      <Grid container direction='column' md={10} spacing={10}>
      {recent.map((i) => {
        return (
          <Grid item container key={i.id} spacing={2}>
            <Grid item lg={6} xs={12}>
              <Hidden xsDown>
                <video autoPlay loop muted playsInline>
                  <source src={i.cover.file.url} type="video/mp4" />
                </video>
              </Hidden>
            </Grid>
            <Grid item container lg={6} xs={12} direction="column">
              <Grid item>
                <Typography>{i.title}</Typography>
              </Grid>
              <Grid item>
                <Typography>{i.intro.internal.content}</Typography>
              </Grid>
              <Grid item container spacing={1}>
                {i.skills.map((i) => {
                  return (
                    <Grid item key={i}>
                      <Chip
                        className={classes.chip}
                        label={i}
                        color="primary"
                        size="small"
                        variant="outlined"
                      ></Chip>
                    </Grid>
                  )
                })}
              </Grid>
              <Grid item container spacing={1}>
                <Grid item>
                  <Button>
                    <Link to={`/portfolios/${i.Slug}`}>Visit</Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button>
                    <Link to={`/portfolios/${i.Slug}`}>Visit</Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      })}</Grid>
    </Box>
  )
}

export default Portfolio
