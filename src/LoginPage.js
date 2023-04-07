import React, { useState } from "react";
import firebase from "./firebase";
import { useNavigate } from "react-router-dom";

//function based react component
export default function Loginpage() {
  const [countryCode, setcountryCode] = useState("+91");
  const [mobile, setmobile] = useState("");

  const navigate = useNavigate();
 
  const redirecttoSuperhero = () => {
    navigate('/Superhero'); // new line
  };

  const handleCountrycode = (event) => {
    setcountryCode(event.target.value);
  };
  const handleMobileNumber = (event) => {
    setmobile(event.target.value);
  };

  //configure captcha code
  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          sendotp();
          console.log("Recapthca verified");
        },
      }
    );
  };
 // send otp firebase function
  const sendotp = () => {
    //  e.preventDefault();
    let number = countryCode + mobile;
    configureCaptcha();
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(number, appVerifier)
      .then((confirmationresult) => {
        window.confirmationresult = confirmationresult;
        // console.log("otp sent");
        document.getElementById('container1').style.display = 'none';
        document.getElementById('container2').style.display = 'block';
      })
      .catch((error) => {
        alert("OTP not sent! Please try again");
        console.log("otp not sent");
      });
  };


    const handleClick = () => {
       var otp = "";
       otp += document.getElementById("ist").value;
       otp += document.getElementById("sec").value;
       otp += document.getElementById("third").value;
       otp += document.getElementById("fourth").value;
       otp += document.getElementById("fifth").value;
       otp += document.getElementById("sixth").value
       verifyotp(otp);
  }
  
  //verify otp function
  const verifyotp = (otp) => {
    
    const code = otp;
    // console.log(code)
    window.confirmationresult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("user is verified");
        redirecttoSuperhero();
      })
      .catch((error) => {
        console.log("wrong otp");
      });
  };

  return (
    <div className="container" >
      <div id="header"> SUPER HEROES </div>

      <div id="container1">
        <div id="middle">Login to continue</div>

        <div id="sign-in-button"></div>
        <div id="input">
          <input
            type="mobile"
            value={countryCode}
            onChange={handleCountrycode}
            id="countryCode"
            className="inputs"
            placeholder="Country Code"
          />
          <input
            id="mobile"
            className="inputs"
            value={mobile}
            onChange={handleMobileNumber}
            type="tel"
          />
        </div>
        <div id="submit">
          {/* <Link to="/Otpverifypage"> */}
          <button
            onClick={() => {
              sendotp();
            }}
            id="btn"
            type="submit"
          >
            Get OTP
          </button>
          {/* </Link> */}
        </div>

        <div id="footer">Resend OTP in 30 seconds</div>
      </div>

      <div id="container2" style={{display: 'none'}}>
        <h1>Verify OTP</h1>
        <div className="userInput">
        <input className="otpinput" type="text" id='ist' maxLength="1" />
        <input className="otpinput" type="text" id="sec" maxLength="1" />
        <input className="otpinput" type="text" id="third" maxLength="1" />
        <input className="otpinput" type="text" id="fourth" maxLength="1" />
        <input className="otpinput" type="text" id="fifth" maxLength="1"/>
        <input className="otpinput" type="text" id="sixth" maxLength="1"/>
        </div>
        <button onClick={handleClick} id="confirm">CONFIRM</button>
      </div>
      
    </div>
  );
}
