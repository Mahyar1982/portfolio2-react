import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={require('../assets/mahyar1.jpg')}
                            alt="avatar"
                            style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '1em'}}>Mahyar Mohammadi</h2>
                        <h4 style={{color: 'grey'}}>Mobile Developers</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Android and iOS developer who has created some Android and iOS applications for customers, from consulting, planning, designing, implementing backend, publishing, supporting and etc. Some of them are published in Google play store and App store.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Ritaniemenkatu 10A, 117, 15240</p>
                        <h5>Phone</h5>
                        <p>+358 41 7 543 124</p>
                        <h5>Email</h5>
                        <p>mahyaar.mohammadi@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear=""
                            jobName="Technical Manager"
                            jobDescription="AppSolute Solutions Finland Oy"
                        />
                    <hr style={{borderTop: '3px solid #e22947'}} />    
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear=""
                            collegeName="LAMK"
                            collegeDescription="Business Information Technology (Bachelor Degree)"
                            />                    
                   <hr style={{borderTop: '3px solid #e22947'}} />    
                        <h2>Skills</h2>
                        <Skills
                            skill="Java"
                            progress={100}
                        />
                        <Skills
                            skill="Swift"
                            progress={90}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />


                    </Cell>
                </Grid>    
            </div>    
        );
    }
}

export default Resume;