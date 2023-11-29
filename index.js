document.getElementById("add-iframe-then-remove").onclick = async () => {
  const iframe = document.createElement("iframe");
  iframe.id = "iframe";
  iframe.style.height = "400px";
  iframe.style.backgroundColor = "lightgrey";
  iframe.srcdoc = `
          <!DOCTYPE html>
          <html>
          <body>
            <h1>Hi, I am the iframe.</h1>
          </body>
          </html>
        `;
  document.getElementById("main").appendChild(iframe);
  await wait(100);
  const iframeContentWindow = iframe.contentWindow;
  iframeContentWindow.addEventListener("unload", () => {
    console.log("unload event fired");
  });
  await wait(100);
  console.log(
    "before iframe removed: iframeContentWindow.closed:",
    iframeContentWindow.closed
  );
  document.getElementById("main").textContent = "";
  console.log(
    "after iframe removed: iframeContentWindow.closed:",
    iframeContentWindow.closed
  );
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
