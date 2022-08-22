import * as THREE from "three"
import Experience from "../Experience";


export default class Machine{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.machine = this.resources.items.machine;
        this.actualMachine = this.Machine.scene;
        console.log(this.machine);

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