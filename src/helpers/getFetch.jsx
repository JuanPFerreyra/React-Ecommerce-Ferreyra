import boca from '../imagenes/boca.JPG';
import blackout from '../imagenes/blackout.JPG';
import colorado from '../imagenes/colorado.JPG';
import magic from '../imagenes/magic.JPG';
import corte from '../imagenes/corte.JPG';
import mom from '../imagenes/mom.JPG';
import babucha from '../imagenes/babucha.JPG';
import engomado from '../imagenes/engomado.JPG';

let productos =[
    {
        id: 1,
        nombre: "Remera Clasica Boca",
        categoria: "Remeras",
        precio: 700,
        imagen: boca
    },
    {
        id: 2,
        nombre: "Remera Clasica Black Out",
        categoria: "Remeras",
        precio: 640,
        imagen: blackout
      },
    {
        id: 3,
        nombre: "Remera Colorado",
        categoria: "Remeras",
        precio: 670,
        imagen: colorado
    },
    {
        id: 4,
        nombre: "Remera Magic",
        categoria: "Remeras",
        precio: 600,
        imagen: magic
    },
    {
        id: 5,
        nombre: "Jean Corte",
        categoria: "Pantalones",
        precio: 970,
        imagen: corte
    },
    {
        id: 6,
        nombre: "Jean Mom",
        categoria: "Pantalones",
        precio: 1100,
        imagen: mom
    },
    {
        id: 7,
        nombre: "Babucha Milan",
        categoria: "Pantalones",
        precio: 800,
        imagen: babucha
    },
    {
        id: 8,
        nombre: "Pantalon Engomado",
        categoria: "Pantalones",
        precio: 990,
        imagen: engomado
    }
]

export const getFetch = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

