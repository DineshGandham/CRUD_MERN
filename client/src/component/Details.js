import React,{useState,useEffect} from 'react'
import { NavLink, useParams,useNavigate} from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {

  const [getuserdata,setuserdata] =useState([]);
  console.log(getuserdata);


  const {id} = useParams("");
   console.log(id);

   const navigate = useNavigate("");

  const getdata = async()=>{
  
    const res = await fetch(`/getuser/${id}`,{
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

useEffect(()=>{
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
    navigate ("/");


  }
}
  return (
    <div className='container mt-3'>
          <NavLink to="/">Home</NavLink>
        <h1 style={{fontweight:400}}>Welcome Dinesh</h1>
        <Card sx={{ maxWidth: 600 }}>
      <CardContent>
      <div className='add_btn'>
      <NavLink to={`/edit/${getuserdata._id}`}><button className="btn btn-outline-primary"><CreateIcon/></button></NavLink>
          <button className="btn btn-outline-danger" onClick={()=>deleteuser(getuserdata._id)}><DeleteIcon/></button>
        </div>
        <div className='row'>
        <div className='left_view col-lg-6 col-md-6 col-12'>
        <img src="/user.png" style={{width:50}} alt="profile" />
        <h3 className='mt-3'>Name:<span >{getuserdata.name}</span></h3>
        <h3 className='mt-3'>Age:<span >{getuserdata.age}</span></h3>
        <p><MailOutlineIcon/>Email:<span>{getuserdata.email}</span></p>
        <p><WorkIcon/>Occupation:<span>{getuserdata.work}</span></p>
        </div>
        <div className='right_view col-lg-6 col-md-6 col-12'>
          <p className='mt-5'><PhoneAndroidIcon/>Mobile: <span>+91 {getuserdata.mobile}</span></p>
          <p className='mt-3'><LocationOnIcon/>Location: <span>{getuserdata.address} </span></p>
          <p className='mt-3'>Description: <span>{getuserdata.description}</span></p>
        </div> 
        </div>
      </CardContent>
      </Card>
    </div>
  )
}

export default Details