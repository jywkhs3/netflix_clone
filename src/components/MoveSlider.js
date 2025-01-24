import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from 'react';
import axios from 'axios';


const MoveSlider = () => {
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const fetchMovies = async()=>{
    const API_KEY='decc67e8f617c228c9c976bb05cd39ca';
    const url =`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
    try{
      const response = await axios.get(url);
      setMovies(response.data.results.slice(0,10));
      setIsLoading(false);
      // console.log(response);
    } catch(error){
      setError('An error occurred while fetching movie data.');
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    setIsLoading(true);
    fetchMovies();
  },[]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='btn-next'
        onClick={onClick}
      ><SlArrowRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='btn-prev'
        onClick={onClick}
      ><SlArrowLeft/></div>
    );
  }

  if(error){
    return <div>{error}</div>
  }
  if(isLoading){
    return <div>......Loading</div>
  }
  return (
    <div className="move-slider">
      {
        console.log(movies)
      }
      <h2>Trending Now</h2>
      <Slider {...settings}>
        {
          movies.map((list,idx)=>{
            return <div className='movie-card' key={idx}>
              <img src={`https://image.tmdb.org/t/p/w342${list.poster_path}`} alt={list.title}></img>
              <p>{idx+1}</p>
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default MoveSlider;