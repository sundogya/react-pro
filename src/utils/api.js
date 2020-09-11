import config from "./config";
function api(path, method, data, header = null) {
  header = header ? header : {};
  if (!header["Content-Type"]) {
    header["Content-Type"] = "application/json";
  }
  switch (method) {
    case "GET": {
      const temp = [];
      for (const key in data) {
        temp.push(key + "=" + data[key]);
      }
      path += "?" + temp.join("&");
      break;
    }
    default: {
      break;
    }
  }
  header.Authorization = localStorage.getItem("auth_token");

  const reqProperty = {
    header,
    method,
    cache: "default",
  };
  if (method !== "GET") {
    reqProperty.body = data;
  }
  return fetch(config.baseUrl + path, reqProperty)
    .then((origin) => {
      if (origin.status !== 200) {
        const err = new Error(origin.statusText);
        err.response = origin.json();
        throw err;
      } else {
        return origin.json();
      }
    })
    .catch((err) => {
      console.log(err.response);
      err.response.then((res) => {
        console.log(res);
      });
    });
}
export default api;
