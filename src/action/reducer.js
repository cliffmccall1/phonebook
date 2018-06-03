const initialState = {
    list: [
        {
            id: 1,
            name: 'Michael Scott',
            email: 'mscott@dundermiflin.com',
            phone: '123456789'
        },
        {
            id: 2,
            name: 'Leslie Knope',
            email: 'waffles@parks.com',
            phone: '1112223343'
        },
        {
            id: 3,
            name: 'Michael Bluth',
            email: 'm.b.@suddenvalley.com',
            phone: '3345556676'
        },
    ],
    name: '',
    email: '',
    phone: '',
    redirectTo: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LIST':
            const listItem = state.list.filter(item => item.id === parseInt(action.id, 10))
            return{
                ...state,
                name: listItem[0] ? listItem[0].name : '', 
                email: listItem[0] ? listItem[0].email : '',
                phone: listItem[0] ? listItem[0].phone : ''
            }
        case 'CAPTURE_INPUT':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'UPDATE':
            const updatedList = state.list.map(item => {
                if (item.id === parseInt(action.id, 10)) {
                    item.name = state.name;
                    item.email = state.email;
                    item.phone = state.phone;
                }
                return item;
            });
            return {
                ...state, 
                list: updatedList
            }
        case 'DELETE':
            const newList = state.list.filter(item => item.id !== parseInt(action.id, 10));
            return {
                ...state,
                list: newList,
                name: newList[0] ? newList [0].name : '',
                email: newList[0] ? newList [0].email : '',
                phone: newList[0] ? newList [0].phone : '',
                redirectTo: newList.length > 0 ? `/${newList[0].id}` : './1'
            }
        case 'ADD':
            let id;
            state.list.length > 0 ? id = state.list[state.list.length -1].id + 1 : id = 1;
            const newToDo = {id: id, name: state.name, email: state.email, phone: state.phone}
            return {
                ...state,
                list: state.list.concat(newToDo)
            }
        default:
            return state;
    }
}

export default reducer;