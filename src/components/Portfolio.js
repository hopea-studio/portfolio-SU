import {
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  projects: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  card: {
    display: "flex",
  },
  cover: {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    border: "1px solid black",
  },
  chip: {
    fontSize: "0.75rem",
    marginRight: "2px",
  },
}))

const Portfolio = (props) => {
  const classes = useStyles()

  const {
    recent: { nodes: recent },
  } = props.data

  return (
    <Grid
      item
      container
      direction="column"
      id="portfolio"
      className={classes.projects}
      lg={6}
      spacing={4}
    >
      {recent.map((i) => {
        return (
          <Grid item container key={i.id} spacing={2}>
            <Grid item sm={5}>
              <Image fluid={i.cover.fluid} className={classes.cover} />
            </Grid>
            <Grid item container sm={7} direction="column">
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
                  <Button variant="contained">
                    <Link to={`/portfolios/${i.Slug}`}>Visit</Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained">
                    <Link to={`/portfolios/${i.Slug}`}>Visit</Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Portfolio
