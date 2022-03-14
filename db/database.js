const Jadwal = [
  {
    jadwal_id: '001',
    bandara_kode_keberangkatan: 'UFA',
    bandara_kode_tujuan: 'DTM',
    maskapai_id: 'AE',
  },
  {
    jadwal_id: '002',
    bandara_kode_keberangkatan: 'DTM',
    bandara_kode_tujuan: 'TKG',
    maskapai_id: 'BW',
  },
  {
    jadwal_id: '003',
    bandara_kode_keberangkatan: 'TKG',
    bandara_kode_tujuan: 'MIA',
    maskapai_id: 'GA',
  },
  {
    jadwal_id: '004',
    bandara_kode_keberangkatan: 'MIA',
    bandara_kode_tujuan: 'DTM',
    maskapai_id: 'AA',
  },
  {
    jadwal_id: '005',
    bandara_kode_keberangkatan: 'TKG',
    bandara_kode_tujuan: 'UFA',
    maskapai_id: 'CL',
  },
  {
    jadwal_id: '006',
    bandara_kode_keberangkatan: 'UFA',
    bandara_kode_tujuan: 'MIA',
    maskapai_id: 'AE',
  },
  {
    jadwal_id: '007',
    bandara_kode_keberangkatan: 'DTM',
    bandara_kode_tujuan: 'MIA',
    maskapai_id: 'BW',
  },
  {
    jadwal_id: '008',
    bandara_kode_keberangkatan: 'MIA',
    bandara_kode_tujuan: 'TKG',
    maskapai_id: 'AA',
  },
];

const Maskapai = [
  {
    maskapai_id: 'AE',
    maskapai_nama: 'Aeroflot',
    maskapai_logo: require('../components/images/Aeroflot.png'),
  },
  {
    maskapai_id: 'LA',
    maskapai_nama: 'Lion Air',
    maskapai_logo: require('../components/images/Lion.png'),
  },
  {
    maskapai_id: 'BW',
    maskapai_nama: 'Blue Wings',
    maskapai_logo: require('../components/images/Bluewings.png'),
  },
  {
    maskapai_id: 'AA',
    maskapai_nama: 'American Airlines',
    maskapai_logo: require('../components/images/Americanairlines.png'),
  },
  {
    maskapai_id: 'CL',
    maskapai_nama: 'Citilink',
    maskapai_logo: require('../components/images/Citilink.png'),
  },
  {
    maskapai_id: "GA",
    maskapai_nama: "Garuda Indonesia",
    maskapai_logo: require('../components/images/Garuda.png'),
  },
];

const Bandara = [
  {
    bandara_kode: 'UFA',
    bandara_nama: 'Ufa',
  },
  {
    bandara_kode: 'DTM',
    bandara_nama: 'Dortmund',
  },
  {
    bandara_kode: 'TKG',
    bandara_nama: 'Raden Intan',
  },
  {
    bandara_kode: 'MIA',
    bandara_nama: 'Miami',
  },
];

export {Maskapai, Bandara, Jadwal};
