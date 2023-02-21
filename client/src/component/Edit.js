import React,{useContext,useState,useEffect} from 'react'
import { NavLink,json,useParams,useNavigate } from 'react-router-dom'
import { upddata } from './context/ContextProvider';


const Edit = () => {

    // const [getuserdata,setuserdata] =useState([]);
    // console.log(getuserdata);

    const {updata,setUpdata} = useContext(upddata);

    const navigate = useNavigate("");

    const[data,setData]=useState({
        name:'',
        email:'',
        age:'',
        mobile:'',
        work:'',
        address:'',
        description:''
    });
    
    const setdata =(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    } 
    const submitData=(e)=>{
        e.preventDefault();
        console.log(data)
    }


    const {id} = useParams("");
    console.log(id);
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
        setData(details)
         console.log("Get data")
     }
 }

 useEffect(()=>{
    getdata();
  },[])

    const updateuser =async(e)=>{
        e.preventDefault();
        const {name,email,mobile,address,work,description,age} = data;
        const res2 = await fetch(`/updateuser/${id}`,{
            method:"PATCH",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,mobile,address,work,description,age
            })
        });
        const data2 = await res2.json();
        console.log(data2);
        if(res2.status === 422|| !data){
            alert("fill the data")
        }else{
            // alert("Data Updated")
            navigate ("/");
            setUpdata(data2);
        }
    }
  return (
    <div className='container'>
    <NavLink to="/">Home</NavLink>
    <form className='mt-4' onSubmit={submitData}>
    <div className='row'>
    <div className="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="exampleInputName" className="form-label">Name</label>
        <input type="text"  name="name" className="form-control" id="exampleInputName" onChange={setdata} value={data.name} />
    </div>
    <div className="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="exampleInputEmail" className="form-label">email</label>
        <input type="email" name="email" className="form-control" id="exampleInputEmail" onChange={setdata} value={data.email}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="exampleInputAge" className="form-label">age</label>
        <input type="text" name="age" className="form-control" id="exampleInputAge" onChange={setdata} value={data.age}/>
    </div>
    <div className="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
        <input type="number" name="mobile" className="form-control" id="exampleInputMobile" onChange={setdata} value={data.mobile}/>
    </div>
    <div className="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="exampleInputWork" className="form-label">Work</label>
        <input type="text" name="work" className="form-control" id="exampleInputWork" onChange={setdata} value={data.work}/>
    </div>
    <div className="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="exampleInputAddress" className="form-label">address</label>
        <input type="text" name="address" className="form-control" id="exampleInputAddress" onChange={setdata} value={data.address}/>
    </div>
    <div className="mb-3 col-lg-12 col-md-12 col-12">
        <label htmlFor="exampleInputDescription" className="form-label">Description</label>
        <textarea className="form-control" name="description" rows="3" cols="20" onChange={setdata} value={data.description}></textarea>
    </div>
    <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
    </div>
    </form>
</div>
  )
}

export default Edit