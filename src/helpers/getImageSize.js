function getImageSize(url) {
    
    return url.split('/')[5].split('x')

}

export default getImageSize 