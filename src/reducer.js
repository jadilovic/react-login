import React, { useState } from "react";
import axios from "axios";
import authHeader from "./service/auth-header";

function reducer() {
  let data = [];

  const structures = () => {
    return axios
      .get("/api/structures", {
        headers: authHeader(),
      })
      .then(function (response) {
        data = response;
        console.log(data);
      });
  };

  structures();
  return data;
}

export default reducer;
