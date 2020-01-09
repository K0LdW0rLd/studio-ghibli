import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import hayaoMiyazaki from './images/hayaoMiyazaki.png';
import isaoTakahata from './images/isaoTakahata.jpeg';
import yoshifumiKondou from './images/yoshifumiKondou.jpg';
import goroMiyazaki from './images/goroMiyazaki.jpeg';
import hiromasaYo from './images/hiromasaYo.jpeg';
import hiroMo from './images/hiroMo.jpeg';



class Director extends Component {
    render () {
        return (
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src ={hayaoMiyazaki} width="100%" height="350" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" />
                            <div class="card-body">
                            <p class="card-text">Hayao Miyazaki</p>
                            <p>Directed:</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <ul>
                                    <li>Castle in the Sky</li>
                                    <li>My Neighbor Totoro</li>
                                    <li>Kiki's Delivery Service</li>
                                    <li>Porco Rosso</li>
                                    <li>Princess Mononoke</li>
                                    <li>Howl's Moving Castle</li>
                                    <li>Spirited Away</li>
                                    <li>Ponyo</li>
                                    <li>The Wind Rises</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src ={isaoTakahata} width="100%" height="350" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" />
                            <div class="card-body">
                            <p class="card-text">Isao Takahata</p>
                            <p>Directed:</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <ul>
                                        <li>Grave of the Fireflies</li>
                                        <li>Only Yesterday</li>
                                        <li>Pom Poko</li>
                                        <li>My Neighbors the Yamadas</li>
                                        <li>The Tale of the Princess Kaguya</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src ={yoshifumiKondou} width="100%" height="350" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" />
                            <div class="card-body">
                            <p class="card-text">Yoshifumi Kondou</p>
                            <p>Directed:</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <ul>
                                        <li>Whisper of the Heart</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src ={goroMiyazaki} width="100%" height="350" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" />
                            <div class="card-body">
                            <p class="card-text">Goro Miyazaki</p>
                            <p>Directed:</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <ul>
                                    <li>Tales from Earthsea</li>
                                    <li>From Up on Poppy Hill</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src ={hiromasaYo} width="100%" height="350" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" />
                            <div class="card-body">
                            <p class="card-text">Hiromasa Yonebayashi</p>
                            <p>Directed:</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <ul>
                                    <li>When Marnie Was There</li>
                                    <li>Arrietty</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src ={hiroMo} width="100%" height="350" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" />
                            <div class="card-body">
                            <p class="card-text">Hiroyuki Morita</p>
                            <p>Directed:</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <ul>
                                    <li>The Cat Returns</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Director;