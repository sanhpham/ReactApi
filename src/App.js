import React, { Component } from 'react';
import Menu from './component/menu'
// import Products from './component/products'
import { Switch ,Route} from 'react-router-dom'
import routes from './routes';
class App extends Component{
  render(){
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12">
            <button className="btn btn-success">Thêm Sản Phẩm</button>
              <Products />
            </div> */}
            {this.showContentMenu(routes)}
          </div>
        </div>
      </div>
    );
  }
  showContentMenu=(routes)=>{
    var result=null;
    if(routes.length>0){
      result=routes.map((route,index)=>{
        return <Route
        key={index}
        path={route.path}
        exact={route.exact}
        main={route.main}
         />
      })
    }
    return <Switch>{result}</Switch>
  }
  
}

export default App;
