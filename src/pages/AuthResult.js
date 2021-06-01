import axios from 'axios'; // 액시오스
import React from 'react'

const AuthResult = () => {
    const click = () =>{
        console.log(window.location.href);
        console.log(window.location.search);
        let urlElements = window.location.search.split('&');
        const authCode = urlElements[0].split('=')[1]; 
        
        axios(
            {
                url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
                method: "post",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                data:{
                    "code" : authCode,
                    "client_id" : "545f917f-11ee-4e98-acb9-2a607c368be3",
                    "client_secret" : "1616efd4-f04b-4bda-bbc6-f100229d53c0",
                    "redirect_uri" : "http://localhost:3000/authResult",
                    "grant_type" : "authorization_code"
                }
            }
            ).then(function (response) {
                console.log(response);
        });
        
    }
    return (
        <div>
            홈
            <h1 onClick={click}>
            click
            </h1>
        </div>
    );
};

export default AuthResult;

/*
token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwNzczMTQ5Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjI5MTk4ODEzLCJqdGkiOiI5YWRmODE4Ni1iMDI4LTQyNGMtYTE3Yi02YmI1NDE1OWY5ZDMifQ.tyfUa1hl2pYohmekHFs-vyYf0VVoJigvN3r0H79q2ns
refresh token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwNzczMTQ5Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjMwMDYyODEzLCJqdGkiOiI2YjFjNDg5MC05ZjdhLTQ2ZmItODg0Ni00MDY1MmQ4YzMwZmEifQ.wE25wqT-kt3dUpay2cLc9UIK9d9v8KwSIUeNA9rjb9I
user_seq_no : 1100773149
*/
