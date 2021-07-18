import { Link, useRouteMatch } from "react-router-dom"
import Links from "./Links"

const MenuLinks = ({ label, to, activeOnly, icon }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnly
    })
    return (
        <Link className={match ? "is-active" : ""} to={to}>{icon} <span>{label}</span></Link>
    )
}
const LinksMenu = () => {
    return (
        <>
            {
                [...Links].map(e =>
                    <li key={e.id}>
                        <MenuLinks activeOnly={true} to={e.link} label={e.name} icon={e.icon} />
                    </li>
                )
            }
        </>
    )
}

export default LinksMenu
