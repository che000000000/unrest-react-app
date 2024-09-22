import headerNav from './header-nav.module.css'
import ListElement from './ListElement/ListElement'

const HeaderNav = () => {
    const navList = [
        { name: 'Уч. записи', link: '/sign-in' }
    ]
    const listElements = navList.map((element: any) => (
        <ListElement link={element.link} name={element.name}/>
    ))
    return (
        <nav className={headerNav.container}>
            <ul className={headerNav.nav_list}>
                {listElements}
            </ul>
        </nav>
    )
}

export default HeaderNav