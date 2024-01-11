function getDate(time) {
    
    const date = time ? new Date(time) : new Date()

    const day = date.getDate()

    const mounthNumber = date.getMonth()

    const mounth = mounthNumber.toString().length > 1 ? mounthNumber : `0${mounthNumber+1}`

    const year = date.getFullYear()

    return `${day}.${mounth}.${year}`

}

export default getDate