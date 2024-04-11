import "./styles.css";
import React, { useState } from "react";
import QRCode from "qrcode.react";
// import vCard from "vcard-js";

export default function App() {
  const [vCardData, setVCardData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    websiteUrl: "https://zeeqr.info/"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateVCardData = () => {
    const vCardsJS = require("vcards-js");
    const vCardString = vCardsJS();
    vCardString.firstName = vCardData.firstName;
    vCardString.lastName = vCardData.lastName;
    vCardString.email = vCardData.email;
    vCardString.cellPhone = vCardData.phone;
    vCardString.url = vCardData.websiteUrl;
    console.log(vCardString.getFormattedString());
    return vCardString.getFormattedString();
    
  };

  // const contactInfo = {
  //   name: "John Doe",
  //   organization: "Example Corp",
  //   title: "Software Engineer",
  //   email: "johndoe@example.com",
  //   phone: "+1 (123) 456-7890",
  //   address: "123 Main St, City, Country"
  // };

  //   const vCardDatas = `
  // BEGIN:VCARD
  // VERSION:3.0
  // FN:${contactInfo.name}
  // ORG:${contactInfo.organization}
  // TITLE:${contactInfo.title}
  // EMAIL:${contactInfo.email}
  // TEL:${contactInfo.phone}
  // ADR:${contactInfo.address}
  // END:VCARD
  // `;
  //   const vCardDatas = `
  //   BEGIN:VCARD
  //   VERSION:3.0
  //   N:Holt;Cailin;;;
  //   FN:Cailin Holt
  //   EMAIL;type=HOME:ac.mattis.semper@incursuset.ca
  //   EMAIL;type=WORK:dignissim.tempor.arcu@risusa.ca
  //   TEL;type=HOME:(588) 949-0420
  //   TEL;type=WORK:(198) 610-0916
  //   ADR;type=HOME:Ap #133-3765 Egestas. St.;;;El Cerrito;Vermont;77122;
  //   END:VCARD
  // `;

  return (
    <div className="App">
      <div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={vCardData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={vCardData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={vCardData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={vCardData.phone}
            onChange={handleChange}
          />
        </div>
        {vCardData.firstName &&
        vCardData.lastName &&
        vCardData.email &&
        vCardData.phone ? (
          <div>
            <QRCode
              value={generateVCardData()}
              renderAs="canvas"
              size="400"
              includeMargin={true}
              style={{ marginTop: "10px" }}
            />
            {/* <QRCode value="https://reactjs.org/" /> */}
          </div>
        ) : (
          <div>
            <p>Fill in all the fields to generate the QR code.</p>
          </div>
        )}
      </div>
    </div>
  );
}
