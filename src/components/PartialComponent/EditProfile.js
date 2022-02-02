import React, { useState } from "react";
import "./EditProfile.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

function EditProfile({ closeEdit, showEditProfile, setShowEditProfile }) {
  const [fullName, setFullName] = useState("Lorem Brian");
  const [displayName, setDisplayName] = useState("Lorem Brian");
  const [ocupation, setOcupation] = useState("Data Storytelling");
  const [timeZone, setTimeZone] = useState("UTC1");
  const [phoneNumber, setPhoneNumber] = useState("0190191029");

  const closeEditProfile = (e) => {
    if(e.target.classList.contains('edit--profile--container')) setShowEditProfile(false)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setShowEditProfile(false)
  }

  return (
    <div className="edit--profile--container" onClick={(e) => closeEditProfile(e)}>
      <div className="edit--profile--content">
        <div className="edit--profile--header">
          <h1>Edit your Profile</h1>
          <div className="close--icon" onClick={closeEdit}>
            <CloseOutlinedIcon />
          </div>
        </div>
        <form>
          <div className="edit--profile--body">
            <div className="edit--cartegory">
              <div className="edit--profile--body--left">
                <div>
                  <label>Full name</label>
                  <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </div>
                <div>
                  <label>Display name</label>
                  <input type="text" value={displayName} />
                  <p>
                    This could be your first name, or a nickname — however you’d
                    like people to refer to you in Slack.
                  </p>
                </div>
                <div>
                  <label>What I do</label>
                  <input type="text" value={ocupation} />
                  <p>Let people know what you do at Hamoye.</p>
                </div>
                <div>
                  <label>Phone number</label>
                  <input type="text" value={phoneNumber} />
                  <p>Enter a phone number.</p>
                </div>
                <div>
                  <label>Time zone</label>
                  <select>
                    <option value={timeZone}>{timeZone}</option>
                  </select>
                  <p>
                    Your current time zone. Used to send summary and
                    notification emails, for times in your activity feeds, and
                    for reminders.
                  </p>
                </div>
              </div>
              <div className="edit--profile--body--right">
                <h3>Profile Photo</h3>
                <AccountBoxRoundedIcon />
                <div className="upload--icon">
                  <label>
                    <span>Upload an Image</span>
                    <input type="file" placeholder="Upload an  Image" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="btns">
            <button onClick={closeModal}>Cancel</button>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
