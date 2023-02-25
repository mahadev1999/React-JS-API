import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nivas(){
    const[productdetails,setproductdetails]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?sort=desc')
        .then(response=>response.json())
        .then(json=>setproductdetails(json))
        console.log(productdetails);
    },[])
    return(
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center">PRODUCT PAGE</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-bordered table-fluid">
                                <thead>
                                    <tr>
                                        <th>product id</th>
                                        <th>product title</th>
                                        <th>product description</th>
                                        <th>product category</th>
                                        <th>product image</th>
                                        <th>product rating</th>
                                        <th>product count</th>
                                    </tr>
                                </thead>
                                       {
                                          productdetails.map((value,index)=>(
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.description}</td>
                                                <td>{value.category}</td>
                                                <td><img src={value.image} height={100}/></td>
                                                <td>{value.rating.rate}</td>
                                                <td>{value.rating.count}</td>
                                                
                                            </tr>

                                          ))
                                       }

                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}