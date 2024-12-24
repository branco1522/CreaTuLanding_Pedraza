import React from 'react';

const CartWidget = () => {
  return (
    <div style={styles.container}>
      <span>🛒</span>
      <span style={styles.badge}>3</span>
    </div>
  );
};

const styles = {
  container: { position: 'relative', fontSize: '1.5em' },
  badge: { position: 'absolute', top: '-10px', right: '-10px', background: 'red', color: '#fff', borderRadius: '50%', padding: '5px 10px', fontSize: '0.8em' },
};

export default CartWidget;
