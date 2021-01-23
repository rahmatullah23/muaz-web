import React, { useState } from 'react';
import muaz from '../../img/muaz-1.jpeg'
import rabab from '../../img/rabab-1.jpeg'
import mura from '../../img/mura.jpeg'
import baba from '../../img/baba.jpg'
import nanu from '../../img/nanu.jpg'
import m1 from '../../img/m1.jpg'
import m2 from '../../img//m2.jpeg'
const Home = () => {

    const [image, setImage] = useState('')
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12 ">
                    <h3>Muaz and Rabab </h3>
                </div>
                
               
                 
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item p-1">
      <button type="button" class="btn btn-primary p-1" onClick={() => setImage(muaz)} >Muaz</button>
        </li>
        <li class="nav-item p-1">
        <button type="button" class="btn btn-success p-1" onClick={() => setImage(rabab)} >Rabab</button>
        </li>
        <li class="nav-item p-1">
        <button type="button" class="btn btn-info p-1" onClick={() => setImage(mura)} >Baby</button>
        </li>
        <li class="nav-item p-1">
        <button type="button" class="btn btn-danger p-1" onClick={() => setImage(baba)} >Baba</button>
        </li>     
        <li class="nav-item p-1">
        <button type="button" class="btn btn-warning p-1" onClick={() => setImage(nanu)} >Nanu</button>
        </li>
        <li class="nav-item p-1">
        <button type="button" class="btn btn-primary" onClick={() => setImage(m1)} >Tareq</button>
        </li>
        <li class="nav-item p-1">
        <button type="button" class="btn btn-success" onClick={() => setImage(m2)} >Zaber</button>
        </li>
      </ul>
    
  </div>
  </div>
</nav>
              
                
                <div class="col-sm-12">
                    <img class="img-fluid" src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;