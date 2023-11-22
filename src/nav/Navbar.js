import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import searchIcon from '../icons/search.png'
import homeIcon from '../icons/home.png'
import playMovieIcon from '../icons/play_movie.png'
import catalogMoviesIcon from '../icons/movies.png'
import genresIcon from '../icons/genres.png'
import historyIcon from '../icons/history.png'


function Navbar() {
let [navBars, setNavBars] = useState([
    { icon: searchIcon, text: 'Search'},
    { icon: homeIcon, text: 'Home'},
    { icon: playMovieIcon, text: 'TV Shows'},
    { icon: catalogMoviesIcon, text: 'Movies'},
    { icon: genresIcon, text: 'Genres'},
    { icon: historyIcon, text: 'Watch Later'}])
    return (
      < >
        <div className="sidebar">
        <Nav className="flex-column nav_header text-left">
        <Nav.Link href="#" style={{width:'80%'}}>
                          <div className="name">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            width={'60px'}
                            alt="Avatar"
                          />
                          Daniel
                          </div>
                    </Nav.Link>
          </Nav>

          <Nav className="flex-column nav_b" activeKey="/">
              {navBars.map((item, index) => {
                  return (
                      <Nav.Link key={index} href={item.text ==="Home" ? '/' : '#'} style={{width:'80%'}}>
                          <img className="icon" src={item.icon}/>
                          <span className="name">{item.text}</span>
                    </Nav.Link>
                  )
                  
              })}
            
              
          </Nav>
          {/* <div className='nav_footer'> */}
            <Nav className="flex-column nav_footer text-left">
                        <Nav.Link href="#" style={{width:'80%'}}>
                            <span className="name">LANGUAGE</span>
                      </Nav.Link>
                      <Nav.Link href="#" style={{width:'80%'}}>
                            <span className="name">GET HElP</span>
                      </Nav.Link>
                      <Nav.Link href="#" style={{width:'80%'}}>
                            <span className="name">EXIT</span>
                      </Nav.Link>
            </Nav>
          
            {/* <div className='d-flex flex-column'>
              <a>LANGUAGE</a>
              <a>GET HElP</a>
              <a>EXIT</a>
            </div> */}
              
          {/* </div> */}

        </div>
      </>
    );
  }
  
  export default Navbar;