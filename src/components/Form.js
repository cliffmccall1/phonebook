import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
    form: {
        width: '80%',
        border: '1px solid black',
        backgroundColor: 'lightgreen',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        padding: 100,
        border: '1px solid black',
        backgroundColor: 'mediumslateblue'
    },
    delete: {
        borderRadius: '12px',
        padding: '12px',
        background: 'red',
        border: '1px white solid'
    },
    update: {
        borderRadius: '12px',
        padding: '12px',
        background: 'white',
        border: '1px white solid'
    },
    add:{
        padding: '10px 10px',
        borderRadius: '12px',
        color: 'black',
        padding: '12px',
        background: 'green',
        border: '1px white solid',
        display: 'flex',
    },
}

class Form extends Component {
    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId)
    }
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.listId !== newProps.match.params.listId) {
            this.props.onListChange(newProps.match.params.listId);
        }
    }
    componentDidUpdate(prevProps){
        if (this.props.redirectTo !== prevProps.redirectTo) {
            this.props.history.push(this.props.redirectTo)
        }
    }


    submit(e){
        e.preventDefault();
    }
    focus(e) {
        e.target.value ='';
    }
    render () {
        const {listId} = this.props.match.params,
            {name, email, phone, onInputChange, onUpdate, onDelete, onAdd}= this.props;
        return (
            <form style={styles.form} onSubmit={this.submit}>
                <div style={styles.inputs}>
                    <label>Name: <input 
                    type='text' 
                    name= 'name'
                    value={name}
                    onFocus={this.focus}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                <br />
                    <label>Email: <input 
                    type='text' 
                    name= 'email'
                    value={email} 
                    onFocus={this.focus}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                <br />
                <label>Phone: <input 
                    type='text' 
                    name= 'phone'
                    value={phone} 
                    onFocus={this.focus}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                <br />
                    <input style={styles.update} type='button' value='Update' onClick={() => onUpdate(listId)}/>
                    <input style={styles.delete} type='button' value='Delete' onClick={() => onDelete(listId)}/>
                <br />    
                    <input style={styles.add} type='button' value='Add' onClick={onAdd}/>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.list,
        name: state.name,
        email: state.email,
        phone: state.phone,
        redirectTo: state.redirectTo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({type: 'CHANGE_LIST', id}),
        onInputChange: (name, value) => dispatch({type: 'CAPTURE_INPUT', payload: {name, value}}),
        onUpdate: (id) => dispatch({type:'UPDATE', id}),
        onDelete: (id) => dispatch({type:'DELETE', id}),
        onAdd: () => dispatch({type:'ADD'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);