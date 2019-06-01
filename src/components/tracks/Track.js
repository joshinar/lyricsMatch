import React from "react";
import { Link } from "react-router-dom";
const Track = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play fa-2x" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc fa-2x text-danger" /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
            target="_blank"
          >
            <i className="fas fa-chevron-right fa-2x" /> View lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
