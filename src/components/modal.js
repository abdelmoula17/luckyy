import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiNotification3Fill } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
const Modal = ({ showModal, setShowModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [select, setSelect] = useState("confirmee");
  console.log("selec", select);
  const handleSelectChange = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" border-2 border-gray-500 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5  rounded-t ">
                  <h3 className="text-3xl text-sm">Ajouter une garde</h3>
                  <button
                    className="bg-transparent text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="rounded  pt-6 pb-8 w-full">
                    <div>
                      <div className="py-2">
                        <span className="text-sm text-gray-500">Date</span>
                        <DatePicker
                          selected={startDate}
                          onChange={(date: Date) => setStartDate(date)}
                          className="bg-white py-2 px-2 rounded-md border-2 border-gray-600 w-full "
                          //   customInput={<AiOutlineCalendar />}
                        />
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <DatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            className="bg-white py-2 px-2 rounded-md border-2 border-gray-600"
                            //   customInput={<AiOutlineCalendar />}
                          />
                        </div>
                        <span className="text-gray-500 px-5">à</span>
                        <div>
                          <DatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            className="bg-white py-2 px-2 rounded-md border-2 border-gray-600"
                            //   customInput={<AiOutlineCalendar />}
                          />
                        </div>
                      </div>
                      <hr className="bg-gray-200 h-1 mt-5"></hr>
                      <div className="flex flex-row justify-between mt-5">
                        <div>statut</div>
                        <div>
                          <select
                            onChange={(e) => {
                              setSelect(e.target.value);
                            }}
                            className="bg-white border-1 border-gray-100 py-1 px-3 rounded-lg"
                          >
                            <option value="confirmee">confirmee</option>
                            <option value="En attente">En attente</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="pt-5">
                          {select === "confirmee" ? (
                            <div className=" text-white flex flex-row bg-[#2772eb1f] ">
                              <div className="bg-[#005FF8] flex justify-center items-center p-2 rounded-lg">
                                <RiNotification3Fill />
                              </div>
                              <div className="w-5/2  text-black ml-2">
                                Une notification sera envoyée 48h avant votre
                                garde à tous les clients à proximité.
                              </div>
                            </div>
                          ) : (
                            <div className=" text-white flex flex-row bg-[#eb6f271f] ">
                              <div className="bg-[#da6b11] flex justify-center items-center p-2 rounded-lg">
                                <RiNotification3Fill />
                              </div>
                              <div className="w-5/2  text-black ml-2">
                                Une notification sera envoyée 48h avant votre
                                garde à tous les clients à proximité.
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="shadow-lg rounded-md py-3 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Annuler
                  </button>
                  <button
                    className="text-white bg-[#00B963] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Confirmer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
