const barangData = [
    { kode: "001", nama: "A", harga: 10000 },
    { kode: "002", nama: "B", harga: 20000 },
    { kode: "003", nama: "C", harga: 30000 },
  ];
  
  function tampilkanDataBarang() {
    const barangTable = document.getElementById("barangTable");
    barangData.forEach((barang, index) => {
      const row = barangTable.insertRow(index + 1);
      const kodeTab = row.insertCell(0);
      const namaTab = row.insertCell(1);
      const hargaTab = row.insertCell(2);
  
      kodeTab.textContent = barang.kode;
      namaTab.textContent = barang.nama;
      hargaTab.textContent = barang.harga;
    });
  }
  
  function tambahTransaksi(event) {
    event.preventDefault();
  
    const kodeInput = document.getElementById("kodeInput");
    const quantityInput = document.getElementById("quantityInput");
  
    const selectedBarang = barangData.find(
      (barang) => barang.kode === kodeInput.value
    );
  
    if (!selectedBarang) {
      alert("barang tidak ada ");
      return;
    }
  
    const jumlah = parseInt(quantityInput.value);
    const totalHarga = selectedBarang.harga * jumlah;
  
    const bayar = window.prompt(
      "Total harga: " +
        totalHarga +
        "\n\n" +
        "masukan uang anda:"
    );
  
    if (bayar === null || bayar === "") {
      alert("Pembayaran dibatalkan");
      return;
    }
    const jumlahBayar = parseFloat(bayar);
  
    if (isNaN(jumlahBayar) || jumlahBayar < totalHarga) {
      alert(
        "uang anda kurang lee"
      );
      return;
    }
    const kembalian = jumlahBayar - totalHarga;
  
    alert(
      "Pembayaran berhasil!\n\n" +
        "Total: " +
        totalHarga +
        "\n" +
        "Jumlah yang dibayarkan: " +
        jumlahBayar +
        "\n" +
        "Kembalian: " +
        kembalian
    );
  }
  document.addEventListener("DOMContentLoaded", () => {
    tampilkanDataBarang();
  });