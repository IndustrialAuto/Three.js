import * as THREE from "three"
import Experience from "../Experience";
import Machine from "./Machine";



export default class Factory{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        
        this.machine = new Machine();

        
        //console.log(this.camera, this.camera.perspectiveCamera, this.canvas)
        this.setRenderer();

        
    }

    

    resize(){
        
        

    }   

    update(){
        
        
    }
}