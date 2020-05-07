"use strict"

const fs = require('fs')
const sharp = require('sharp')

const { createCanvas, loadImage } = require('canvas')

const output = './public/save/'
const input = './public/src_images/'
const inputJson = './public/src_images/'

let file = fs.readFileSync(inputJson + 'assets.json')
let region = JSON.parse(file)

Object.keys(region['frames']).forEach(s => {

    let name = s + '.png'
    let x = region['frames'][s]['frame']['x']
    let y = region['frames'][s]['frame']['y']
    let w = region['frames'][s]['frame']['w']
    let h = region['frames'][s]['frame']['h']

    console.log(`${name} \t ${x} \t ${y} \t ${w} \t ${h}`)

})

sharp(input + 'assets.png').extract({
    width: 164,
    height: 140,
    left: 0,
    top: 408
})
.toFile(output + 'crop.jpeg')
.then(fileInfo => {
    console.log(fileInfo)
})
.catch(err => console.log(err))