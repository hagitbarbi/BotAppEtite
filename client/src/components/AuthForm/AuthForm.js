import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Form, Input , Button, Card, Layout, Typography} from "antd";
import styles from './styles';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {signup, login} from "../../actions/authentication";


const {Title} = Typography;

function AuthForm() {
    const user = null;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form]=Form.useForm();
    const [isLogin,setIsLogin]=useState(true);

    const onSubmit = (formValues) =>{
        if(isLogin) {
            dispatch(login(formValues, navigate));
        } else {
            dispatch(signup(formValues, navigate));
        }

    }
    const swichMode = () =>{
        setIsLogin(prevIsLogin => !prevIsLogin)
    }
  return (
<Layout style={styles.container}>
    <Card 
         style={styles.card} 
         title={
             <Title lever={4} style={{ textAlign:"center"}}> 
                 {isLogin ? "Login" : "Join"} BotAppEtite
             </Title>
            } >
               <Form name='authform'
                     form={form}
                     size='large'
                     wrapperCol={{span :20, offset:2}}
                     onFinish={onSubmit}
               >
                {isLogin || (
                    <>
                    <Form.Item
                    name="username"
                    rules={[
                        {
                            required:true,
                            message :"Please enter your username"
                        }
                    ]}
                    >
                    <Input prefix={<UserOutlined />} placeholder='username'/>
                    </Form.Item>
                    </>
                )}
                 <Form.Item
                    name="email"
                    rules={[
                        {
                            required:true,
                            message :"Please enter valid Email address"
                        }
                    ]}
                    >
                    <Input type='email' prefix={<MailOutlined />} placeholder='Email address'/>
                    </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[
                        {
                            required:true,
                            message :"Please enter your password"
                        }
                    ]}
                    >
                    <Input.Password type='password' prefix={<LockOutlined />} placeholder='password'/>
                    </Form.Item>
                    {isLogin || (
                               <Form.Item
                               name="confirmPassword"
                               rules={[
                                   {
                                       required:true,
                                       message :"Please repeat your password"
                                   }
                               ]}
                               >
                               <Input.Password type='password' prefix={<LockOutlined />} placeholder='Cnfirm Password'/>
                               </Form.Item>
                    )}
                    <Form.Item>
                        <Button htmlType='submit' typeof='primary'>
                             {isLogin ? "Log In" : "Join"}
                        </Button>
                        <span style={{margin: "0 10px 0px 20px "}}>  </span>
                        <Button type='link' onClick={swichMode}>
                              {isLogin ? "Register now" : "Have an account?"}
                        </Button>
                    </Form.Item>
    
               </Form>

    </Card>

</Layout> )
}

export default AuthForm