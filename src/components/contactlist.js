import React from 'react';
import Contact from './contact';

const styles = {
    contactList: {
        width: '40%',
        border: '1px solid black',
        padding: '50px 30px',
        overflow: 'scroll',
        backgroundColor: 'lightgreen'
    }
}

const contactList = () => <div style={styles.contactList}><Contact/> </div>

export default contactList;