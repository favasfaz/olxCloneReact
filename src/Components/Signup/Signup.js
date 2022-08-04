import React,{useState,useContext} from 'react';
import {addDoc, collection, doc,getDoc,onSnapshot} from 'firebase/firestore'
import {useHistory,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../Store/FirebaseContext';
import './Signup.css';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { async } from '@firebase/util';


export default function Signup() {

const [userName,setUserName] = useState('')
const [userEmail,setUserEmail] = useState('')
const [userPhone,setUserPhone] = useState('')
const [userPassword,setUserPassword] = useState('')

const history = useHistory()

const {db} = useContext(firebaseContext)
const submitHandler =(e)=>{
  e.preventDefault();
  const auth = getAuth();
  const email =userEmail
  const password = userPassword


createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
  
    const colRef = collection(db,'users') 
     await addDoc(colRef , {
      name:userName,
    id:userCredential.user.uid,
    phone:userPhone
    }).then(()=>{
      history.push('/login')
    })
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error,'error');
    // ..
  });

}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={userEmail}
            onChange={(e)=>{setUserEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={userPhone}
            onChange={(e)=>{setUserPhone(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={userPassword}
            onChange={(e)=>{setUserPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        {/* <a>Login</a> */}
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
