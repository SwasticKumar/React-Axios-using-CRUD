// import React from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;
  return (
    <div className="container my-5 py-2">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          
         {/* backgroud video */}
         <video muted loop autoPlay src="./video/bubble bg.mp4"
        //  playsinline
        // data-wf-ignore="true"
        // data-object-fit="cover"
        // disableRemotePlayback
        // disablePictureInPicture
        // x-webkit-wirelessvideoplaybackdisabled
      // x-webkit-airplay="deny"
      ></video>

        </div>
        <div className="col-md-10 mx-auto col-lg-7">
            <h2 className="display-4 fw-bold lh-1 text-white mb-4">
              Enter Your <span className="text-danger">Data</span>
            </h2>
          <form
            className="p-4 p-md-5 mb-5 border rounded bg-light"
            onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
          >
            
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
              />
              <label className="form-check-label" htmlFor="rememberCheck">
                Remember me
              </label>
            </div>
            <button className="btn text-white w-100 " type="submit" style={{backgroundColor:"#1f3265"}}>
              Add To List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
