import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AvatarImg from "../images/Avatar.jpg"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
//import Image from "gatsby-image"

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    borderBottom: "1px solid black",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
    border: "1px solid black",
  },
  card: {
    //backgroundColor: theme.palette.grey[50],
    height: 440,
    //border: "1px solid black",
  },
  title: {
    height: "45%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: "1",
  },
  image: {
    width: theme.spacing(8),
    paddingBottom: theme.spacing(2)
  }
}))

const Hero = (props) => {
  const {
    about: { nodes: about },
  } = props.data

  const classes = useStyles()

  //here the item property has to be added, as it has a parent Grid container
  return (
    <Box className={classes.hero}>
      <Grid container spacing={2} id="hero">
        <Grid
          lg={4}
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar className={classes.avatar} src={AvatarImg}></Avatar>
          </Grid>
          <Grid item>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h5">Web Developer</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography>NS, CANADA</Typography>
                </ListItemText>
              </ListItem>
              <ListItemLink href="mailto:su2047@gmail.com" target="_blank">
                <ListItemIcon>
                  <MailOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography>su2047@gmail.com</Typography>
                </ListItemText>
              </ListItemLink>
            </List>
          </Grid>
        </Grid>
        <Grid item container lg={8} spacing={2}>
          {about.map((i, index) => {
            return (
              <Grid
                item
                sm={3}
                xs={6}
                key={index}
                container
                direction="column"
                spacing={2}
                className={classes.card}
              >
                <Grid item className={classes.title}>
                  <img alt='icons' src={i.icon.file.url} className={classes.image} />
                  <Typography variant="h5">{i.title}</Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  spacing={1}
                  justify="center"
                  className={classes.content}
                >
                  {i.points.map((item, index) => {
                    return (
                      <Grid item key={index}>
                        <Typography>
                          <span role="img" aria-label="emoji">
                            ◾{" "}
                          </span>
                          {item}
                        </Typography>
                      </Grid>
                    )
                  })}
                </Grid>
                {/* <Avatar src={i.icon.fluid.src} variant="circle" /> */}
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero
