// buat class parkir
class Parkir {
  constructor(jenis, masuk, keluar) {
    this.jenis = jenis;
    this.masuk = masuk;
    this.keluar = keluar;
  }

  catatParkir() {
    var hari = this.keluar.getDate() - this.masuk.getDate();
    var jam = this.keluar.getHours() - this.masuk.getHours();
    var menit = this.keluar.getMinutes() - this.masuk.getMinutes();
    var detik = this.keluar.getSeconds() - this.masuk.getSeconds();
    var total =
      this.jenis === 'mobil'
        ? jam * 5000
        : this.jenis === 'motor'
        ? jam * 2000
        : 0;

    if (this.jenis === 'mobil') {
      if (menit === 1 && detik > 0) {
        total += 5000;
      } else if (menit > 1) {
        total += 5000;
      } else if (menit === 1 && detik < 0) {
        total += total;
      } else {
        total += 0;
      }

      if (this.keluar.getDate() - this.masuk.getDate() > 0) {
        total += 80000;
      } else {
        total += 0;
      }

      var data = {
        jenis: this.jenis,
        waktu_masuk: this.masuk,
        waktu_keluar: this.keluar,
        lama_parkir: `${hari} hari ${jam} jam ${menit} menit ${detik} detik`,
        total_harga: `Rp.${total}`,
      };
      return data;
    } else if (this.jenis === 'motor') {
      if (menit === 1 && detik > 0) {
        total += 2000;
      } else if (menit > 1) {
        total += 2000;
      } else if (menit === 1 && detik < 0) {
        total += total;
      } else {
        total += 0;
      }

      if (this.keluar.getDate() - this.masuk.getDate() > 0) {
        total += 40000;
      } else {
        total += 0;
      }

      var data = {
        jenis: this.jenis,
        waktu_masuk: this.masuk,
        waktu_keluar: this.keluar,
        lama_parkir: `${hari} hari ${jam} jam ${menit} menit ${detik} detik`,
        total_harga: `Rp.${total}`,
      };
      return data;
    } else {
      return 'Jenis kendaraan tidak ditemukan';
    }
  }

  tampilkanData() {
    console.log(this.catatParkir());
  }
}

let parkir = new Parkir(
  'mobil',
  new Date('2022-11-01 12:00:00'),
  new Date('2022-11-02 18:00:00')
);

let parkir2 = new Parkir(
  'motor',
  new Date('2022-11-01 12:00:00'),
  new Date('2022-11-02 18:00:00')
);

parkir.tampilkanData();
parkir2.tampilkanData();

module.exports = Parkir;
