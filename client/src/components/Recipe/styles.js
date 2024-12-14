const styles = {
    container: {
      display: 'flex', // שימוש ב-Flexbox
      flexWrap: 'wrap', // שובר שורות כאשר אין מקום
      gap: '2px', // מרווח בין ה-Card-ים
      justifyContent: 'center', // ממרכז את הכרטיסים
    },
    card: {
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      maxWidth: '300px',
      width: '100%', // גודל כרטיסים מותאם לרוחב זמין
      margin: 'auto', // מרכז את התוכן בתוך הכרטיס
    },
    actions: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  
  export default styles;
  