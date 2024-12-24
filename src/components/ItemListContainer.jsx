import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
    </div>
  );
};

const styles = {
  container: { padding: '20px', textAlign: 'center' },
};

export default ItemListContainer;
