import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._avia = []
        this._selectCountry = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setAvia(avia){
        this._avia = avia
    }

    setSelectedCountry(types){
        this._selectCountry = types
    }

    get types() {
        return this._types
    }

    get avia() {
        return this._avia
    }

    get selectAvia(){
        return this._selectCountry
    }
}