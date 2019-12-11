import React from "react";

export class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOfMovies: [] };
  }

  componentDidMount() {
    const apiKey = "121486b23802e0b6735125ff1892f340";
    const baseUrl = "https://api.themoviedb.org/3/";
    const url = `${baseUrl}discover/movie?api_key=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(movie => {
        this.setState({ listOfMovies: movie.results });
      });
  }
  render() {
    console.log(this.state.listOfMovies);
    return (
      <div className="fetch">
        {/* <ul>
                    {this.state.listOfMovies.map((result, index) => {
                        return 
                        <li key={index}>{result.original_title}</li>
                    })}
                </ul> */}

        {/* 
                <ul>
                    {this.state.listOfMovies.map((result, index) => {
                        return 
                        <div key={index}>
                            <li >{result.original_title}</li>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} alt={result.original_title} />
                                <p>{result.overview}</p>
                            </div>
                        </div>
                    })}
                </ul> */}

        <ul>
          {this.state.listOfMovies.map((result, index) => (
            <div className="card" key={index}>
              <li>{result.original_title}</li>
              <div className="infoCard">
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                  alt={result.original_title}
                />
                <p>{result.overview}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
