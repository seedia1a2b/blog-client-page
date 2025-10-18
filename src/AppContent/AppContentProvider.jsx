import React, { createContext, useContext, useEffect, useState } from "react";
import { blog_data } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const AppContent = createContext()

const AppContentProvider = ({ children}) => {

  const [blogs, setBlogs] = useState([])

  const backend_url = import.meta.env.VITE_BACKEND_URL;

  //geting the blogs
  const getBlogs = async () => {

    try {

      const {data} = await axios.get(backend_url + '/api/v1/blog/blogs',{});
      if(data.success){
        console.log(data);
        setBlogs(data.data);
      }else {
        toast.error('somthing went wrong ' + data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    
  }

  useEffect(()=> {
    getBlogs();
  },[]);

  const navigate = useNavigate();
  const value = {
    blogs, setBlogs,
    navigate, getBlogs,
    axios, backend_url
  }

  return(
    <AppContent.Provider value={value}>
      {children}
    </AppContent.Provider>
  )
}

export default AppContentProvider;

export const useAppContext = () => {
  return useContext(AppContent)
}
