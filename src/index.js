import React         from 'react';
import ReactDOM      from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner       from "./components/Spinner";

class App extends React.Component {

    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message}),
        );
    }

    render() {
        if (this.state.lat === null && this.state.errorMessage === '') {
            return <Spinner message="Please Allow Location"/>;
        }
        if (this.state.lat === null || this.state.errorMessage !== '') {
            return <div style={{ border: '5px solid red'}}>Please Allow Location or Check Your Internet Connection</div>;
        }
        return (
            <div style={{ border: '5px solid #00FFA6'}}>
                <SeasonDisplay lat={this.state.lat}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));