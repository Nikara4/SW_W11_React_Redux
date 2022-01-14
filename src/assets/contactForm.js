const headers = new Headers();
headers.append({
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_CONTACT_FORM_KEY}`,
});

const body = {
  mock_data: "true",
  ip_address: "92.188.61.181",
  email: "user@example.com",
  user_agent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_4) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.100 Safari/534.30",
  url: "http://example.com/",
};

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
};

fetch(process.env.REACT_APP_CONTACT_FORM_URL, options);

// export const contactFormSend = (data = {}) => {
//   return fetch(process.env.REACT_APP_CONTACT_FORM_URL, {
//     method: "POST",
//     headers,
//     mode: "cors",
//     data: JSON.stringify(data),
//   });
// };
