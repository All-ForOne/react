import React, {useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import RepertoireCard from 'components/RepertoireCard';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RepertoireModal from 'pages/RepertoireModal'

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

const useStyles = makeStyles((theme) => ({
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
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
const Repertoire = () => {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
    const [addList, setAddList] = React.useState([]);

    useEffect(() => {
      console.log(addList);
      //팝업 닫히고 난 후 data 저장 및 화면에 추가하기
    }, [addList]);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const onAddSubmit = (text) => {
      setAddList(text);
      featuredPosts.push(text);
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
                    <Button variant="outlined" color="primary" onClick={handleOpen}>
                      New
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <RepertoireModal close={handleClose} onSubmit={onAddSubmit}/>
                    </Modal>
                  </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.mt25}/>
            <Grid container spacing={4} className={classes.mt25}>
                {featuredPosts.map((repertoire) => (
                    <RepertoireCard key={repertoire.repertoire_id} repertoire={repertoire}/>
                ))}
            </Grid>
        </div>
    );
};

export default Repertoire;
