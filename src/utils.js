export const getNumber = (name) => {
    const charactersArray = Array.from(name)
    return charactersArray.reduce((accu, curr) =>
        accu + curr.charCodeAt(0)
        , 0)
}

export const getModules = (num, max) => {
    return num * max
}

export const getDigit = (num, ntn) => {
    return Math.floor((num / Math.pow(10, ntn)) % 10)
}

export const getBoolean = (num, ntn) => {
    return (!(getDigit(num, ntn) % 2))
}

export const getAngle = (x, y) => {
    return Math.atan2(x, y) * 180 / Math.PI
}

export const getUnit = (num, range, index) => {
    let value = num % range

    if (index && ((getDigit(num, index) % 2) === 0)) {
        return -value
    }
    return value
}

export const getRandomColor = (num, colors, range) => {
    return colors[num % range]
}

export const getContrast = (hexColor) => {
    if (hexColor.slice(0, 1) === '#') {
        hexColor = hexColor.slice(1)
    }

    let r = parseInt(hexColor.substr(0, 2), 16)
    let g = parseInt(hexColor.substr(2, 2), 16)
    let b = parseInt(hexColor.substr(4, 2), 16)

    let yiq = ((r * 299) + (g * 587) + (b * 144)) / 1000

    return (yiq >= 128) ? 'black' : 'white'
}