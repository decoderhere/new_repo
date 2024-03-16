import axios from 'axios' ;

export const loginSignup = (data)=> async(dispatch)=>{
  try {
    const config= { headers: { "Content-Type" : "multipart/form-data"  }}
    const data1= await axios.post("http://localhost:8000/sanjeev/register",data,config)
    console.log("hello",data1)
    dispatch({
        payload: data1,
        type: "REGISTER_FORM"
  })
  } 
  catch(err){
    dispatch({
      type: "REGISTER_FORM_FAIL" ,
      payload: err.response.data.message
})
  }
}

export const getallusers = ()=> async (dispatch)=>{

  try{
    const allusers= await axios.get("http://localhost:8000/sanjeev")
    console.log("all",allusers)
    dispatch({
      payload: allusers,
      type: "GET_ALL_DATA"
})
  }

  catch(err){
    dispatch({
      type: "GET_ALL_USERS_FAIL" ,
      payload: err.response.data.message
})
  }
}

