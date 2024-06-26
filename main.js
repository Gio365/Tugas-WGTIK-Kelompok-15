/* 

Nama Kelompok 
1.Deril Wijdan Falih
2.Giovanni Nadika
3. Haikal Atmajati Firdaus
Kelas IT-46-GAB02
*/

function kenaRazia(date, data) {
  // Daftar lokasi ganjil genap
  const ganjilGenapLokasi = ["Gajah Mada", "Hayam Wuruk", "Sisingamangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"];

  // Hasil tilang
  let hasilTilang = [];

  // Loop melalui setiap kendaraan dalam data
  for (let i = 0; i < data.length; i++) {
    let kendaraan = data[i];
    if (kendaraan.type === "Mobil") {
      // Mendapatkan digit terakhir dari nomor plat
      let platAngka = kendaraan.plat.split(" ")[1];
      let digitTerakhir = platAngka[platAngka.length - 1];

      // Menentukan apakah plat nomor ganjil atau genap
      let platGenap = digitTerakhir % 2 === 0;
      let tanggalGenap = date % 2 === 0;

      // Jika plat nomor tidak sesuai dengan aturan tanggal
      if (platGenap !== tanggalGenap) {
        // Hitung jumlah rute yang melanggar
        let pelanggaran = 0;
        for (let j = 0; j < kendaraan.rute.length; j++) {
          for (let k = 0; k < ganjilGenapLokasi.length; k++) {
            if (kendaraan.rute[j] === ganjilGenapLokasi[k]) {
              pelanggaran++;
            }
          }
        }
        if (pelanggaran > 0) {
          hasilTilang.push({ name: kendaraan.name, tilang: pelanggaran });
        }
      }
    }
  }
  return hasilTilang;
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"],
    },
  ])
);
