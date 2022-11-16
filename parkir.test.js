const parkir = require('./parkir.js');

// test case 1 - mobil tiap 1 jam 5000
test('mobil tiap 1 jam 5000', () => {
  expect(
    parkir(
      'mobil',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:00:00')
    )
  ).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:00:00'),
    total: 5000,
  });
});

// test case 2 - mobil tiap lebih dari 1 jam 1 menit dibulatkan ke atas
test('mobil tiap lebih dari 1 menit dibulatkan ke atas', () => {
  expect(
    parkir(
      'mobil',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:01:02')
    )
  ).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:01:02'),
    total: 10000,
  });
});

// test case 3 - mobil kalau 1 jam lebih kurang dari 1 menit tidak dibulatkan
test('mobil kalau 1 jam lebih kurang dari 1 menit tidak dibulatkan', () => {
  expect(
    parkir(
      'mobil',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:00:59')
    )
  ).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:00:59'),
    total: 5000,
  });
});

// test case 3 - mobil tiap lebih dari 1 hari tambah 80000
test('mobil tiap lebih dari 1 hari tambah 80000', () => {
  expect(
    parkir(
      'mobil',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-02 13:00:00')
    )
  ).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-02 13:00:00'),
    total: 85000,
  });
});

// test case 4 - motor tiap 1 jam 2000
test('motor tiap 1 jam 2000', () => {
  expect(
    parkir(
      'motor',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:00:00')
    )
  ).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:00:00'),
    total: 2000,
  });
});

// test case 5 - motor tiap lebih dari 1 jam 1 menit dibulatkan ke atas
test('motor tiap lebih dari 1 jam 1 menit dibulatkan ke atas', () => {
  expect(
    parkir(
      'motor',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:01:02')
    )
  ).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:01:02'),
    total: 4000,
  });
});

// test case 6 - motor kalau 1 jam lebih kurang dari 1 menit tidak dibulatkan
test('kalau 1 jam lebih kurang dari 1 menit tidak dibulatkan', () => {
  expect(
    parkir(
      'motor',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:00:59')
    )
  ).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:00:59'),
    total: 2000,
  });
});
