import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";


function RecipeCard(recipe, Button, open, setOpen,callBack) {

  return (
    <Grid item key={recipe.id} xs={12} sm={6} md={4}>
      <Card height="100%" display="flex" flexDirection="column">
        <CardActionArea>
          <CardMedia
            image={recipe.image}
            title={recipe.title}
            style={{ paddingTop: "56.25%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {recipe.title}
            </Typography>
            <Typography
            display="inline"
            variant="body1"
            >
            {recipe.ingredients?recipe.ingredients.join(". "):recipe.extendedIngredients.map(ingredients => ingredients.original).join(". ")}
                            </Typography>
          </CardContent>
          </CardActionArea>
          {Button(recipe,open, setOpen,callBack)}
      </Card>
    </Grid>
  );
}

export default RecipeCard;
