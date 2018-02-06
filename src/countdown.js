import React, {Component} from 'react';
import './countdown.css';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
        }

        this.countdown();
    }

    countdown() {
        let _this = this,
            date = new Date("february 5, 2018 00:00:00").getTime();

        function count() {
            let actualDate = new Date().getTime(),
                gap = date - actualDate;

            _this.setState({days: Math.floor(gap / (1000 * 60 * 60 * 24))});
            _this.setState({hours: Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))});
            _this.setState({minutes: Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))});
            _this.setState({seconds: Math.floor((gap % (1000 * 60)) / 1000)});

        }
        setInterval(count, 1000);
    }

    render() {
        let state = this.state;

        return (
            <section className="clock">
                <Digits number={state.days} title="Days"/>
                <Digits number={state.hours} title="Hours"/>
                <Digits number={state.minutes} title="Minutes"/>
                <Digits number={state.seconds} title="Seconds"/>
            </section>
        );
    }
}

const Digits = (props) =>
    <article className="clock-digits">
        <div className="clock-numbers">{props.number}</div>
        <div>{props.title}</div>
    </article>
