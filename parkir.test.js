const Parkir = require('./parkir.js');

// test case 1 - mobil parkir 1 jam 5000
test('mobil parkir 1 jam 5000', () => {
  const parkir = new Parkir('mobil', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:00:00'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:00:00'),
    lama_parkir: '0 hari 1 jam 0 menit 0 detik',
    total_harga: 'Rp.5000',
  });
});

// test case 2 - mobil parkir 1 jam 1 menit 5000
test('mobil parkir 1 jam 1 menit 5000', () => {
  const parkir = new Parkir('mobil', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:01:00'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:01:00'),
    lama_parkir: '0 hari 1 jam 1 menit 0 detik',
    total_harga: 'Rp.5000',
  });
})

// test case 3 - mobil parkir lebih dari 1 jam 1 menit dibulatkan ke atas
test('mobil parkir lebih dari 1 jam 1 menit dibulatkan ke atas', () => {
  const parkir = new Parkir('mobil', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:01:02'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:01:02'),
    lama_parkir: '0 hari 1 jam 1 menit 2 detik',
    total_harga: 'Rp.10000',
  });
});

// test case 4 - mobil parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan
test('mobil parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan', () => {
  const parkir = new Parkir('mobil', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:00:59'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:00:59'),
    lama_parkir: '0 hari 1 jam 0 menit 59 detik',
    total_harga: 'Rp.5000',
  });
});

// test case 5 - mobil parkir lebih dari 1 hari tambah 80000
test('mobil parkir lebih dari 1 hari ditambah 80000', () => {
  const parkir = new Parkir('mobil', new Date('2022-11-01 08:00:00'), new Date('2022-11-02 09:00:00'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-02 09:00:00'),
    lama_parkir: '1 hari 1 jam 0 menit 0 detik',
    total_harga: 'Rp.85000',
  });
});

// test case 6 - motor parkir 1 jam 2000
test('motor parkir 1 jam 2000', () => {
  const parkir = new Parkir('motor', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:00:00'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:00:00'),
    lama_parkir: '0 hari 1 jam 0 menit 0 detik',
    total_harga: 'Rp.2000',
  });
});

// test case 7 - motor parkir 1 jam 1 menit 2000
test('motor parkir 1 jam 1 menit 2000', () => {
  const parkir = new Parkir('motor', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:01:00'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:01:00'),
    lama_parkir: '0 hari 1 jam 1 menit 0 detik',
    total_harga: 'Rp.2000',
  });
});

// test case 8 - motor parkir lebih dari 1 jam 1 menit dibulatkan ke atas
test('motor parkir lebih dari 1 jam 1 menit dibulatkan ke atas', () => {
  const parkir = new Parkir('motor', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:01:02'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:01:02'),
    lama_parkir: '0 hari 1 jam 1 menit 2 detik',
    total_harga: 'Rp.4000',
  });
});

// test case 9 - motor parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan
test('motor parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan', () => {
  const parkir = new Parkir('motor', new Date('2022-11-01 08:00:00'), new Date('2022-11-01 09:00:59'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-01 09:00:59'),
    lama_parkir: '0 hari 1 jam 0 menit 59 detik',
    total_harga: 'Rp.2000',
  });
});

// test case 10 - motor parkir lebih dari 1 hari ditambah 40000
test('motor parkir lebih dari 1 hari ditambah 40000', () => {
  const parkir = new Parkir('motor', new Date('2022-11-01 08:00:00'), new Date('2022-11-02 09:00:00'));
  expect(parkir.catatParkir()).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 08:00:00'),
    waktu_keluar: new Date('2022-11-02 09:00:00'),
    lama_parkir: '1 hari 1 jam 0 menit 0 detik',
    total_harga: 'Rp.45000',
  });
});
// test('motor parkir lebih dari 1 hari ditambah 40000', () => {
//   const parkir = new Parkir('motor', new Date('2022-11-01 08:00:00'), new Date('2022-11-02 09:00:00'));
//   expect(parkir.catatParkir()).toEqual({
//     jenis: 'motor',
//     waktu_masuk: new Date('2022-11-01 08:00:00'),
//     waktu_keluar: new Date('2022-11-02 09:00:00'),
//     lama_parkir: '1 hari 1 jam 0 menit 0 detik',
//     total_harga: 'Rp.42000',
//   });
// });
