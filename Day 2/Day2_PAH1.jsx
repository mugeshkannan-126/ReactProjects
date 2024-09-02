import React from "react";
import { useState,useEffect } from "react";

const MyApp = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState('');
    const[address,setAddress] = useState('');
    const[message,setMessage] = useState('');
    /*useEffect(()=>{
        // console.log(name);
    },[email])*/
    return (
        <center>
                <form>
                    <table>
                        <tr>
                            <td>Name:</td><td>< input type="text" placeholder="Enter UserName" onChange={(e)=>{
                            setName(e.target.value);
                            }}></input></td>
                        </tr>
                        <tr>
                            <td>Email:</td><td>< input type="text" placeholder="Enter Email" onChange={(e)=>{
                            setEmail(e.target.value);

                            }}></input></td>
                        </tr>
                        <tr>
                            <td>Address:</td><td><textarea placeholder="Enter Email" onChange={(e)=>{
                                setAddress(e.target.value);
                            }}></textarea></td>
                        </tr>
                        <tr>
                            <td>Message:</td><td><textarea  placeholder="Enter Feedback" onChange={(e)=>{
                                setMessage(e.target.value);
                            }}></textarea></td>
                        </tr>
                        <tr>
                            <button type="submit" onClick={(e)=>{
                                e.preventDefault();
                                console.log(name);
                                console.log(email);
                                console.log(address);
                                console.log(message);
                            }}>Submit</button>
                        </tr>
                </table>
            </form>
        </center>
    );
}

export default MyApp;