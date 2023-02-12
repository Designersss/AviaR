import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createDevice = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createAvia = async (avia) => {
    const {data} = await $authHost.post('api/avia', avia)
    return data
}

export const fetchAvia = async () => {
    const {data} = await $host.get('api/avia')
    return data
}

export const fetchOneAvia = async (id) => {
    const {data} = await $host.get('api/avia/' + id)
    return data
}
