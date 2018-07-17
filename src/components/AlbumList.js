import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then( response => this.setState({ albums: response.data }))
    }

    render() {
        return (
            <View>
                {this.state.albums.map( (album, i) => <AlbumDetail key={i} { ...album } />)}
            </View>
        );
    }
}

export default AlbumList;