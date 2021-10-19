import React from 'react'
import Row from './Row'
import requests from './request'
import "./App.css"
import Banner from './Banner'
import Nav from './Nav'
export default function App() {
  return (
    <div className="App">
        <Nav />
        <Banner />

        <Row title="NETFILEX" fetchUrl={requests.fetchComedyMovies} isLargRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy movies" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Horror movies" fetchUrl={requests.fetchNetflixOriginals} isLargRow/>
        <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries movies" fetchUrl={requests.fetchDocumentaries}/>


    </div>
  )
}
