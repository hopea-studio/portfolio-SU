import {
  Box,
  Button,
  Chip,
  Grid,
  Hidden,
  Typography,
  Link as MuiLink,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
//import Link from "./Link"
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
      <Grid container direction="column" xs={11} md={10} lg={12} spacing={10}>
        {recent.map((i) => {
          return (
            <Grid item container key={i.id} spacing={2}>
              <Grid item xl={6} lg={8} xs={12} container justify="center">
                <Hidden xsDown>
                  <video autoPlay loop muted playsInline>
                    <source src={i.cover.file.url} type="video/mp4" />
                  </video>
                </Hidden>
              </Grid>
              <Grid item container xl={6} lg={4} xs={12} direction="column">
                <Box pt={2} pr={4}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        {i.year}
                      </Typography>
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
                      {i.info.map((item, index) => (
                        <Typography>
                          <Typography display="inline" variant="h6">
                            •
                          </Typography>{" "}
                          {item}
                        </Typography>
                      ))}
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
                        <MuiLink href={i.git}>
                          git
                          <span role="img" aria-label="emoji">
                            {" "}
                            🔗
                          </span>
                        </MuiLink>
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
