
import MainContent from '../../../../components/layout/content/MainContent'
import FormHome from './Components/From/FormHome'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div className="content-contact">
                <MainContent>
                    <h1>Get a quote</h1>
                    <p>Take your business to the next level</p>
                    <div className="info">
                        Tell us what you need, we will contact you shortly.
                    </div>
                    <FormHome />
                </MainContent>
            </div>
        </>
    )
}

export default Contact
