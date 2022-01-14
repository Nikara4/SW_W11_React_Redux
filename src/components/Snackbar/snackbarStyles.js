const error = {
  border: `1px solid #d63031`,
  color: "white",
  backgroundColor: "#d63031",
};
const warning = {
  border: `1px solid #fdcb6e`,
  color: "white",
  backgroundColor: "#fdcb6e",
};
const info = {
  border: `1px solid #74b9ff`,
  color: "white",
  backgroundColor: "#74b9ff",
};
const success = {
  border: `1px solid #00b894`,
  color: "white",
  backgroundColor: "#00b894",
};
const initial = {
  border: "1px solid black",
  color: "white",
  backgroundColor: "black",
};

export const getStyle = (key) => {
  switch (key) {
    case "error":
      return error;
    case "info":
      return info;
    case "success":
      return success;
    case "warning":
      return warning;
    default:
      return initial;
  }
};
