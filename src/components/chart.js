import React, { Component } from 'react';

class Chart extends Component {
    constructor (props) {
        super(props);
        this.communities = [
            'AskMen',
            'AskReddit',
            'NoStupidQuestions',
            'explainlikeimfive',
            'bestoflegaladvice'
        ];
    }
    
    render() {
        console.log(this.communities);
        return (
        <div className='v-chart'>
            <div className='v-card'>
                <h3>Top Discussion Communities</h3>
                <ul>
                    {this.communities.map((community, index) => {
                        return (
                            <li className='item'>
                                <div className='content'>
                                    <strong>{index+1}</strong>
                                    r/{community}
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
        )
    }
};

export default Chart;