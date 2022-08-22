import * as THREE from "three"
import Experience from "../Experience.js";


export default class Machine{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.machine = this.resources.items.machine;
        this.actualMachine = this.machine.scene;
        console.log(this.actualMachine);

        this.setModel();

        //console.log(this.camera, this.camera.perspectiveCamera, this.canvas)
        
    }

    setModel(){
        this.scene.add(this.actualMachine);
    }

    

    resize(){
        
        

    }   

    update(){
        
        
    }
}