import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import './customToolbar.css'
export default class CalendarToolbar extends Toolbar {

    componentDidMount() {
        const view = this.props.view;
        console.log(view)
    }

    render() {
        return (
            <div className="customToolbar">
                <div className="rbc-btn-group">
                    <button type="button" onClick={() => this.navigate('PREV')}>&lt;</button>
                    <button type="button" onClick={() => this.navigate('TODAY')}>NOW </button>
                    <button type="button" onClick={() => this.navigate('NEXT')}>&gt; </button>
                </div>
                <div className="rbc-toolbar-label">{this.props.label}</div>
                <div className="rbc-btn-group">
                    <FormControl >
                        <InputLabel htmlFor="uncontrolled-native">View</InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option onClick={this.view.bind(null, 'month')}>Month</option>
                            <option onClick={this.view.bind(null, 'week')}>Week</option>
                            <option onClick={this.view.bind(null, 'day')}>Day</option>
                            <option onClick={this.view.bind(null, 'agenda')}>Agenda</option>

                        </NativeSelect>

                    </FormControl>
                </div>
            </div>
        );
    }
}