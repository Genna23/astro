function getNavLinks(links) {

    const navLinks = {
        mainMenu: links.filter(link => link.list.toString() === ''),
        secondMenu: links.filter(link => link.list.toString() !== '')
    }

    return navLinks

}


export default getNavLinks
