import * as THREE from "three";
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


      
        this.scene.add(this.actualMachine);  //MAIN COMMAND TO IMPORT MACHINE INTO THE SCENE ON WEBPAGE.    
        this.actualMachine.scale.set(1,1,1);  //to scale the object size on the webPage.
        this.actualMachine.rotation.y = Math.PI; //for alligning properly on y axis.
    }

    

    resize(){
        
        

    }   

    update(){
        
        
    }
}