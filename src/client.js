import * as sapper from "@sapper/app";

Sentry.init({
  dsn: "https://eb561649e0434bfb83ca2019d8518b8b@sentry.io/5175761",
});

sapper.start({
  target: document.querySelector("#sapper"),
});
