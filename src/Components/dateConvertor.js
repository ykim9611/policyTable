function dateConvertor(unixDate) {
  if (unixDate === "None") {
    return "Not available";
  } else {
    return JSON.stringify(new Date(unixDate * 1000)).slice(1, 11);
  }
}

export default dateConvertor;
