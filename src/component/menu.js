import React, { Component } from 'react';


class Menu extends Component{
  render(){
    return (
      <div>
        <nav className="nav justify-content-center">
          <a className="nav-link active" href="true">Trang chủ</a>
          <a className="nav-link" href="true">Sản phẩm</a>
        </nav>
        
      </div>
    );
  }
}
export default Menu;