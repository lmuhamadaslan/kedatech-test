function parkir(jenis, masuk, keluar) {
  // pilih jenis kendaraan
  if (jenis === 'mobil') {
    // tiap 1 jam kalau mobil 5000
    var jam = keluar.getHours() - masuk.getHours();
    var menit = keluar.getMinutes() - masuk.getMinutes();
    var detik = keluar.getSeconds() - masuk.getSeconds();
    var total = jam * 5000;

    // kalau 1 jam lewan 56 detik tidak dibulatkan 
    // kalau 1 jam 1 menit 2 detik dibulatkan ke atas
    if (menit === 1 && detik > 1) {
        total += 5000;
    } else if (menit > 1) {
        total += 5000;
    } else if (menit === 0 && detik < 1) {
        total = total;
    } else {
        total += 0;   
    }
    

    // kalau lebih dari 1 hari, tambah 100000
    if (keluar.getDate() - masuk.getDate() > 0) {
      total += 80000;
    } else {
      total += 0;
    }

    var data = {
      jenis: jenis,
      waktu_masuk: masuk,
      waktu_keluar: keluar,
      total_harga: 'Rp.'+total,
    };

    return data;
  } else if (jenis === 'motor') {
    // tiap 1 jam kalau motor 3000
    var jam = keluar.getHours() - masuk.getHours();
    var menit = keluar.getMinutes() - masuk.getMinutes();
    var detik = keluar.getSeconds() - masuk.getSeconds();
    var total = jam * 2000;

    // kalau 1 jam lewan 56 detik tidak dibulatkan 
    // kalau 1 jam 1 menit 2 detik dibulatkan ke atas
    if (menit === 1 && detik > 1) {
      total += 2000;
  } else if (menit > 1) {
      total += 2000;
  } else if (menit === 0 && detik < 1) {
      total = total;
  } else {
      total += 0;   
  }
    
    // kalau lebih dari 1 hari, tambah 60000
    if (keluar.getDate() - masuk.getDate() > 0) {
      total += 40000;
    } else {
      total += 0;
    }

    var data = {
      jenis: jenis,
      waktu_masuk: masuk,
      waktu_keluar: keluar,
      total_harga: 'Rp.'+total,
    };

    return data;
  }
}

console.log(
  parkir(
    'mobil',
    new Date('2018-01-01 12:00:00'),
    new Date('2018-01-01 13:01:00')
  )
);

// motor
console.log(
  parkir(
    'motor',
    new Date('2018-01-01 12:00:00'),
    new Date('2018-01-01 13:01:00')
  )
);

module.exports = parkir;
