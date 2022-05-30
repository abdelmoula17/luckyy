import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { AuthContext } from "../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EmailConfirmation = () => {
  const { user, setUserToken } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [code, setCode] = React.useState("");
  useEffect(() => {
    if (code && code.length === 4) {
      console.log("the code:", code, user, "is ready to send");
      console.log(user);
      axios
        .post("https://memedoc.herokuapp.com/v1/auth/verify-otp", {
          code: code,
          userId: user.id,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.tokens) {
            setUserToken(res.data);
            navigate("/password");
          }
        });
    }
  }, [code]);
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
                  Un code de confirmation vous attend dans votre boîte e-mail
                </h2>
                <span className="text-gray-600">
                  Saisissez le code à 6 chiffres que nous vous avons envoyé sur
                  m.hameid@trenteneuf.co
                </span>
              </div>
              <div>
                <form className="flex flex-col gap-y-5 pt-10 ">
                  <div className="flex flex-col gap-y-2">
                    <div className="">
                      <span>Code de confirmation</span>
                      <input
                        id="e-mail"
                        name="email"
                        placeholder="XXX- XXX"
                        className="bg-[#F0F3F5] px-5 py-2 rounded-md w-full"
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                      />
                      <span className="text-sm text-gray-500">
                        Votre code est peut-être dans vos spams
                      </span>
                    </div>
                  </div>
                  <div>
                    <span>Toujours rien ?</span>
                    <span className="text-[#00b963]"> Renvoyer le code</span>
                  </div>
                </form>
                <div className="mt-10">
                  <Link to="/register">
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

export default EmailConfirmation;
