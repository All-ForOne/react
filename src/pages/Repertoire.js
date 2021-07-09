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
import {getUserRepertoireList} from 'lib/api'

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
  
const Repertoire = (user) => {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
    const [open, setOpen] = React.useState(false);
    const [addRepertoireList, setAddRepertoireList] = React.useState([]);
    const [userRepertoireList, setUserRepertoireList] = React.useState([]);

    useEffect(() => {
      const loadUserRepertoireList = async () => {
        const repertoireList = await getUserRepertoireList(user);
        setUserRepertoireList(repertoireList);
      };
      
      loadUserRepertoireList();
    }, [addRepertoireList]);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const onAddSubmit = (addRepertoireList) => {
      //저장 필요
      //postUserRepertoire();
      setAddRepertoireList(addRepertoireList);
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
                      <RepertoireModal user={user} close={handleClose} onSubmit={onAddSubmit}/>
                    </Modal>
                  </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.mt25}/>
            <Grid container spacing={4} className={classes.mt25}>
                {userRepertoireList.map((repertoire) => (
                    <RepertoireCard key={repertoire.seq} repertoire={repertoire}/>
                ))}
            </Grid>
        </div>
    );
};

export default Repertoire;
