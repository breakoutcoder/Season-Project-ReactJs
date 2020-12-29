import React from "react";
import '../css/SeasonDisplay.css';

class SeasonDisplay extends React.Component {

    seasonConfig = {
        summer: {
            text: "it's hot!",
            icon: 'sun'
        },
        winter: {
            text: 'Buddy, it\'s chill!',
            icon: 'snowflake'
        }
    }

    state = {lat: null, time: null, date: null};

    componentDidMount() {
        setInterval(() => {
            const date = new Date();
            this.setState({time: date.toTimeString(), date: date.toDateString()});
        });
        this.setState({lat: this.props.lat})
    }

    getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat < 0 ? 'summer' : 'winter';
        }
    }

    render() {
        const season = this.getSeason(this.state.lat, new Date().getMonth());
        const {text, icon} = this.seasonConfig[season];
        return (
            <div className={`season_display ${season}`}>
                <i className={`icon-left massive ${icon} icon`}/>
                <div>
                    <p>Today's date: {this.state.date}</p>
                    <h4>The Time is: {this.state.time}</h4>
                    <h1 className="seasonText">{text}</h1>
                </div>
                <i className={`icon-right massive ${icon} icon`}/>
            </div>
        );
    }
}

export default SeasonDisplay;