function getNavLinks(links) {

    const navLinks = {
        mainMenu: links.filter(link => !link.list),
        secondMenu: links.filter(link => link.list)
    }

    return navLinks

}


export default getNavLinks
