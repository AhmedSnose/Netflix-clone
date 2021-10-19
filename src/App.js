// import Row from './Row'
import requests from './request'
// import Banner from './Banner'
// import Nav from './Nav'
import "./App.css"
import React , {Suspense} from 'react';
import LoadingSpinnerTow from './UI/LoadingSpinnerTow'

const Row = React.lazy(()=> import('./Row'))
const Banner = React.lazy(()=> import('./Banner'))
const Nav =  React.lazy(()=> import('./Nav'))

export default function App() {
  return (
    <Suspense fallback={
      <div className='centered'>
        <LoadingSpinnerTow />
      </div>
    }>
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
     </Suspense>

  )
}
