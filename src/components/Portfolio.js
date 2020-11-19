import { Box, Button, Chip, Grid, Hidden, Typography, Link as MuiLink } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
//import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  cover: {},
  chip: {
    fontSize: "1rem",
    marginRight: "2px",
  },
  right: {
    padding: theme.spacing(1),
    border: "1px solid red",
  },
}))

const Portfolio = (props) => {
  const classes = useStyles()

  const {
    recent: { nodes: recent },
  } = props.data

  return (
    <Box id="portfolio" py={12} display="flex" justifyContent="center">
      <Grid container direction="column" md={10} spacing={10}>
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
                <Box pt={2} pr={4}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography paragraph variant='subtitle1'>{i.year}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">{i.title}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        {i.intro.internal.content}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>◾ {i.info[0]}</Typography>
                      <Typography>◾ {i.info[1]}</Typography>
                      <Typography>◾ {i.info[2]}</Typography>
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
                    <Grid item>
                      <Button>
                        <Link to={`/portfolios/${i.Slug}`}>Visit</Link>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Portfolio
