import {
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  projects: {
    border: "3px solid grey",
  },
  cover: {
    width: 180,
    height: 180,
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
    >
      <Grid item>
        <Typography variant="h4">Portfolio</Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.projects}
      >
        {recent.map((i) => {
          return (
            <Grid item key={i.id}>
              <Paper>
                <Card className={classes.card}>
                  <Image fluid={i.cover.fluid} className={classes.cover} />
                  <CardContent>
                    <Grid container spacing={1} direction="column">
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
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Portfolio
