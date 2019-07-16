import React, { Component } from 'react'

export default class Clock extends Component {
    state = { hours: 0, mins: 0, sec: 0 }
    render() {
        return <div><p>{this.state.hours}:{this.state.mins}:{this.state.sec}</p></div>
    }

    tick = () => {
        this.setState({
            hours: new Date().getHours(),
            mins: new Date().getMinutes(),
            sec: new Date().getSeconds()
        })
    }


    componentDidMount() {
        setInterval(() => {
            this.tick()
        }, 1000);
    }
}

