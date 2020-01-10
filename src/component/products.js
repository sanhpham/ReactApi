import React, { Component } from 'react';
import Product from './product'

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>Danh sách sản phẩm</h3>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <Product />
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}
export default Menu;