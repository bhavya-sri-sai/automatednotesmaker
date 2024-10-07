let file;
// let isLoading = false;
const btn = document.querySelector(".button");
document.getElementById("fileInput").addEventListener("change", function () {
  const fileName = this.files?.[0];
  console.log(fileName.name);
  document.getElementById("fileName").textContent =
    fileName.name ?? "No File Choosen";

  if (fileName) {
    file = fileName;
  }
});
document.querySelector(".button").addEventListener("click", async () => {
  if (!file) {
    return alert("No File Choosen");
  }
  // isLoading = true;
  btn.textContent = "Converting";
  btn.style.pointerEvents = "none";
  const formData = new FormData();
  formData.append("video", file);

  try {
    const res = await fetch("http://localhost:5501/upload", {
      method: "POST",
      body: formData,
    });
    console.log(res);
    const data = await res.json();
    btn.textContent = "Convert";
    if (data.status === "success")
      document.querySelector(".textarea").textContent = data.transcription;
  } catch (error) {
    console.error(error);
  }
});
