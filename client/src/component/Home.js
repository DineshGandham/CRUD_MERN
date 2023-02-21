import React,{useState,useEffect,useContext} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { adddata,upddata,deldata } from "./context/ContextProvider";

const Home = () => {

  const [getuserdata,setuserdata] =useState([]);
  console.log(getuserdata);

  
  
  const {udata,setUdata} = useContext(adddata);
  
  const {updata,setUpdata} = useContext(upddata); 
  
  const {dltdata,setDltdata} = useContext(deldata);


  const getdata =async(e)=>{
  
    const res = await fetch("/getdata",{
        method:"GET",
        headers:{
            "content-Type":"application/json"
        }

    });

    const details = await res.json();
    console.log(details);

    if(res.status === 422 || !details){
        console.log("error");
    }else{
      setuserdata(details)
        console.log("Get data")
    }
}
useEffect(() => {
  getdata();
},[])

const deleteuser =async (id)=>{

    const res2 = await fetch(`/deleteuser/${id}`,{
      method:"DELETE",
      headers:{
          "content-Type":"application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status === 422 || !deletedata){
      console.log("error");
    }else{
      console.log("user deleted");
      setDltdata(deletedata);
      getdata();
      
    }
}
  return (

    <>
     {
      udata ?
      <>
         <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{udata.name}</strong>added Sucessfully
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      </> : ""
     }
    {
      updata ?
      <>
         <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{updata.name}</strong> Updated Sucessfully
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      </> : ""
     }
     {
      dltdata ?
      <>
         <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{dltdata.name}</strong> Deleted Sucessfully
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      </> : ""
     }
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">Add Data</NavLink>
        </div>
          <table className="table" >
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Job</th>
                <th scope="col">Address</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                getuserdata.map((element,id)=>{
                  return(
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <th scope="row">{element.name}</th>
                      <th scope="row">{element.email}</th>
                      <th scope="row">{element.mobile}</th>
                      <th scope="row">{element.work}</th>
                      <th scope="row">{element.address}</th>
                      <th scope="row">{element.description}</th>
                      <th scope="row" className="d-flex justify-content-between">
                      <NavLink to={`view/${element._id}`}><button className="btn btn-outline-success"><RemoveRedEyeIcon /></button></NavLink>
                      <NavLink to={`/edit/${element._id}`}><button className="btn btn-outline-primary"><CreateIcon/></button></NavLink>
                      <button className="btn btn-outline-danger" onClick={()=>deleteuser(element._id)}><DeleteIcon/></button>
                      </th>
                    </tr>
                  </>
                  )
                })
              }
              
            </tbody>
          </table>
      </div>
    </div>
    </>
  );
};

export default Home;
