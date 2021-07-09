import axios from 'axios';


export const getUsers = () => axios.get('https://testapi.open-platform.or.kr/oauth/2.0/authorize2?response_type=code&client_id=545f917f-11ee-4e98-acb9-2a607c368be3&redirect_uri=http://localhost:3000/&scope=login&client_info=test&state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&auth_type=0');
export const signInTest = async ({ email, password }) => {
    const { data } = await axios.post('http://localhost:8080/authenticate', {
        email,
      password,
    });
    console.log(data);
    return data;
  };

export const getRepertoireList = async ({user}) => {
  const {data} = await axios.get('http://localhost:8080/repertoire?nickname='+user);
  return data;
  };

export const getUserRepertoireList = async ({user}) => {
  const {data} = await axios.get('http://localhost:8080/'+user+'/repertoire');
  return data;
  };  

export const postUserRepertoire = async ({user, repertoire_seq}) => {
  const {data} = await axios.post('http://localhost:8080/'+user+'/repertoire/'+repertoire_seq);
  return data;
  };  
  
    