import { Link } from 'react-router-dom'
import { FacebookFilled, GithubFilled } from '@ant-design/icons';
import './Footer.css'
const Footer = () => {
    return (
        <footer 
        // className=""
        >
            <div className="footer">
                <div className="footer-container grid col-3 med-col-1 peq-col-1">
                    <div className="footer-colum1 ">
                        <h2 >Summary About Us</h2>
                        <p>
                           Diseños web y mas...
                    </p>
                    </div>
                    <div className="footer-colum2">
                        <h2>social media</h2>
                        <ul>
                            {[...redes].map(i =>
                                <li key={i.id}>
                                        <Link to={{ pathname: i.link}} target="_blank">
                                            {i.icon} <span>{i.name}</span>
                                        </Link>
                                </li>

                            )}
                        </ul>
                    </div>
                    <div className="footer-colum2">
                        <h2>contact information</h2>
                        <ul>
                            {/* {[...contact].map(c =>
                                <li key={c.id}>
                                    <div>
                                        <a href={c.link} target="_blank">
                                            {c.icon}
                                            <span className="footer-location">
                                                {c.name}
                                            </span>
                                        </a>
                                    </div>
                                </li>
                            )} */}

                        </ul>
                    </div>
                </div>
                <div className="copyright grid peq-col-1 med-col-2 col-2">
                    <div className="copyright-left">
                        &copy; 2021 Todos los Derechos reservados |
                        <span> MagicMoon Studios</span>
                    </div>
                    <div className="copyright-right">
                        <ul>
                            <li>
                                <Link to="/">
                                    Informacion
                                </Link>
                            </li>
                            |
                            <li>
                                <Link to="/">
                                    politicas de privacidad
                                </Link>
                            </li>
                            |
                            <li>
                                <Link to="/">
                                    Terminos y condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer



const redes = [
    {
        id:1,
        link: "https://www.facebook.com",
        icon: <FacebookFilled/>,
        name: "follow us on facebook"
    },
    {
        id:2,
        link: "https://github.com/MagicMoon-Studios",
        icon: <GithubFilled />,
        name: "follow us on github"
    },
]
// const contact = [
//     {
//         id:31,
//         link: "https://goo.gl/maps/iQuyRXVKYgNzVw979",
//         icon: <HomeIcon className="ion-icon" />,
//         name: " Jr. Alfonso de Alvarado N°. 768.Ref(Costado de WINTAC y/o de MARCIMEX)."
//     },
//     {
//         id:41,
//         link: "mailto:infinit.movilshop@gmail.com",
//         icon: <MailIcon className="ion-icon" />,
//         name: "infinit.movilshop@gmail.com"
//     },
//     {
//         id:51,
//         link: "tel:956722497",
//         icon: <CallIcon className="ion-icon" />,
//         name: "+51 956 722 497"
//     }
// ]