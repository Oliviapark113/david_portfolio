import "./settings.css"

export default function Settings() {
  return (
    <div className="settings" id="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">
                  Update Your Account
              </span>
              <span className="settingsDeleteTitle">
                Delete Account
              </span>
          </div>

          <form className="settingsForm">
              <label>Profile Picture</label>

              <div className="settingsPP">

              <img src="../../../assets/david.jpg" alt="david_image"/>
              <label htmlFor="fileInput">
              <i className="fas fa-user settingsPPIcon"></i>
              </label> 
              <input type="file" id="fileInput" style={{display: "none"}}/>
              </div>
              <label>Username</label>
              <input type="text" placeholder="Username"/>
              <label>Email</label>
              <input type="text" placeholder="Email"/>
              <label>Password</label>
              <input type="text" placeholder="Password"/>
             <button className="settingsSubmit">Update</button>
          </form>
      </div>
    </div>
  )
}
