
import React from 'react';
import requests from './request';
import './App.css';
import Row from './Row';
import  Banner  from "./Banner";
import Navbar from "./Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
     {/* <h1>Clearance Movie App</h1> */}
     <Row title="NETFILX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action" fetchUrl={requests.fetchActionMovies} />
    <Row title="Commedy" fetchUrl={requests.fetchCommedyMovies} />
    <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romantic" fetchUrl={requests.fetchRomanticMovies} />
    <Row title="Documentaries" fetchUrl
    ={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
