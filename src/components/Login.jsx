import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = async () => {
    const client_id = "d6e530309715467dbac12648ba1aa322";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYsfb-dFwYVNIrusoFJ0WNZoauiogC6hj8Cf-V2aCQuPLEAUxApka8rvfKyxqqd4_QiX5NRjm7KM9BrRS3w8ykanwoeQmCmVVnc35OGDLjPrW6cyryrNk1Xkeu9zyRts2Sz_EZk8Z9jYutN0YzRRmeZ5Ag0akoWYZAho8L7N6ovDAbleuTCmwAE5Z9rTqF/s320/logo.jpg"
        alt="logo"
      />
      <button onClick={handleClick}>Connect by Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1f002f;
  gap: 5rem;

  img {
    height: 20vh;
  }

  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #ffffff;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
