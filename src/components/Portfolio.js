import { Box, Button, Card, CardContent, CardMedia, Chip, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  projects: {
    border: "2px solid grey",
    borderRadius: "10px",
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
      alignItems="center"
      spacing={4}
      id="portfolio"
    >
      <Grid item>
        <Typography variant="h4">Portfolio</Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        spacing={2}
        md={8}
        sm={10}
        xs={12}
        className={classes.projects}
      >
        {recent.map((i) => {
          return (
            <Grid item key={i.id}>
              <Paper>
                <Card className={classes.card}>
                  <Image
                    fluid={i.cover.fluid}
                    className={classes.cover}
                  />
                  <CardContent>
                    <Typography>{i.title}</Typography>
                    <Typography>{i.intro.internal.content}</Typography>
                    <Box display="flex" flexWrap="wrap" mt={1}>
                      {i.skills.map((i) => {
                        return (
                          <Chip
                            key={i}
                            className={classes.chip}
                            label={i}
                            color="primary"
                            size="small"
                            variant="outlined"
                          ></Chip>
                        )
                      })}
                    </Box>
                    <Button variant="contained">
                      <Link to={`/portfolios/${i.Slug}`}>Gallary</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          )
        })}
        <Grid item container justify="center">
          <Grid item>
            <Button variant="outlined">
              <Link to="/portfolios/"> Get a full list of the portfolio</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
