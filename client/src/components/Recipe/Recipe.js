import React, {useState} from 'react';
import {Card, Tooltip, Typography, Image} from "antd";
import {EditOutlined, DeleteTwoTone, HeartTwoTone} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import moment from 'moment';
import styles from './styles';
import { deleteRecipes,  likeRecipes } from '../../actions/recipes';

const {Meta}= Card;
const {Link, Paragraph, Text}=Typography;

const Recipe = ({recipe, setSelectedId}) => {
  const dispatch=useDispatch();
  const [expand,setExpand]=useState(true);

  const user=JSON.parse(localStorage.getItem("profile"));

  const cardActions = [
    <div style={styles.actions}>
    <Tooltip
      placement='top'
      title='Like'
      color="magenta"
  
      
      >
    <HeartTwoTone twoToneColor="magenta" onClick={()=>{dispatch(likeRecipes(recipe._id))}}/>
    &nbsp; {recipe.likes.length}  &nbsp;
    </Tooltip>
    </div>,
    <Tooltip
    placement='top'
      title='Edit'
      >
    <EditOutlined onClick={()=>{
      setSelectedId(recipe._id);
    }}/>
    </Tooltip>,
    <Tooltip
    placement='top'
      title='Delete'
      color="red"
      >
    <DeleteTwoTone twoToneColor="red" onClick={()=>{dispatch(deleteRecipes(recipe._id))}}/>
    </Tooltip>
  ]
  return (
<Card
style={styles.card}
cover={
  <Image
    src={recipe.image}
  />

}actions={
  user?.result?._id === recipe?.userId  ?
  cardActions:
  user?.result ?
  cardActions.slice(0, 1)
  :null
}
>
  <Meta title={recipe.username}/>
  <Paragraph 
  style={{margin:0}}
  ellipsis={{
    rows: 2,
    expandable: true,
    symbol: "more",
    onExpand: ()=>{
         setExpand(true);
    },
    onEllipsis:() =>{
      setExpand(false);

    }
  }}>
     {recipe.caption}
  </Paragraph>
  {expand ?
      <Link href='#'> {recipe.tags.split(" ").map((tag) => `#${tag}` )} </Link> 
      :  null }
      <br />
      <Text type='secondary'> {moment(recipe.postDate).fromNow()}</Text>
</Card>
  )
}

export default Recipe