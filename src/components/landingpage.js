import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <cell col={12}>
                        <img
                            src={require('../assets/mahyar.JPG')}
                            alt="avatar"
                            className="avatar-image"
                        />

                        <div className="banner-text">
                            <h1>Mobile Developer</h1>
                            <hr/>
                            <p>Android | iOS | React</p>
                            <div className="social-links">
                                <a
                                href="https://www.linkedin.com/in/mahyar-mohammadi-476aab133/"
                                rel="noopenner noreferrer"
                                target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a
                                href="https://github.com/Mahyar1982"
                                rel="noopenner noreferrer"
                                target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a
                                href="https://stackoverflow.com/users/7350298/mahyar"
                                rel="noopenner noreferrer"
                                target="_blank">
                                    <i className="fa fa-stack-overflow" aria-hidden="true" />
                                </a>

                            </div>    
                        </div>
                    </cell>
                </Grid>               
            </div>    
        );
    }
}

export default Landing;