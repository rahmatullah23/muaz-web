import React, { useState } from 'react';
import muaz from '../../img/muaz-1.jpeg'
import rabab from '../../img/rabab-1.jpeg'
import mura from '../../img/mura.jpeg'
import baba from '../../img/baba.JPG'
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
                
                <div class="row align-items-center">
                 
                    <div class="col">
                    <button type="button" class="btn btn-primary" onClick={() => setImage(muaz)} >Muaz</button>
    </div>
                    <div class="col">
                    <button type="button" class="btn btn-success" onClick={() => setImage(rabab)} >Rabab</button>
    </div>
                    <div class="col">
                    <button type="button" class="btn btn-info" onClick={() => setImage(mura)} >Baby</button>
    </div>
                    <div class="col">
                    <button type="button" class="btn btn-info" onClick={() => setImage(baba)} >Baba</button>
    </div>
                    <div class="col">
                    <button type="button" class="btn btn-info" onClick={() => setImage(nanu)} >Nanu</button>
    </div>
                    <div class="col">
                    <button type="button" class="btn btn-info" onClick={() => setImage(m1)} >Mamau-1</button>
    </div>
                    <div class="col">
                    <button type="button" class="btn btn-info" onClick={() => setImage(m2)} >Mamau-2</button>
    </div>
              
                </div>
                <div class="col-sm-12">
                    <img class="img-fluid" src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;