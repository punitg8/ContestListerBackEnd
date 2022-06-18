const convertData = (data) => {
  const newdata = data.map((entry) => {
    const {
      name,
      url,
      start_time,
      end_time,
      duration,
      site,
      in_24_hours,
      status,
    } = entry;

    return {
      name,
      url,
      startTime: start_time,
      endTime: end_time,
      duration:Math.ceil(duration),
      platform: site,
      in24Hours: in_24_hours === "No" ? false : true,
      onGoing: status === "BEFORE" ? false : true,
    };
  });
  return newdata;
};

module.exports={
  convertData
}
