import {makeAutoObservable} from "mobx";


export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Xolodilniki'},
            {id: 2, name: 'Smarphony'}
        ]
            this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Samsung 1200 Pro', price: 1200, rating: 5, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.komputronik.pl%2Fproduct%2F702215%2Frealme-7-pro-8-128gb-mirror-silver.html&psig=AOvVaw2VwlzoShNMBiRuEd8oB7IW&ust=1630100595929000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPid7NfGz_ICFQAAAAAdAAAAABAe`},
            {id: 2, name: 'Samsung 1200 Pro', price: 1200, rating: 5, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.komputronik.pl%2Fproduct%2F702215%2Frealme-7-pro-8-128gb-mirror-silver.html&psig=AOvVaw2VwlzoShNMBiRuEd8oB7IW&ust=1630100595929000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPid7NfGz_ICFQAAAAAdAAAAABAe`},
            {id: 3, name: 'Samsung 1200 Pro', price: 1200, rating: 5, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.komputronik.pl%2Fproduct%2F702215%2Frealme-7-pro-8-128gb-mirror-silver.html&psig=AOvVaw2VwlzoShNMBiRuEd8oB7IW&ust=1630100595929000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPid7NfGz_ICFQAAAAAdAAAAABAe`},
            {id: 4, name: 'Samsung 1200 Pro', price: 1200, rating: 5, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.komputronik.pl%2Fproduct%2F702215%2Frealme-7-pro-8-128gb-mirror-silver.html&psig=AOvVaw2VwlzoShNMBiRuEd8oB7IW&ust=1630100595929000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPid7NfGz_ICFQAAAAAdAAAAABAe`},
            {id: 5, name: 'Samsung 1200 Pro', price: 1200, rating: 5, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.komputronik.pl%2Fproduct%2F702215%2Frealme-7-pro-8-128gb-mirror-silver.html&psig=AOvVaw2VwlzoShNMBiRuEd8oB7IW&ust=1630100595929000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPid7NfGz_ICFQAAAAAdAAAAABAe`},
         ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types () {
        return this._types
    }
    get brands () {
        return this._brands
    }
    get devices () {
        return this._devices
    }
}