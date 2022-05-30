import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContextProvider";
const Register = () => {
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    const response = await axios
      .post("https://memedoc.herokuapp.com/v1/auth/register", { email })
      .then((res) => {
        if (!res.data.user.isEmailVerified) {
          setUser(res.data.user);
          navigate("/confirmation");
        }
      });
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center font-Manrope mt-15 ">
        <div className="flex-1 justify-center max-w-3xl">
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
                  Saisissez votre adresse e-mail
                </h2>
                <span className="text-gray-600">
                  Vous en aurez besoin pour vous connecter et accéder à votre
                  application Memedoc.
                </span>
              </div>
              <div>
                <form
                  className="flex flex-col gap-y-5 pt-10"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-y-2">
                    <div className="">
                      <span>Adresse e-mail</span>
                      <input
                        id="e-mail"
                        name="email"
                        value={email}
                        placeholder="Nathalie.durand@exemple.com"
                        className="bg-[#F0F3F5] px-5 py-2 rounded-md w-full"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <button
                      className="bg-[#00b963] px-5 py-3 text-white w-full rounded-lg"
                      type="submit"
                    >
                      Confirmer
                    </button>
                  </div>
                  <div>
                    <span className="text-gray-600">
                      En cliquant sur Confirmer, vous acceptez notre
                      <span className="text-[#00b963] ">
                        politique de confidentialité
                      </span>
                      applicable au traitement de vos données personnelles.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden md:block md:flex-1 overflow-hidden bg-[#white] py-20 gap-y-28">
          <div className="flex flex-col px-10 gap-y-20 items-center justify-center ">
            <div className="flex flex-col justify-center items-center ">
              <img src="/Img/otp.png" alt="" />
            </div>
            <div className="bg-[#142B37] rounded-md text-white px-5 font-semibold py-10 flex flex-col justify-center items-center gap-y-5  ">
              <div>
                <img
                  src="/Img/Doctor2.jpg"
                  alt="logo"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="px-3">
                <p className="text-center">
                  “In the tech world, you can’t afford to be slow. Because of
                  Uizard, within five days of getting my idea – with only two
                  days of working in the Uizard platform – I already had a proof
                  of concept.”
                </p>
              </div>
            </div>
            <div>
              <p className="flex justify-center items-center text-3xl font-bold w-full px-3 text-center">
                Rejoingez +10,000 pharmaciens connectés
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
