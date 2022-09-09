const getMonthName = (index, lang) => {
  const enName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const vnName = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  return lang === "en" ? enName[index] : vnName[index];
};

const getDayOfWeek = (index) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[index];
};

const getToday = () => {
  const { day, date, month } = extractDate(new Date());
  return `${day}, ${date} ${month}`;
};

const extractDate = (date) => {
  return {
    day: getDayOfWeek(date.getDay()),
    date: date.getDate(),
    month: getMonthName(date.getMonth(), "en"),
  };
};

const getDaysInMonth = () => {
  const currentDate = new Date();
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  let dates = [];
  while (date.getMonth() === currentDate.getMonth()) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
};

module.exports = {
  getToday,
  getDaysInMonth,
  extractDate,
};
