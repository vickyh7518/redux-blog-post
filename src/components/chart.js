import React, { Component } from 'react';

class Chart extends Component {
    constructor (props) {
        super(props);
        this.communities = [
            [
                'AskReddit',
                'RocketLeague',
                'NoStupidQuestions',
                'explainlikeimfive',
                'bestoflegaladvice'
            ],
            [
                'wholesomememes',
                'Eyebleach',
                'Rabbits',
                'guineapigs',
                'MEOW_IRL',
            ]
        ]
    }

    renderCommunities() {
        return (
            <div>
                <div className='v-card'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
                    </div>
                    <h3>Top Discussion Communities</h3>
                    <ul>
                        {this.communities[0].map((c, index) => {
                            return (
                                <li className='item'>
                                    <div className='content'>
                                        <strong>{index+1}</strong>
                                        r/{c}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='v-card'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
                    </div>
                    <h3>Top  Aww  Communities</h3>
                    <ul>
                        {this.communities[1].map((c, index) => {
                            return (
                                <li className='item'>
                                    <div className='content'>
                                        <strong>{index+1}</strong>
                                        r/{c}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    
    render() {
        return (
        <div className="v-chart">
            {this.renderCommunities()}
        </div>
        )
    }
};

export default Chart;