import React, {Component} from 'react';
import Tab from "../components/Tab/Tab";
import Mheader from "../components/MHeader/MHeader";
import '../common/reset.less';

export default class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Mheader/>
                APP
                <Tab/>
            </div>
        )
    }
}
