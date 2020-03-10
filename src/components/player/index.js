import React, { Component } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
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
    const { player } = this.props;
    return (
      <Container>
        {!!player.currentSong && (
          <Sound url={player.currentSong.file} playStatus={player.status} />
        )}
        {/* <Sound
          url=""
        /> */}

        <Current>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpz9c7qrYEluBY8OvRW4oRln_wgyhrvgo5gab9fVoGDCvwQ9t&s"
            alt="musica"
          />

          <div>
            <span>Times like these</span>
            <small>Foo fighters</small>
          </div>
        </Current>

        <Progress>
          <Controls>
            <button>
              <img src={ShuffleIcon} alt="Shuffle" />
            </button>
            <button>
              <img src={BackwardIcon} alt="Bakckward" />
            </button>
            <button>
              <img src={PlayIcon} alt="Play" />
            </button>
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
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
