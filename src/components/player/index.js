import React, { Component } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { Creators as PlayerActions } from "../../store/ducks/player";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from "./styles";

import VolumeIcon from "../../assets/imges/volume.svg";
import ShuffleIcon from "../../assets/imges/shuffle.svg";
import BackwardIcon from "../../assets/imges/backward.svg";
import PlayIcon from "../../assets/imges/play.svg";
import PauseIcon from "../../assets/imges/pause.svg";
import ForwardIcon from "../../assets/imges/forward.svg";
import RepeatIcon from "../../assets/imges/repeat.svg";

class Player extends Component {
  render() {
    const { player, play, pause } = this.props;

    console.log(this.props);

    return (
      <Container>
        {!!player.currentSong && (
          <Sound url={player.currentSong.file} playStatus={player.status} />
        )}

        <Current>
          {!!player.currentSong && (
            <>
              <img
                src={player.currentSong.thumbnail}
                alt={player.currentSong.title}
              />

              <div>
                <span>{player.currentSong.title}</span>
                <small>{player.currentSong.author}</small>
              </div>
            </>
          )}
        </Current>

        <Progress>
          <Controls>
            <button>
              <img src={ShuffleIcon} alt="Shuffle" />
            </button>
            <button>
              <img src={BackwardIcon} alt="Bakckward" />
            </button>
            {!!player.currentSong && player.status === Sound.status.PLAYING ? (
              <button onClick={pause}>
                <img src={PauseIcon} alt="Pause" />
              </button>
            ) : (
              <button onClick={play}>
                <img src={PlayIcon} alt="Play" />
              </button>
            )}
            <button>
              <img src={ForwardIcon} alt="Forward" />
            </button>
            <button>
              <img src={RepeatIcon} alt="Repeat" />
            </button>
          </Controls>

          <Time>
            <span>1:37</span>
            <ProgressSlider>
              <Slider
                railStyle={{ background: "#404040", borderRadius: 10 }}
                trackStyle={{ background: "#1ed760" }}
                handleStyle={{ border: 0 }}
              />
            </ProgressSlider>
            <span>3:40</span>
          </Time>
        </Progress>

        <Volume>
          <img src={VolumeIcon} alt="volume" />
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#fff" }}
            handleStyle={{ display: "none" }}
            value={100}
          />
        </Volume>
      </Container>
    );
  }
}

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
