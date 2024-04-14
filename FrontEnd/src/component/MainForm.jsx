//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

//const MainForm = () => {
//  const navigate = useNavigate();
//  const [error, setError] = useState("");
//  const [data, setdata] = useState({ name: "", room: "" });

//  const handleChange = (e) => {
//    setdata({
//      ...data,
//      [e.target.name]: e.target.value,
//    });
//  };

//  const validation = () => {
//    if (!data.name) {
//      setError("Please enter your name");
//      return false;
//    }

//    if (!data.room) {
//      setError("Please select room.");
//      return false;
//    }
//    setError("");
//    return true;
//  };

//  const handleSubmit = (e) => {
//    e.preventDefault();

//    const isValid = validation();
//    if (isValid) {
//      navigate(`/chat/${data.room}`, { state: data });
//    }
//  };
//  return (
//    <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
//      <form onSubmit={handleSubmit}>
//        <div className="form-group mb-4">
//          <h2 className="text-warning mb-4">Welcome to Royal Chat Club</h2>
//        </div>
//        <div className="form-group mb-4">
//          <input
//            type="text"
//            className="form-control bg-light"
//            name="name"
//            onChange={handleChange}
//            placeholder="Enter name"
//          />
//        </div>
//        <div className="form-group mb-4">
//          <select
//            name="room"
//            className="form-select bg-light"
//            onChange={handleChange}
//          >
//            <option value="">Select Room</option>
//            <option value="Gaming">Gaming</option>
//            <option value="Coding">Coding</option>
//            <option value="SocialMedia">Social Media</option>
//          </select>
//        </div>

//        <button type="submit" className="btn btn-warning w-100 mb-2">
//          Submit
//        </button>

//        {error ? <small className="text-danger">{error}</small> : ""}
//      </form>
//    </div>
//  );
//};

//export default MainForm;
