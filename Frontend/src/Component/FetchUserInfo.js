import { useEffect, useState } from "react";
import axios from "axios";

const FetchUserInfo = () => {
 
    const[msg,setMsg] = useState();

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/message")
        .then(res=>{
            setMsg(res.data.message);
        })
        .catch(err=>console.log(err));
    },[])

    return(<>
              <p>{msg}</p>
          </>);
    
}

export default FetchUserInfo;