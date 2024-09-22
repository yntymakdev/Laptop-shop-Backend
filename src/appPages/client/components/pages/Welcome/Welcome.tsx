import React from "react";
import module from "../Welcome/Welcome.module.scss";
import Image from "next/image";
import photo from "./img/Montitor.png";
import voice from "./img/voice.png";
const Welcome = () => {
  return (
    <div>
      <div className="container">
        <div className={module.welcomeBlock}>
          <div className={module.welcomeNavbar}>
            <Image
              src={voice}
              width={344}
              height={55}
              quality={90}
              alt={"voice "}
            />
            <div className={module.hrMini}>
              <hr
                style={{
                  width: "200px",
                }}
              />
              <div className={module.textWelcome}>
                <h1>20 hour</h1>
                <p>battery life </p>
              </div>
            </div>
            <hr
              style={{
                width: "200px",
              }}
            />
            <p>battery life </p>
            <h1>20 hour</h1>
            <hr
              style={{
                width: "200px",
              }}
            />
          </div>
          <div className={module.sectionNavBarFirst}>
            <Image
              src={photo}
              width={493}
              height={447}
              quality={90}
              alt={"photo "}
            />
          </div>
          <div className={module.sectionNavBarThird}>
            <Image
              src={voice}
              width={344}
              height={55}
              quality={90}
              alt={"voice "}
            />
            <hr
              style={{
                width: "200px",
              }}
            />
            <h1>20 hour</h1>
            <p>battery life </p>
            <hr
              style={{
                width: "200px",
              }}
            />
            <p>battery life </p>
            <h1>20 hour</h1>
            <hr
              style={{
                width: "200px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
