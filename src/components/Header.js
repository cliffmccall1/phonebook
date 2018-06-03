import React from 'react';

const styles = {
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 60,
        border: '1px solid black',
        backgroundColor: 'lightblue',
        fontWeight: 'bold'

    }
}

const header = () => 
    <div style={styles.header}>
        Contacts
    </div>

export default header;