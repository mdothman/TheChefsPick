import React, { Fragment } from "react";
import {Container,Grid,Card,CardMedia,CardContent,CardActions,Typography,Button } from "@material-ui/core"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Results(){


    return (
        <Fragment>
<Container maxWidth="md">
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card >
            <CardMedia
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Fragment>
    )}
