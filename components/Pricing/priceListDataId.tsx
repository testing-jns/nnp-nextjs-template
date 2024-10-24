const priceListDataId = [
  {
    key: 1,
    packageName: "Dasar",
    description: "Perlindungan Dasar untuk Jaringan Anda.",
    price: {
      monthly: "500",
      yearly: "5.299",
    },
    monthYear: {
      month: "bln",
      year: "thn",
    },
    features: [
      { key: 1, text: "Konsultasi awal dan analisis kebutuhan", status: "active" },
      { key: 2, text: "Instalasi jaringan dasar (biaya satu kali)", status: "active" },
      { key: 3, text: "Pengaturan firewall dan perlindungan dasar", status: "active" },
      { key: 4, text: "Monitoring jaringan", status: "active" },
      { key: 5, text: "Dukungan teknis 24/7", status: "inactive" },
    ],
  },
  {
    key: 2,
    packageName: "Standar",
    description: "Keamanan Jaringan yang Komprehensif.",
    price: {
      monthly: "799",
      yearly: "9.199",
    },
    monthYear: {
      month: "bln",
      year: "thn",
    },
    features: [
      { key: 1, text: "Semua fitur Paket Dasar", status: "active" },
      { key: 2, text: "Dukungan teknis 24/7", status: "active" },
      {
        key: 3, 
        text: "Pengaturan perangkat keamanan tambahan (VPN, dll)",
        status: "active",
      },
      {
        key: 4, 
        text: "Pelatihan penggunaan dan keamanan untuk karyawan (sesi bulanan)",
        status: "active",
      },
      { key: 5, text: "Laporan bulanan tentang kesehatan jaringan", status: "active" },
    ],
  },
  {
    key: 3,
    packageName: "Premium",
    description: "Tenang dan Terlindungi Sepenuhnya.",
    price: {
      monthly: "1.499",
      yearly: "17.789",
    },
    monthYear: {
      month: "bln",
      year: "thn",
    },
    features: [
      { key: 1, text: "Semua fitur Paket Standar", status: "active" },
      { key: 2, text: "Audit keamanan menyeluruh (setiap 6 bulan)", status: "active" },
      {
        key: 3, 
        text: "Instalasi perangkat keras keamanan (biaya satu kali)",
        status: "active",
      },
      { key: 4, text: "Dukungan teknis prioritas", status: "active" },
      { key: 5, text: "Pembaruan dan pemeliharaan sistem", status: "active" },
    ],
  },
];

export default priceListDataId;
