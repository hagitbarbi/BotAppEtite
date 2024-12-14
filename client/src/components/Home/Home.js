import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import RecipeList from '../RecipeList';
import RecipeForm from '../RecipeForm';
import { Layout } from "antd";
import styles from './styles';
import {getRecipes} from "../../actions/recipes";

const {Sider, Content}=Layout;

const Home = () => {
    const [selectedId, setSelectedId]= useState(null);
    const dispatch=useDispatch();

    useEffect(() =>{
        dispatch(getRecipes());
    },[dispatch])
    return (
        
<Layout>
    <Sider style={styles.sider}>
        <RecipeForm selectedId={selectedId} setSelectedId={setSelectedId}/>
    </Sider>
    <Content style={styles.content}>
        <RecipeList setSelectedId={setSelectedId}/>
    </Content>
</Layout>    
    );
};

export default Home;
