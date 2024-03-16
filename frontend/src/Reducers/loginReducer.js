

export const loginReducer = (state={user:{}},action) => {
    switch (action.type) {
        case "REGISTER_FORM" :
            return (
                {...state, user:action.payload,loading: false,
                    isAuthenticated: true,}
            )

        case "REGISTER_FORM_FAIL" :
            return (
                {
                    loading: false,
                    isAuthenticated: false,
                    user : null
                }
                )
       
        
            default: 
            return (
                {loading: true,
                    isAuthenticated: false,}
            )  
        
    }
    
    
    }

export const getAllStudents = (state={allUsers:{}},action) => {

        switch(action.type){
            case "GET_ALL_DATA" :
            return (
                {
                  ...state,
                  allUsers: action.payload,
                  isAuthenticated: true,
                }
            )
            case "GET_ALL_USERS_FAIL" :
                return ({
                    ...state, 
                    allUsers: null,
                    isAuthenticated: false
                })
                default: 
                return (
                    {loading: true,
                    isAuthenticated: false,}
                )  
        }

    }