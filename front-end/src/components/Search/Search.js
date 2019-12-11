// this component has not been completed yet

import React from 'react';

export class Fetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { movie: [] };
    }
    onChange(e){
    this.setState({movie:e.target.value})
    }
  
    componentDidMount() {
      const apiKey = "121486b23802e0b6735125ff1892f340";
      const baseUrl = "https://api.themoviedb.org/3/";
      const url = `${baseUrl}search/movie?api_key=${apiKey}`;
      let movieName = params.movie;
  
      fetch(url)
        .then(res => res.json())
        .then(movie => {
          this.setState({ listOfMovies: movie.results });
        });
    }
    render() {
        return <div className='search'>
            <input type="text" onChnage={this.onChange} value={this.state.movie}></input>
            
        </div>
    }
}