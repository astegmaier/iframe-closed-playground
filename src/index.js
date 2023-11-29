document.getElementById("add-iframe").onclick = async () => {
  const iframe = document.createElement("iframe");
  iframe.id = "iframe";
  iframe.style.height = "400px";
  iframe.srcdoc = `
          <!DOCTYPE html>
          <html>
          <body>
            <h1>Hi, I am the iframe.</h1>
          </body>
          </html>
        `;
  document.getElementById("main").appendChild(iframe);
};

document.getElementById("remove-iframe").onclick = () => {
  document.getElementById("main").textContent = "";
};
