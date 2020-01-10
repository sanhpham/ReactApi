import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (

            <tr>
                <td>1</td>
                <td>02</td>
                <td>Hoa</td>
                <td>3000</td>
                <td>
                    <button className="btn btn-success">Còn hàng</button>
                </td>
                <td>
                    <button className="btn btn-danger">Xóa</button>
                    <button className="btn btn-success">Edit</button>
                </td>
            </tr>


        );
    }
}
export default Product;