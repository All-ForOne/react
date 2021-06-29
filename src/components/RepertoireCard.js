import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';


const useStyles = makeStyles({
  root: {
    width: '30vh',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    height: 140,
    borderRadius: 6,
  },
  hideMedia: {
    display: 'none',
  },
});

export default function RepertoireCard(props) {
  const classes = useStyles();
  const { repertoire } = props;
  
  const textCardContentStyles = useN04TextInfoContentStyles();

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={repertoire.image}
            title={repertoire.title}
          />
          <CardContent>
            <TextInfoContent
            classes={textCardContentStyles}
            overline={repertoire.composer}
            heading={repertoire.title}
            body={repertoire.description}
          />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Show More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
