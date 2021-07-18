import { FolderOpenOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons'
const Links = [
    {
        id: 1,
        icon: <HomeOutlined className="icon" />,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        icon: <FolderOpenOutlined className="icon" />,
        name: "Projects",
        link: "/projects"
    },
    {
        id: 3,
        icon: <TeamOutlined className="icon"/>,
        name: "About Us",
        link: "/about"
    },
]


export default Links