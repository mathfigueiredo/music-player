import React from 'react';
import deezer from '../api/deezer';
import { connect } from 'react-redux';
import { fetchPopular } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchPopular();
  }

  //   fetchTrack = () => {
  //     deezer.get('/playlist/948759923').then((res) => console.log(res.data));
  //   };

  render() {
    return <div>Home</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { fetchPopular })(Home);