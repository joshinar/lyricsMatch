import React, { Component } from "react";
import axios from "axios";
import spinner from "../layout/spinner.gif";

export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: ""
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        this.setState({
          lyrics: res.data.message.body.lyrics.lyrics_body
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Lyrics</h1>
        <p>
          {this.state.lyrics !== "" ? (
            this.state.lyrics
          ) : (
            <img src={spinner} alt="loading..." className="d-block mx-auto" />
          )}
        </p>
      </div>
    );
  }
}
