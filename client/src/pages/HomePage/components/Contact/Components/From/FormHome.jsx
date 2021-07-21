import './Form.css'
import { SendOutlined } from '@ant-design/icons';
const FormHome = () => {

  return (
    <>
      <div className="content-form">

        <form action="" className="contact-form">
          <div className="group-title">Contact</div>
          <div className="content-group">
            <h2>Send us a Message</h2>
            <div className="group">
              <input type="text" placeholder="Name" />
              <span className="bar"></span>
            </div>
            <div className="group">
              <input type="text" placeholder="Email" />
              <span className="bar"></span>
            </div>
            <div className="group">
              <input type="text" placeholder="Mobil (optional)" />
              <span className="bar"></span>
            </div>
            <div className="group">
              <label>Message</label>
              <span className="bar"></span>
              <textarea></textarea>
            </div>
            <button className="group-btn"><SendOutlined /> Submit</button>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default FormHome
