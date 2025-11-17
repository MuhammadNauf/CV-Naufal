const citySelect = document.getElementById("citySelect");
const cityLabel = document.getElementById("cityLabel");
const aboutText = document.getElementById("aboutText");
const projects = document.getElementById("projects");
const downloadBtn = document.getElementById("downloadBtn");

const data = {
  padang: {
    city: "Padang, Sumatra Barat",
    about:
      "Saya adalah seorang kreator multimedia dengan keahlian videografi, fotografi, dan editing video serta pengalaman project berbasis GIS.",
    projects: [
      "Dokumentasi Konser Opick",
      "Video Cinematic",
      "Dokumentasi Duta Remaja Riau 2022",
      "Dokumentasi Kegiatan Kampus",
      "Magang PT Telkom Akses (GIS & IOC)"
    ]
  },
  pekanbaru: {
    city: "Pekanbaru, Riau",
    about:
      "Saya kreator multimedia yang aktif dalam project event, komersial, dan pembuatan sistem IT berbasis lokasi.",
    projects: [
      "Dokumentasi Konser Opick",
      "Video Cinematic (Short Movie)",
      "Dokumentasi Duta Remaja Riau 2022",
      "Video Kampus & Event",
      "Magang PT Telkom Akses"
    ]
  }
};

function render(cityKey) {
  const d = data[cityKey];
  cityLabel.textContent = d.city;
  aboutText.textContent = d.about;
  projects.innerHTML = d.projects.map(p => "• " + p).join("<br>");
}

citySelect.addEventListener("change", e => render(e.target.value));

downloadBtn.addEventListener("click", () => {
  html2pdf().from(document.getElementById("cvInner")).save("CV_MuhammadNaufal.pdf");
});

render("padang");
