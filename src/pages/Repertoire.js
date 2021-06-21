import React from 'react';
import RepertoireCard from 'components/RepertoireCard';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const featuredPosts = [
    {
      repertoire_id: '1',
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      repertoire_id: '2',
      title: 'Post title',
      date: 'Nov 11',
      composer: '',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      repertoire_id: '3',
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      repertoire_id: '4',
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      repertoire_id: '5',
      title: 'Post title',
      date: 'Nov 11',
      composer: '',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      repertoire_id: '6',
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

const useStyles = makeStyles({
    root: {
      width: 300,
    },
    media: {
      height: 140,
    },
    mt25: {
        marginTop: 25,
    },
    searchField: {
        width: '100%',
    },
    selectField: {
        width: 100,
    },
  });
  
const Repertoire = () => {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                <TextField id="outlined-basic" label="search your repertoire" variant="outlined" className={classes.searchField} size="small"/>
                </Grid>
                <Grid item xs={4}>
                <TextField
                id="filled-select-currency"
                select
                label="composer"
                value={currency}
                onChange={handleChange}
                variant="outlined"
                size="small"
                className={classes.selectField}
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                </Grid>
                <Grid item xs>
                  <Grid container justify="flex-end" alignItems="center">
                    <Button variant="outlined" color="primary">
                      New
                    </Button>
                  </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.mt25}/>
            <Grid container spacing={4} className={classes.mt25}>
                {featuredPosts.map((repertoire) => (
                    <RepertoireCard key={repertoire.repertoire_id} repertoire={repertoire} />
                ))}
            </Grid>
        </div>
    );
};

export default Repertoire;
