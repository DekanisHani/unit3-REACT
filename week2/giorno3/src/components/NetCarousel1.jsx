import { Component } from "react";
import Slider from "react-slick";
import NetCard from "./NetCard";
import { Link } from "react-router-dom";

const MY_APY = 'https://www.omdbapi.com/?apikey=d74ddba4&s='

//FETCH API
class NetCarousel1 extends Component {
  state = {
    movies: [],
  };
  getMovies = async () => {
    try {
      let response = await fetch(MY_APY + this.props.films);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movies: data.Search
        })
      }
    } catch (error) {
      alert('Si è verificato un errore')
    }
  };

  componentDidMount() {
    this.getMovies();
  }


  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
      swipeToSlide: true
    };
    //CAROSELLO (CLICK E TRASCINA)
    return (
      <div>
        
        <Slider {...settings}>

          {this.state.movies.map(movie => {
            return <NetCard key={movie.imdbID} movie={movie} />
          })}

        </Slider>
      </div>
    );
  }

};

export default NetCarousel1;

