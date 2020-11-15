/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};