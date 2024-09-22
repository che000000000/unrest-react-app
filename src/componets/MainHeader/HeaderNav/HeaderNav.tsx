import headerNav from './header-nav.module.css'
import ListElement from './ListElement/ListElement'

const HeaderNav = (props: any) => {
    const navList = [
        { name: props.userName, link: '/sign-in' }
    ]
    const listElements = navList.map((element: any, index: number) => (
        <ListElement key={index} link={element.link} name={element.name}/>
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