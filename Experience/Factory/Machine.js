import * as THREE from "three"
import Experience from "../Experience";


export default class Machine{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.machine = this.resources.items.machine;
        console.log(this.machine);

        
        //console.log(this.camera, this.camera.perspectiveCamera, this.canvas)
        

        
    }

    

    resize(){
        
        

    }   

    update(){
        
        
    }
}