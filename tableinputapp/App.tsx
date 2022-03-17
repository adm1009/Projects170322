import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./mock-data.json";
const detailsData = () =>{
   const details = localStorage.getItem("contact");
   if(!details){
     return []
   }
   return JSON.parse(details)
}
const App: React.FC<any> = () => {
  const [contacts, setContacts] = useState(detailsData());
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNo: "",
    email: "",
  });
  const details=localStorage.getItem("contact")
  const fullnameHandler = (e: any) => {
    e.preventDefault();
    setAddFormData({ ...addFormData, fullName: e.target.value });
  };
  const addressHandler = (e: any) => {
    e.preventDefault();
    setAddFormData({ ...addFormData, address: e.target.value });
  };
  const phoneHandler = (e: any) => {
    e.preventDefault();
    setAddFormData({ ...addFormData, phoneNo: e.target.value });
  };
  const emailHandler = (e: any) => {
    e.preventDefault();
    setAddFormData({ ...addFormData, email: e.target.value });
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    const newcontact = {
      id: new Date().getTime(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNo,
      email: addFormData.email,
    };
    const newcontacts = [...contacts, newcontact];
    setContacts(newcontacts);
    //  setAddFormData({fullName:"",address:"",phoneNo:"",email:""})
    localStorage.setItem("contact", JSON.stringify(contacts));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Address </th>
            <th>PhoneNo. </th>
            <th>Email </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact:any) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Contacts</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="fullName"
          placeholder="Enter fullName"
          onChange={fullnameHandler}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Enter address"
          onChange={addressHandler}
          required
        />
        <input
          type="text"
          name="phoneNo"
          placeholder="Enter phoneNo"
          onChange={phoneHandler}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={emailHandler}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
