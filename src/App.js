import React from  'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ContactList from './components/contactList';
import Form from './components/Form';

const styles = {
    bodyWrapper: {
        display: 'flex',
        height: '100vh'
    }
}

const app = () => {
    return(
        <BrowserRouter>
        <div className="App">
            <Header />
            <div style={styles.bodyWrapper}>
                <ContactList />
                <Switch>
                    <Route path='/:listId'component={Form} />
                    <Redirect from='/' to='/1' />
                </Switch>
            </div>    
        </div>
        </BrowserRouter>
    );
}

export default app;