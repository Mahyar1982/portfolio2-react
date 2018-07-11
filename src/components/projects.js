import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',
                    background:'url(https://lh3.googleusercontent.com/5q4odzEqeBbSQiQ5FdsxfnisOoUTNf4H11OcIM8xdjPqp57S2lG7ETReBdE-MgJIIg) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                    I have designed and created a mobile application for Adora to manage business-to-business real-time inventory and stock monitoring. Adora resellers can check the stock status of Adora products and see the detailed product descriptions. The app has also news, feedback and chat features.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://play.google.com/store/apps/details?id=com.mahya.adora_inventory&hl=en"
                        rel="noopenner noreferrer"
                        target="_blank">Check on Google Play</Button>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>        
                    </CardActions>    
                </Card>  

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',
                    background:'url(https://lh3.googleusercontent.com/SFCy94lXfeL65DvM4sxp4rEjp1WMl6eAPdHIK554OEgE6v_EiXQ0kk1U4fy39frHkw) center / cover'}}>

                    </CardTitle>
                    <CardText>
                    I have developed an application concept for restaurants and cafes that can be customized according to customer needs. The features of the application include, A menu with detailed descriptions and pictures, opening hours, table reservations, pick-up order, loyalty and promotions, various campaigns and reminders.
                    </CardText>
                    <CardActions border>
                    <Button colored href="https://play.google.com/store/apps/details?id=com.mahya.restaurant_sample"
                    rel="noopenner noreferrer"
                    target="_blank">Check on Google Play</Button>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>        
                    </CardActions>    
                    </Card>
                    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',
                    background:'url(https://lh3.googleusercontent.com/iJqew3nBP1apGfeJUapyHpRS2JWEFCF5XryMCP2IHm_chP8s9VQhOuMX2sNl1xs6unxq=s180-rw) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                    There is short description of My skills, studies, CV, and contact information.
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://play.google.com/store/apps/details?id=com.mahya.mahroid"
                        rel="noopenner noreferrer"
                        target="_blank">Check on Google Play</Button>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>        
                    </CardActions>    
                </Card>

                    </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',
                    background:'url(https://lh3.googleusercontent.com/SFCy94lXfeL65DvM4sxp4rEjp1WMl6eAPdHIK554OEgE6v_EiXQ0kk1U4fy39frHkw) center / cover'}}>

                    </CardTitle>
                    <CardText>
                    I have developed an application concept for restaurants and cafes that can be customized according to customer needs. The features of the application include, A menu with detailed descriptions and pictures, opening hours, table reservations, pick-up order, loyalty and promotions, various campaigns and reminders.
                    </CardText>
                    <CardActions border>
                    <Button colored href="https://itunes.apple.com/eg/app/lahti-restaurant/id1372581509?mt=8"
                    rel="noopenner noreferrer"
                    target="_blank">Check on App Store</Button>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>        
                    </CardActions>    
                    </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',
                    background:'url(https://lh3.googleusercontent.com/5q4odzEqeBbSQiQ5FdsxfnisOoUTNf4H11OcIM8xdjPqp57S2lG7ETReBdE-MgJIIg) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                    I have designed and created a mobile application for Adora to manage business-to-business real-time inventory and stock monitoring. Adora resellers can check the stock status of Adora products and see the detailed product descriptions. The app has also news, feedback and chat features.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://itunes.apple.com/eg/app/adora-inventory/id1368615879?mt=8"
                        rel="noopenner noreferrer"
                        target="_blank">Check on App Store</Button>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>        
                    </CardActions>    
                </Card> 

                    </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',
                    background:'url(http://www.appsolution.fi/wp-content/uploads/2018/07/cropped-logo-solution.jpg) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                    I have designed and created this website for Appsolute Solutions Finland Oy.
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </CardText>
                    <CardActions border>
                        <Button colored href="http://appsolution.fi"
                        rel="noopenner noreferrer"
                        target="_blank">Visit Website</Button>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>        
                    </CardActions>    
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',
                    background:'url(http://mahroid.com/wp-content/uploads/2018/02/imageedit_4_2605367403.jpg) center / cover'}}>
                    
                    </CardTitle>
                    <CardText>
                    I have designed and created this website for Mahroid Oy.
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </CardText>
                    <CardActions border>
                        <Button colored href="http://mahroid.com/"
                        rel="noopenner noreferrer"
                        target="_blank">Visit Website</Button>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>        
                    </CardActions>    
                </Card>

                </div>
            )
        }

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}
                onChange={(tabId) => this.setState({ activeTab: tabId})}
                ripple >
                    <Tab>Android</Tab>
                    <Tab>iOS</Tab>
                    <Tab>WordPress</Tab>
                </Tabs>

              
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>    
                             
            </div>    
        );
    }
}

export default Projects;