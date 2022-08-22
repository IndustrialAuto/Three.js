import * as THREE from "three";
import {EventEmitter} from "events";
import Experience from "../Experience.js"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js"


export default class Resources extends EventEmitter{
    constructor(assets) {
        super();
        this.experience = new Experience();
        this.renerer = this.experience.renderer;

        this.assets = assets;

        //console.log(this.assets);

        this.items = {};
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();

      
        }
    
    setLoaders(){
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

    }

    startLoading() {
        for(const asset of this.assets){
            if(asset.type === "glbModel"){
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.signleAssetLoaded(asset,file);
                });
            }
            else if (asset.type === "videoTexture") {
                this.video = {};
                this.videoTexture = {};

                this.video[assets.name] = document.createElement("video");
                this.video[assets.name].src = asset.path;
                this.video[assets.name].playsInline = true;
                this.video[assets.name].autoplay = true;
                this.video[assets.name].muted = true;
                this.video[assets.name].play();

                this.videoTexture[asset.name].flipy = true;
                this.vodeoTexture[asset.name].minFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].anyFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].generateMIomaps = false;
                this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;

            }
        }

    }

    signleAssetLoaded(asset, file) {
        this.items[asset.name] = file;
        this.loaded++;
    }

} 