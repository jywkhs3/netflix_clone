import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const movies = [
  {id:1,title:'no.1',image:'./images/movie1.jpeg',tag:'latest registered'},
  {id:2,title:'no.2',image:'./images/movie2.jpeg',tag:'latest registered'},
  {id:3,title:'no.3',image:'./images/movie3.jpeg',tag:'latest registered'},
  {id:4,title:'no.4',image:'./images/movie4.jpeg',tag:'latest registered'},
  {id:5,title:'no.5',image:'./images/movie5.jpeg',tag:'latest registered'},
  {id:6,title:'no.6',image:'./images/movie6.jpeg',tag:'latest registered'},
  {id:7,title:'no.7',image:'./images/movie7.jpeg',tag:'latest registered'},
  {id:8,title:'no.8',image:'./images/movie8.jpeg',tag:'latest registered'},
  {id:9,title:'no.9',image:'./images/movie9.jpeg',tag:'latest registered'},
  {id:10,title:'no.10',image:'./images/movie10.jpeg',tag:'latest registered'}
];

const MoveSlider = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
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
  return (
    <div className="move-slider">
      <h2>Trending Now</h2>
      <select>
        <option>South Korea</option>
        <option>Global</option>
      </select>
      <select>
        <option>Movies</option>
        <option>TV shows</option>
      </select>
      <Slider {...settings}>
        {
          movies.map((list,idx)=>{
            return <div className='movie-card' key={idx}>
              <img src={list.image} alt={list.title}></img>
              <p>{list.id}</p>
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default MoveSlider;