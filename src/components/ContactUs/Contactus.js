import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  ///faKey,
  faMailBulk,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
///import { handleRequest } from "msw";
const Contactus = () => {
  let [email, setEmail] = useState("");
  let [FullName, setFullName] = useState("");
  let [Message, setMessage] = useState("");
  const [Showdata, setShowdata] = useState(false);
  const handleSubmit = () => {if (Message.trim()!==''){setShowdata(true)}};
  return (
    <div className="container mt-5 h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="card bg-dark col-5">
          <div className="card-header ">
            <h3 className="login-name text-light">
              <b>Queries</b>
            </h3>
          </div>
          <div className="card-body" style={{ backgroundColor: "#b30000" }}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
              }}
            >
              {" "}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-white">
                    <FontAwesomeIcon
                      className="fa-beat-fade"
                      icon={faUser}
                      style={{ fontSize: "1.75em", color: "black" }}
                    ></FontAwesomeIcon>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="FullName"
                  required
                  value={FullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input-group form-group  mt-3">
                <div className="input-group-prepend">
                  <span className="input-group-text text-white">
                    <FontAwesomeIcon
                      className="fa-beat-fade"
                      icon={faMailBulk}
                      style={{ fontSize: "1.75em", color: "black" }}
                    ></FontAwesomeIcon>
                  </span>
                </div>
                <input
                  type="email"
                  aria-label="email"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group form-group  mt-3">
                <div className="input-group-prepend">
                  <span className="input-group-text text-white">
                    <FontAwesomeIcon
                      className="fa-beat-fade"
                      icon={faComment}
                      style={{ fontSize: "1.75em", color: "black" }}
                    ></FontAwesomeIcon>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Query"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="submit"
                  value="Submit"
                  className="btn flo at-right  btn-dark mt-1"
                  onClick={handleSubmit}
                />
              </div>
              {Showdata ? (
               <div>
                  {
                    Showdata && Message.trim() !== '' && (
                      <h5 className="text-light">
                      Your Request Successfully Submitted </h5> )
                  }
                  </div>
                
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
