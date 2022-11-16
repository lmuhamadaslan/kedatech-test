const parkir = require('./parkir.js');

// test case 1 - mobil parkir 1 jam 5000
test('mobil parkir 1 jam 5000', () => {
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
    total_harga: 'Rp.5000',
  });
});

// test case 2 - mobil parkir 1 jam 1 menit 5000
test('mobil parkir 1 jam 1 menit 5000', () => {
  expect(
    parkir(
      'mobil',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:01:00')
    )
  ).toEqual({
    jenis: 'mobil',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:01:00'),
    total_harga: 'Rp.5000',
  });
})

// test case 3 - mobil parkir lebih dari 1 jam 1 menit dibulatkan ke atas
test('mobil parkir lebih dari 1 jam 1 menit dibulatkan ke atas', () => {
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
    total_harga: 'Rp.10000',
  });
});

// test case 4 - mobil parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan
test('mobil parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan', () => {
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
    total_harga: 'Rp.5000',
  });
});

// test case 5 - mobil parkir lebih dari 1 hari tambah 80000
test('mobil parkir lebih dari 1 hari ditambah 80000', () => {
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
    total_harga: 'Rp.85000',
  });
});

// test case 6 - motor parkir 1 jam 2000
test('motor parkir 1 jam 2000', () => {
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
    total_harga: 'Rp.2000',
  });
});

// test case 7 - motor parkir 1 jam 1 menit 2000
test('motor parkir 1 jam 1 menit 2000', () => {
  expect(
    parkir(
      'motor',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-01 13:01:00')
    )
  ).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-01 13:01:00'),
    total_harga: 'Rp.2000',
  });
});

// test case 8 - motor parkir lebih dari 1 jam 1 menit dibulatkan ke atas
test('motor parkir lebih dari 1 jam 1 menit dibulatkan ke atas', () => {
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
    total_harga: 'Rp.4000',
  });
});

// test case 9 - motor parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan
test('motor parkir 1 jam lebih kurang dari 1 menit tidak dibulatkan', () => {
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
    total_harga: 'Rp.2000',
  });
});

// test case 10 - motor parkir lebih dari 1 hari ditambah 40000
test('motor parkir lebih dari 1 hari ditambah 40000', () => {
  expect(
    parkir(
      'motor',
      new Date('2022-11-01 12:00:00'),
      new Date('2022-11-02 13:00:00')
    )
  ).toEqual({
    jenis: 'motor',
    waktu_masuk: new Date('2022-11-01 12:00:00'),
    waktu_keluar: new Date('2022-11-02 13:00:00'),
    total_harga: 'Rp.42000',
  });
});
