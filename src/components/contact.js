import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
               <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mahyar Mohammadi</h2>
                        <img src={require('../assets/mahyar1.jpg')} 
                        alt= ""avatar
                        style={{height: '250px'}}/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        Technical Manager of Appsolute Solutions Finland Oy</p>
                    
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                            <div className="contact-list">
                                <List>
                                <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                 +358 41 7 543 124</ListItemContent>
                                </ListItem>

                                <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                 mahyaar.mohammadi@gmail.com</ListItemContent>
                                </ListItem>

                                </List>
                            </div>
                        

                    </Cell>
               </Grid>
            </div>    
        );
    }
}

export default Contact;