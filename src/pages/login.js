import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContextProvider";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { userToken, setAuthentified } = React.useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    const response = await axios
      .post("https://memedoc.herokuapp.com/v1/auth/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.tokens) {
          setAuthentified(true);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center font-Manrope">
        <div className="flex justify-center  max-w-3xl w-full py-20 ">
          <div className="flex flex-col gap-y-10">
            <div className="w-32">
              <img src="/Logo/logo_main.png" alt="logo" />
            </div>
            <div className="pt-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 py-10">
                  Ravi de vous revoir !
                </h2>
              </div>
              <div>
                <form
                  className="flex flex-col gap-y-10"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-y-5">
                    <div className="">
                      <input
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        placeholder="E-mail"
                        className="bg-[#F0F3F5] px-5 py-2 rounded-md"
                      />
                    </div>
                    <div className="">
                      <input
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                        name="password"
                        placeholder="Mot de passe"
                        className="bg-[#F0F3F5] px-5 py-2 rounded-md"
                      />
                    </div>
                    <div className="-mt-3">
                      <p>mot de passe oublie</p>
                    </div>
                  </div>

                  <div className="">
                    <button className="bg-[#00b963] px-5 py-3 text-white w-full rounded-lg">
                      s'identifier
                    </button>
                  </div>
                  <div>
                    <span>pas encore de compte ?</span>
                    <Link to="/register">
                      <span className="text-[#00b963]"> Ouvrir du compte</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="absolute top-0">
            <img src="/Img/Doctor2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
