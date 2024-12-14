  import React, {useState, useEffect} from 'react';
  import {Layout, Typography, Button, Avatar} from "antd";
  import styles from "./styles";
  import {Link , useNavigate, useLocation} from "react-router-dom";
  import {useDispatch} from "react-redux";
  import { LOGOUT } from '../../constants/actionTypes';
  import { jwtDecode } from 'jwt-decode';
  import { useCallback } from "react";



  const {Title}=Typography;
  const {Header}= Layout;


  const AppBar = () => {
      const dispatch=useDispatch();
      const navigate =useNavigate();
      const location= useLocation();

      const [user,setUser]= useState(JSON.parse(localStorage.getItem("profile")));

      const logout = useCallback(() => {
        localStorage.removeItem("profile"); // מחיקת נתונים מה-localStorage
        dispatch({ type: LOGOUT });
        navigate("/authform");
        setUser(null);
    }, [dispatch, navigate]);
    
      
      useEffect(() => {
        const token = user?.token;
      
        if (token) {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
      
        setUser(JSON.parse(localStorage.getItem("profile")));
      }, [location, logout, user?.token]);

    return (
      <Header style={styles.header}>
          <Link to="/">
          <div style={styles.homeLink}>
                &nbsp;
              <Title style={styles.title} >BotAppEtite</Title>
          </div>
          </Link>
          {!user ? (
              <Link to="/authform">
                <Button htmlType='button' style={styles.login}>
                        Log In
                </Button>
              </Link>
          ) : (
              <div style={styles.userInfo}>
                  <Avatar style={styles.avatar} alt="username" size="large">
                  {user?.result?.username?.charAt(0)?.toUpperCase() || "G"}
                  </Avatar>
                  <Title style={styles.title} level={4}>
                  {user?.result?.username || 'Guest'}
                  </Title>
                  <Button onClick={logout} htmlType='button'>
                    Log Out
                  </Button>
              </div>

          )
          }
      </Header>
    )
  }

  export default AppBar