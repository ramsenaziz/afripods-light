import React from "react";
import { Route, Link } from "react-router-dom";
import dateFormat from "dateformat";
import episodesJSON from "../../assets/episodes.json";
import podcastsJSON from "../../assets/podcasts.json";

const episodes = episodesJSON;
const podcasts = podcastsJSON;

class Home extends React.Component {
  state = {
    episodes,
    podcasts
  };

  render() {
    const { episodes, podcasts } = this.state;
    return (
      <Route>
        <div className="list-container">
          <div className="list">
            <h2>All podcasts</h2>
            <ul>
              {podcasts.map(podcast => {
                return (
                  <li key={podcast.id}>
                    <Link
                      className="list-item"
                      to={{
                        pathname: `/podcast/${podcast.title}`,
                        state: {
                          episodes,
                          title: podcast.title,
                          description: podcast.description,
                          numberOfEpisodes: podcast.numberOfEpisodes
                        }
                      }}
                    >
                      <span>
                        <h3>{podcast.title}</h3>
                      </span>
                      <span>
                        <strong>Description: </strong>
                        {podcast.description.slice(0, 80)}...
                      </span>
                      <span>
                        <strong>Episodes: </strong>
                        {podcast.numberOfEpisodes}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="list-container">
          <div className="list">
            <h2>All episodes</h2>
            <ul>
              {episodes.map(episode => {
                return (
                  <li key={episode.id}>
                    <Link
                      className="list-item"
                      to={{
                        pathname: `/episode/${episode.title}`,
                        state: {
                          title: episode.title,
                          podcastTitle: episode.podcast.title,
                          description: episode.description,
                          duration: episode.duration,
                          created: episode.created
                        }
                      }}
                      value={episode.id}
                    >
                      <span>
                        <h3>{episode.title}</h3>
                      </span>
                      <span>
                        <strong>Description: </strong>
                        {episode.description.slice(0, 80)}
                        ...
                      </span>
                      <span>
                        <strong>Length: </strong>
                        {Math.round(episode.duration / 60)}
                        min
                      </span>
                      <span>
                        <strong>Released: </strong>

                        {dateFormat(episode.created, "dddd, mmmm dS, yyyy")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Route>
    );
  }
}

export default Home;
