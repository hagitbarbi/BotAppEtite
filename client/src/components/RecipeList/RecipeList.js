import React from 'react';
import { Row, Col, Spin } from 'antd';
import Recipe from '../Recipe';
import { useSelector } from 'react-redux';

const RecipeList = ({ selectedId, setSelectedId }) => {
  const recipes = useSelector((state) => state.recipes);

  return !recipes.length ? (
    <div style={{ textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  ) : (
    <Row gutter={[16, 16]} justify="center">
      {recipes.map((recipe) => (
        <Col
          key={recipe._id}
          xs={24} // כרטיס אחד בשורה במסכים קטנים מאוד
          sm={12} // שני כרטיסים בשורה במסכים קטנים
          md={8} // שלושה כרטיסים בשורה במסכים בינוניים ומעלה
          lg={8} // שלושה כרטיסים בשורה במסכים גדולים
          xl={8} // שלושה כרטיסים בשורה במסכים גדולים מאוד
        >
          <Recipe recipe={recipe} setSelectedId={setSelectedId} />
        </Col>
      ))}
    </Row>
  );
};

export default RecipeList;
