import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function CountryItem() {
  return (
    <Grid item lg={3} md={4} sm={6} xm={12}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image="https://countries.petethompson.net/data/flags/mda.svg"
            alt="Moldova"
          />
          <CardContent sx={{ padding: "1.5em" }}>
            <Typography gutterBottom variant="h6" component="div" mb={2} fontWeight={700}>
              Republic of Moldova
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Population:</strong> 4,433,433
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Region:</strong> Europe
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Capital:</strong> Chisinau
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CountryItem;