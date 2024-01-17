requirejs.config({
  baseUrl: "scripts",
  paths: {
    jquery: ["https://code.jquery.com/jquery-3.6.3.min"],
    clevertap: [
      ("https:" == document.location.protocol
        ? "https://d2r1yp2w7bby2u.cloudfront.net"
        : "http://static.clevertap.com") + "/js/clevertap.min",
    ],
  },
});
