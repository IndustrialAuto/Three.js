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
        this.resources = this.experience.resources;

        this.resources.on("ready", () => {
            this.machine = new Machine();
            console.log("created machine");
        });

        this.machine = new Machine();

        
        //console.log(this.camera, this.camera.perspectiveCamera, this.canvas)
        
        

        
    }

    

    resize(){
        
        

    }   

    update(){
        
        
    }
}