import React,  {useState, useEffect } from "react";
import customAxios from '../customAxios';
import { makeStyles } from '@material-ui/core/styles';

const Profile = ({ user }) => {
  const useStyles = makeStyles((theme) => ({
    profile: {
      flexGrow: '3',
      textAlign: 'end'
    },
  }));

  const classes = useStyles();

  const { email } = user || {};
      
  // IP주소 변수 선언
  const [ip, setIp] = useState('');

  // IP주소 값을 설정합니다.
  function callback(data) {
    setIp(data);
  }

  
  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      customAxios('/ip', callback);
    }, []
  );
    
  return (
        <div className={classes.profile} >
        <h1>Profile</h1>
        <dt>Email</dt>
        <dd>{user}</dd>
        <dt>Name</dt>
        <dd></dd>
        {ip}
      </div>
  );
};

export default Profile;