import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';

  const featuredPosts = [
    {
      id: 0,
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: 1,
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: 2,
      title: 'Post title',
      date: 'Nov 11',
      composer: '',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: 3,
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: 4,
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: 5,
      title: 'Post title',
      date: 'Nov 11',
      composer: '',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: 6,
      title: 'Irlandaise',
      date: 'Nov 12',
      composer: 'Claude Bolling',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '100vh',
    },
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      overflowY: 'scroll',
      height: '40vh',
    },
    mt25: {
      marginTop: '25px',
    },
    mb25: {
      marginBottom: '25px',
    },
    searchField: {
        width: '100%',
    },
  }));
  
const RepertoireModal = (props) => {
    const classes = useStyles();
    
    const handleClose = props.close;

    const onFormSubmit = e => {
      e.preventDefault();
      props.onSubmit(checked);
      handleClose();
    }

    const [modalStyle] = React.useState(getModalStyle);

    const [checked, setChecked] = React.useState();

    const handleToggle = (repertoire) => () => {
      function findCheckedMusic(element)  {
        if(element.id === repertoire.id) return true;
      }

      const currentIndex = checked != null ? checked.findIndex(findCheckedMusic) : -1;
      const newChecked = checked != null ? [...checked] : []; 

      if (currentIndex === -1) {
        //새로 체크하는 값 추가
        newChecked.push(repertoire);
      } else {
        //체크되어있던 값 삭제
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };

    const clickLinkHandler = (link) => () => {
      window.open(link, '_blank');
    };

    const isChecked = (repertoire_id) => {
      if(checked != null)
        return checked.findIndex((item)=> item.id == repertoire_id) !== -1;
      return false;
    };

    return (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Music List</h2>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
          <TextField id="outlined-basic" label="search music" variant="outlined" className={classes.searchField} size="small"/>
          </Grid>
        </Grid>
        <Divider className={classes.mt25}/>
        <List className={classes.root}>
          {featuredPosts.map((repertoire) => {
            const labelId = `checkbox-list-label-${repertoire.id}`;
            return (
              <ListItem key={repertoire.id} role={undefined} dense button onClick={handleToggle(repertoire)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={isChecked(`${repertoire.id}`)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${repertoire.composer} / ${repertoire.title}`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="link">
                    <LinkIcon onClick={clickLinkHandler(`${repertoire.image}`)}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Divider className={classes.mb25} />
        <Grid container direction="row" justify="center" className={classes.mb25} spacing={3}>
          
            <Grid item ><Button variant="contained" onClick={onFormSubmit} color="primary">ADD</Button></Grid>
            <Grid item ><Button variant="contained" onClick={handleClose}>CANCLE</Button></Grid>
          
        </Grid>
      </div>
    );
};

export default RepertoireModal;