import React, { Component, createElement } from "react";

import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import "./ui/MxScheduler.css";

const scheduler = window.scheduler;

export default class MxScheduler extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];

        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2020, 5, 10));
        scheduler.clearAll();
        scheduler.parse(events);
    }

    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100vh', height: '50vh' } }
            />
        );
    }
}
