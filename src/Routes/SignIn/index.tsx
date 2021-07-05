import React from "react";
import {
  LoginContainer,
  NavLogo,
  NavIcon,
  NavbarContainer,
  BackgroundGradient,
} from "./styles";

const SignIn: React.FC = () => {
  return (
    <div>
      <LoginContainer>
        <BackgroundGradient>
          {/* Simple Nav */}
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Home Made
            </NavLogo>
          </NavbarContainer>

          {/* Form */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              zIndex: 1,
              maxWidth: "400px",
              padding: "70px",
              marginLeft: "auto",
              marginRight: "auto",
              background: "rgba(0, 0, 0, 0.85)",
              left: 0,
              right: 0,
            }}
          >
            <form style={{ display: "grid", flexDirection: "column" }}>
              <h1 style={{ marginBottom: "14px", color: "#fff" }}>Sign In</h1>
              <input
                placeholder="Email"
                type="email"
                style={{
                  outlineWidth: 0,
                  height: "40px",
                  marginBottom: "14px",
                  borderRadius: "5px",
                  border: "none",
                  padding: "5px 15px",
                }}
              />
              <input
                placeholder="Password"
                type="password"
                style={{
                  outlineWidth: 0,
                  height: "40px",
                  marginBottom: "14px",
                  borderRadius: "5px",
                  border: "none",
                  padding: "5px 15px",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "16px 20px",
                  //   fontSize: "1rem",
                  color: "#fff",
                  borderRadius: "5px",
                  backgroundColor: "#e50914",
                  cursor: "pointer",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </BackgroundGradient>
      </LoginContainer>
    </div>
  );
};

export default SignIn;
