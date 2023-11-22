import { useState, useEffect, useRef} from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moviesData from './data.json'
import './MovieCarousel.css'
import Button from 'react-bootstrap/Button';



function MovieCarousel() {
    const sliderRef = useRef(null);
    let [movies, setMovies] = useState(moviesData.TendingNow)
    let [settings, setSettings] = useState({
        dots: false,
        infinite: false,
        nextArrow: null,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 968,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      })
    let [currentMovie, setCurrentMovie] = useState(moviesData.Featured)
    let [isShowVideo, setIsShowVideo] = useState(false)


    function convertSecondsToHoursMinutes(seconds) {
        let hours = Math.floor(seconds / 3600);
        let remainingSeconds = seconds % 3600;
        let minutes = Math.floor(remainingSeconds / 60);
      
        return hours + "h " + minutes + "m";
      }
      function handleClick(event) {
          let selectedMovie = movies.find(el => el.Id == Number(event.target.id))
          setIsShowVideo(false)
          setCurrentMovie(selectedMovie)
          sessionStorage.setItem('lastMovieId',event.target.id)
      }
      useEffect(() => {
          if(sessionStorage.getItem('lastMovieId')) {
            let selectedMovie = movies.find(el => el.Id == JSON.parse(sessionStorage.getItem('lastMovieId')))
            const selectedIndex = movies.findIndex(el => el.Id == JSON.parse(sessionStorage.getItem('lastMovieId')))
            console.log(selectedIndex)
            setCurrentMovie(selectedMovie)
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(selectedIndex);
              }
          }
      },[])
    return (
        <div className='main_body'>
            {isShowVideo ?
                (
                    <div>
                    <video style={{width: '100%'}} controls>
                        <source src={currentMovie.VideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                ):(
                    <img style={{width: '93vw', height: '100vh'}} src={require(`./images/${currentMovie.CoverImage}`)} alt={currentMovie.Title}/>
                )
            }
            <div className='m_description text-left'>
                <h2>{currentMovie.Category}</h2>
                <img style={{width: '100%'}} src={require(`./images/${currentMovie.TitleImage}`)} alt={currentMovie.Title}/>
                <h4><span className='mr-8'>{currentMovie.ReleaseYear}</span><span className='mr-8'>{currentMovie.MpaRating}</span><span className='mr-8'>{convertSecondsToHoursMinutes(currentMovie.Duration)}</span></h4>
                <h4>{currentMovie.Description}</h4>
                <Button className='btn w-120' variant="light" onClick={()=> setIsShowVideo(true)}><i className="bi bi-play-fill"></i> Play</Button>
                <Button className='btn w-120 ml-15' variant="primary">More Info</Button>
            </div>
            <div className='footer_carousel'>
                <h2 className='text-left'>Trending Now</h2>
                <Slider ref={sliderRef} {...settings}>
                    {movies.map((movie,index) => (
                    <div key={index} >
                        <img
                        onClick={handleClick}
                        style={{width: '96%'}}
                        src={require(`./images/${movie.CoverImage}`)}
                        alt={movie.Title}
                        id={movie.Id}
                        />
                    </div>
                    ))}
                </Slider>
            </div>
       
        </div>
      );
  }
  
  export default MovieCarousel;