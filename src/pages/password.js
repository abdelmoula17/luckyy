import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { AuthContext } from "../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PasswordInput from "../components/password-input/password-input";
// import { PasswordChecker } from "react-password-strengthbar-ui";

const Password = () => {
  const { userToken, setAuthentified } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = React.useState(AuthContext);

  const token = userToken.tokens?.access?.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(
        "https://memedoc.herokuapp.com/v1/auth/set-password",
        { password },
        config
      )
      .then((res) => {
        if (res.data.message === "Password updated successfully") {
          setAuthentified(true);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(userToken);
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center font-Manrope mt-15 min-h-screen">
        <div className="flex-1 justify-center  max-w-3xl">
          <div className="flex flex-col gap-y-28 justify-between">
            <div className="flex flex-row justify-between px-5">
              <div className="w-32">
                <img src="/Logo/logo_main.png" alt="logo" />
              </div>
              <div>
                <Link to="/login">Se connecter</Link>
              </div>
            </div>
            <div className="pt-5 px-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 py-3">
                  Definissez votre nouveau mot de passe
                </h2>
                <span className="text-gray-600">
                  Choisissez un mot de passe sécurisé dont vous vous souviendrez
                  facilement.
                </span>
              </div>
              <div>
                <form
                  className="flex flex-col gap-y-5 pt-10"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-y-2">
                    <div className="">
                      <span>Mot de passe</span>
                      <div>
                        <div>
                          {/* <input
                            id="e-mail"
                            name="email"
                            placeholder="Saisissez votre mot de passe ici"
                            className="bg-[#F0F3F5] px-5 py-2 rounded-md w-full"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          /> */}
                          {/* <PasswordChecker password={password} /> */}
                          <PasswordInput
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            value={password}
                            placeholder="Saisissez votre mot de passe ici"
                          />
                        </div>
                        {/* <div className="flex flex-row justify-between gap-x-2 mt-2">
                          <hr className="bg-gray-300 w-full h-2 rounded-lg"></hr>
                          <hr className="bg-gray-300 w-full h-2 rounded-lg"></hr>
                          <hr className="bg-gray-300 w-full h-2 rounded-lg"></hr>
                          <hr className="bg-gray-300 w-full h-2 rounded-lg"></hr>
                        </div> */}
                      </div>
                      <div className="flex justify-end items-end">
                        <span className="text-sm text-gray-500 justify-end">
                          Mot de passe tres faible
                        </span>
                      </div>
                      <div className="mt-10">
                        <button
                          className="bg-[#00b963] px-5 py-3 text-white w-full rounded-lg"
                          type="submit"
                        >
                          Confirmer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="mt-10">
                  <Link to="/confirmation">
                    <span className="inline-flex justify-center items-center">
                      <BsArrowLeftShort />
                      Retour
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden md:block md:flex-1 overflow-hidden bg-[#F2F8F4] py-20 h-94 gap-y-28">
          <div className="flex flex-col px-10 gap-y-20 items-center justify-center ">
            <div className="flex flex-col justify-center items-center ">
              <img src="/Img/mailotp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
