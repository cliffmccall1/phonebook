import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
    contacts: {
        width: '80%',
        border: '1px solid black',
        backgroundColor: 'orange',
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'black',
    }
}
const contact = props => {
    const list = props.myList.map(item =>{
        return (
            <Link to={`${item.id}`} key={item.id}>
            <div style={styles.contacts}>
                <p><span>Name: </span>{item.name}</p>
                <p><span>Phone: </span>{item.phone}</p>
            </div>
            </Link>
        );
    } );
    return <div>{list}</div>
}

const mapStateToProps = state => {
    return {
        myList: state.list
    }
}

export default connect(mapStateToProps, null)(contact);