import React, { createContext, useContext, useEffect, useState } from "react";
import { blog_data } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const AppContent = createContext()

const AppContentProvider = ({ children}) => {

  const [blogs, setBlogs] = useState([])

  //geting the blogs
  const getBlogs = () => {
    setBlogs(blog_data)
  }

  useEffect(()=> {
    getBlogs()
  },[])

  const navigate = useNavigate();
  const value = {
    blogs, setBlogs,navigate,
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
