let data = {};

// Ambil data dari data.json
async function loadData() {
  try {
    const response = await fetch("data.json");
    data = await response.json();
    renderTable("A"); // tampilkan default kategori A
  } catch (error) {
    console.error("Gagal memuat data.json:", error);
  }
}

// Render tabel sesuai kategori
function renderTable(kategori) {
  const tbody = document.getElementById("tabel-body");
  tbody.innerHTML = "";

  if (!data[kategori]) return;

  data[kategori].forEach((item, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${item.indikator}</td>
        <td>${item.nilai}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Event: saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  loadData();

  // Event listener dropdown
  document.getElementById("kategori").addEventListener("change", (e) => {
    renderTable(e.target.value);
  });
});
