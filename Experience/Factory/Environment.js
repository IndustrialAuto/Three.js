import * as THREE from "three"
import Experience from "../Experience";


export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        
        this.setSunlight();

        //console.log(this.camera, this.camera.perspectiveCamera, this.canvas)
        
    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff',3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far =20;
        this.sunLight.shadow.mapSize.set(1024,1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(1.5,7,3);
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 40); //pulling ambient light from the Three.js library.
        this.scene.add(this.ambientLight);                        //adding ambient light to the scene.

        console.log("Lights are on");

    }

    

    resize(){
        
        

    }   

    update(){
        
        
    }
}