import React, { useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadImg = () => {
  const [file, setFile] = useState();
  const [picture, setPicture] = useState()
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    e.preventDefault();
    console.log(file)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "xv8nc3ib");
    
    axios
      .post(`https://api.cloudinary.com/v1_1/landry237/image/upload`, formData)
      .then((res) => {
        console.log(res.data);
        setPicture(res.data.url);
        dispatch(uploadPicture(userData._id , picture));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UploadImg;
