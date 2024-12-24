import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.brand}>Mi Tienda</h1>
      <ul style={styles.navLinks}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: '#fff' },
  brand: { fontSize: '1.5em' },
  navLinks: { display: 'flex', listStyle: 'none', gap: '15px' },
};

export default NavBar;
