/* =========================================================
   INAMI STORE — script.js
   Bagian 1 (paling atas) adalah KONFIGURASI yang mudah diedit.
   ========================================================= */

/* ---------- 1. KONFIGURASI ---------- */
const CONFIG = {
  storeName: "Inami Store",

  // Nomor WhatsApp admin (tulis format lokal 08xxxx; otomatis diubah ke +62).
  // Pesanan dibagi bergantian ke ketiga nomor ini.
  whatsappNumbers: [
    { label: "Admin 1", number: "082220632005" },
    { label: "Admin 2", number: "087825793771" },
    { label: "Admin 3", number: "08174720454" }
  ],

  // Ganti URL ini dengan akun Instagram toko, mis. "https://www.instagram.com/akunmu/"
  instagram: {
    url: "https://www.instagram.com/",
    label: "Instagram Inami Store"
  },

  // true  = tampilkan label "Harga contoh" di kartu + catatan di bawah katalog.
  // false = sembunyikan setelah kamu mengganti semua harga dengan harga asli.
  pricesArePlaceholder: true
};

const CATEGORIES = [
  { id: "robux", label: "Roblox / Robux" },
  { id: "mlbb", label: "Mobile Legends" },
  { id: "topup", label: "Top Up Game" },
  { id: "jasa", label: "Jasa Game" },
  { id: "digital", label: "Produk Digital" }
];

/* Data produk — mudah diedit.
   image: nama file di folder assets/products/ (ganti dengan foto produk milikmu jika ada)
   price: angka dalam Rupiah (HARGA CONTOH, ganti dengan harga asli) */
const PRODUCTS = [
  /* ===== Roblox / Robux — Top Up via Username =====
     HPP 100 Robux = Rp14.500; harga jual = HPP + 7% (belum dibulatkan). */
  { id: "robux-100", category: "robux", subcategory: "username", name: "100 Robux — via Username", desc: "Top up Robux melalui username Roblox. Pastikan username benar sebelum memesan.", price: 15515, image: "robux-80.svg" },
  { id: "robux-200", category: "robux", subcategory: "username", name: "200 Robux — via Username", desc: "Top up Robux melalui username Roblox. Pastikan username benar sebelum memesan.", price: 31030, image: "robux-400.svg" },
  { id: "robux-300", category: "robux", subcategory: "username", name: "300 Robux — via Username", desc: "Top up Robux melalui username Roblox. Pastikan username benar sebelum memesan.", price: 46545, image: "robux-800.svg" },
  { id: "robux-500", category: "robux", subcategory: "username", name: "500 Robux — via Username", desc: "Top up Robux melalui username Roblox. Pastikan username benar sebelum memesan.", price: 77575, image: "robux-1700.svg" },
  { id: "robux-1000", category: "robux", subcategory: "username", name: "1.000 Robux — via Username", desc: "Top up Robux melalui username Roblox. Pastikan username benar sebelum memesan.", price: 155150, image: "robux-1700.svg" },

  /* ===== Top Up Game — contoh sementara, sesuaikan sebelum dipublikasikan ===== */
  /* ===== Mobile Legends — Top Up (HPP + 7%; harga coret tidak digunakan) ===== */
  { id: "mlbb-dm-5", category: "mlbb", subcategory: "topup", name: "5 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1789, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-10", category: "mlbb", subcategory: "topup", name: "10 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 3617, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-12", category: "mlbb", subcategory: "topup", name: "12 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 4049, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-19", category: "mlbb", subcategory: "topup", name: "19 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 6564, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-28", category: "mlbb", subcategory: "topup", name: "28 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 9748, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-44", category: "mlbb", subcategory: "topup", name: "44 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 14395, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-54", category: "mlbb", subcategory: "topup", name: "54 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 19286, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-59", category: "mlbb", subcategory: "topup", name: "59 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 18454, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-71", category: "mlbb", subcategory: "topup", name: "71 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 23504, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-74", category: "mlbb", subcategory: "topup", name: "74 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 24558, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-85", category: "mlbb", subcategory: "topup", name: "85 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 27733, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-88", category: "mlbb", subcategory: "topup", name: "88 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 28790, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-110", category: "mlbb", subcategory: "topup", name: "110 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 39340, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-113", category: "mlbb", subcategory: "topup", name: "113 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 37285, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-128", category: "mlbb", subcategory: "topup", name: "128 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 45140, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-148", category: "mlbb", subcategory: "topup", name: "148 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 51700, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-170", category: "mlbb", subcategory: "topup", name: "170 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 55176, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-176", category: "mlbb", subcategory: "topup", name: "176 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 61725, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-184", category: "mlbb", subcategory: "topup", name: "184 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 65569, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-222", category: "mlbb", subcategory: "topup", name: "222 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 79074, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-240", category: "mlbb", subcategory: "topup", name: "240 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 78130, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-258", category: "mlbb", subcategory: "topup", name: "258 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 91816, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-277", category: "mlbb", subcategory: "topup", name: "277 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 91337, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-284", category: "mlbb", subcategory: "topup", name: "284 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 92451, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-296", category: "mlbb", subcategory: "topup", name: "296 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 96126, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-301", category: "mlbb", subcategory: "topup", name: "301 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 100783, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-305", category: "mlbb", subcategory: "topup", name: "305 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 107251, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-333", category: "mlbb", subcategory: "topup", name: "333 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 110729, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-346", category: "mlbb", subcategory: "topup", name: "346 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 115380, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-356", category: "mlbb", subcategory: "topup", name: "356 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 118975, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-370", category: "mlbb", subcategory: "topup", name: "370 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 120684, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-384", category: "mlbb", subcategory: "topup", name: "384 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 124765, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-408", category: "mlbb", subcategory: "topup", name: "408 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 132042, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-424", category: "mlbb", subcategory: "topup", name: "424 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 138804, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-452", category: "mlbb", subcategory: "topup", name: "452 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 157011, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-518", category: "mlbb", subcategory: "topup", name: "518 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 180921, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-568", category: "mlbb", subcategory: "topup", name: "568 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 180056, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-601", category: "mlbb", subcategory: "topup", name: "601 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 205625, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-642", category: "mlbb", subcategory: "topup", name: "642 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 220272, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-716", category: "mlbb", subcategory: "topup", name: "716 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 245746, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-758", category: "mlbb", subcategory: "topup", name: "758 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 261162, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-790", category: "mlbb", subcategory: "topup", name: "790 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 273120, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-845", category: "mlbb", subcategory: "topup", name: "845 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 291641, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-875", category: "mlbb", subcategory: "topup", name: "875 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 298589, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-938", category: "mlbb", subcategory: "topup", name: "938 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 320585, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-966", category: "mlbb", subcategory: "topup", name: "966 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 330993, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-1045", category: "mlbb", subcategory: "topup", name: "1.045 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 333213, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-1136", category: "mlbb", subcategory: "topup", name: "1.136 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 388089, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-1159", category: "mlbb", subcategory: "topup", name: "1.159 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 397734, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-1443", category: "mlbb", subcategory: "topup", name: "1.443 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 492634, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-1506", category: "mlbb", subcategory: "topup", name: "1.506 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 514630, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-1704", category: "mlbb", subcategory: "topup", name: "1.704 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 582132, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-2010", category: "mlbb", subcategory: "topup", name: "2.010 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 600009, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-2232", category: "mlbb", subcategory: "topup", name: "2.232 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 737321, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-2380", category: "mlbb", subcategory: "topup", name: "2.380 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 783331, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-2578", category: "mlbb", subcategory: "topup", name: "2.578 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 852290, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-2625", category: "mlbb", subcategory: "topup", name: "2.625 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 868509, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-3453", category: "mlbb", subcategory: "topup", name: "3.453 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1150880, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-3738", category: "mlbb", subcategory: "topup", name: "3.738 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1248875, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-4020", category: "mlbb", subcategory: "topup", name: "4.020 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1316493, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-4588", category: "mlbb", subcategory: "topup", name: "4.588 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1510536, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-4830", category: "mlbb", subcategory: "topup", name: "4.830 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1420461, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-5398", category: "mlbb", subcategory: "topup", name: "5.398 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1738302, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-6030", category: "mlbb", subcategory: "topup", name: "6.030 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 1974739, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-6840", category: "mlbb", subcategory: "topup", name: "6.840 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 2202503, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-8040", category: "mlbb", subcategory: "topup", name: "8.040 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 2632983, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-9660", category: "mlbb", subcategory: "topup", name: "9.660 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 3088513, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-10050", category: "mlbb", subcategory: "topup", name: "10.050 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 3291229, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-14490", category: "mlbb", subcategory: "topup", name: "14.490 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 4632770, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-16080", category: "mlbb", subcategory: "topup", name: "16.080 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 5265968, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-18090", category: "mlbb", subcategory: "topup", name: "18.090 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 5924214, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-19320", category: "mlbb", subcategory: "topup", name: "19.320 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 6177027, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-20100", category: "mlbb", subcategory: "topup", name: "20.100 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 6582460, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-21330", category: "mlbb", subcategory: "topup", name: "21.330 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 6835273, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-23340", category: "mlbb", subcategory: "topup", name: "23.340 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 7493519, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-24150", category: "mlbb", subcategory: "topup", name: "24.150 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 7721285, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-26160", category: "mlbb", subcategory: "topup", name: "26.160 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 8379530, image: "topup-mlbb.svg" },
  { id: "mlbb-dm-28170", category: "mlbb", subcategory: "topup", name: "28.170 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 9037776, image: "topup-mlbb.svg" },
  { id: "mlbb-wdp", category: "mlbb", subcategory: "topup", name: "Weekly Diamond Pass", desc: "Top up Diamond Mobile Legends.", price: 32089, image: "topup-mlbb.svg" },
  { id: "mlbb-wdp-2", category: "mlbb", subcategory: "topup", name: "Weekly Diamond Pass ×2", desc: "Top up Diamond Mobile Legends.", price: 66333, image: "topup-mlbb.svg" },
  { id: "mlbb-wdp-3", category: "mlbb", subcategory: "topup", name: "Weekly Diamond Pass ×3", desc: "Top up Diamond Mobile Legends.", price: 99505, image: "topup-mlbb.svg" },
  { id: "mlbb-weekly-elite", category: "mlbb", subcategory: "topup", name: "Weekly Elite Bundle", desc: "Top up Diamond Mobile Legends.", price: 17995, image: "topup-mlbb.svg" },
  { id: "mlbb-monthly-epic", category: "mlbb", subcategory: "topup", name: "Monthly Epic Bundle", desc: "Top up Diamond Mobile Legends.", price: 89760, image: "topup-mlbb.svg" },
  { id: "mlbb-twilight-pass", category: "mlbb", subcategory: "topup", name: "Twilight Pass", desc: "Top up Diamond Mobile Legends.", price: 180581, image: "topup-mlbb.svg" },
  { id: "mlbb-first-100", category: "mlbb", subcategory: "topup", name: "First Recharge 100 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 17995, image: "topup-mlbb.svg" },
  { id: "mlbb-first-300", category: "mlbb", subcategory: "topup", name: "First Recharge 300 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 53772, image: "topup-mlbb.svg" },
  { id: "mlbb-first-500", category: "mlbb", subcategory: "topup", name: "First Recharge 500 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 89760, image: "topup-mlbb.svg" },
  { id: "mlbb-first-1000", category: "mlbb", subcategory: "topup", name: "First Recharge 1.000 Diamonds", desc: "Top up Diamond Mobile Legends.", price: 180581, image: "topup-mlbb.svg" },
  { id: "mlbb-global-11", category: "mlbb", subcategory: "topup", name: "11 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 3659, image: "topup-mlbb.svg" },
  { id: "mlbb-global-22", category: "mlbb", subcategory: "topup", name: "22 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 7318, image: "topup-mlbb.svg" },
  { id: "mlbb-global-14", category: "mlbb", subcategory: "topup", name: "14 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 4987, image: "topup-mlbb.svg" },
  { id: "mlbb-global-56", category: "mlbb", subcategory: "topup", name: "56 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 18299, image: "topup-mlbb.svg" },
  { id: "mlbb-global-112", category: "mlbb", subcategory: "topup", name: "112 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 36594, image: "topup-mlbb.svg" },
  { id: "mlbb-global-42", category: "mlbb", subcategory: "topup", name: "42 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 14912, image: "topup-mlbb.svg" },
  { id: "mlbb-global-223", category: "mlbb", subcategory: "topup", name: "223 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 73193, image: "topup-mlbb.svg" },
  { id: "mlbb-global-336", category: "mlbb", subcategory: "topup", name: "336 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 109787, image: "topup-mlbb.svg" },
  { id: "mlbb-global-70", category: "mlbb", subcategory: "topup", name: "70 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 24734, image: "topup-mlbb.svg" },
  { id: "mlbb-global-570", category: "mlbb", subcategory: "topup", name: "570 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 182981, image: "topup-mlbb.svg" },
  { id: "mlbb-global-1163", category: "mlbb", subcategory: "topup", name: "1.163 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 365958, image: "topup-mlbb.svg" },
  { id: "mlbb-global-2398", category: "mlbb", subcategory: "topup", name: "2.398 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 731920, image: "topup-mlbb.svg" },
  { id: "mlbb-global-140", category: "mlbb", subcategory: "topup", name: "140 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 49418, image: "topup-mlbb.svg" },
  { id: "mlbb-global-6042", category: "mlbb", subcategory: "topup", name: "6.042 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 1829798, image: "topup-mlbb.svg" },
  { id: "mlbb-global-284", category: "mlbb", subcategory: "topup", name: "284 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 99139, image: "topup-mlbb.svg" },
  { id: "mlbb-global-355", category: "mlbb", subcategory: "topup", name: "355 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 123974, image: "topup-mlbb.svg" },
  { id: "mlbb-global-429", category: "mlbb", subcategory: "topup", name: "429 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 148759, image: "topup-mlbb.svg" },
  { id: "mlbb-global-716", category: "mlbb", subcategory: "topup", name: "716 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 247899, image: "topup-mlbb.svg" },
  { id: "mlbb-global-1446", category: "mlbb", subcategory: "topup", name: "1.446 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 494436, image: "topup-mlbb.svg" },
  { id: "mlbb-global-2976", category: "mlbb", subcategory: "topup", name: "2.976 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 991644, image: "topup-mlbb.svg" },
  { id: "mlbb-global-7502", category: "mlbb", subcategory: "topup", name: "7.502 Diamonds Global", desc: "Top up Diamond Mobile Legends.", price: 2474400, image: "topup-mlbb.svg" },

  { id: "topup-mlbb", category: "topup", name: "Mobile Legends 86 Diamonds", desc: "Top up diamond Mobile Legends dengan proses yang mudah.", price: 22000, image: "topup-mlbb.svg" },
  { id: "topup-ff", category: "topup", name: "Free Fire 140 Diamonds", desc: "Top up diamond Free Fire sesuai ID akunmu.", price: 20000, image: "topup-ff.svg" },
  { id: "topup-genshin", category: "topup", name: "Genshin Impact 330 Genesis Crystals", desc: "Top up Genesis Crystals untuk wish dan item game.", price: 75000, image: "topup-genshin.svg" },
  { id: "topup-pubg", category: "topup", name: "PUBG Mobile 325 UC", desc: "Top up UC PUBG Mobile untuk skin dan royale pass.", price: 79000, image: "topup-pubg.svg" },
  { id: "topup-valorant", category: "topup", name: "Valorant 475 VP", desc: "Top up Valorant Points untuk skin dan battle pass.", price: 59000, image: "topup-valorant.svg" },

  /* ===== Jasa Game — contoh sementara ===== */
  { id: "jasa-rank", category: "jasa", name: "Jasa Naik Rank (per bintang)", desc: "Bantuan menaikkan rank game MOBA, harga per bintang.", price: 6000, image: "jasa-rank.svg" },
  { id: "jasa-leveling", category: "jasa", name: "Jasa Leveling Akun", desc: "Bantu naikkan level akun game sesuai target yang kamu mau.", price: 25000, image: "jasa-leveling.svg" },
  { id: "jasa-coaching", category: "jasa", name: "Coaching / Mabar 1 Jam", desc: "Sesi latihan atau main bareng untuk asah skill dan strategi.", price: 20000, image: "jasa-coaching.svg" },
  { id: "jasa-quest", category: "jasa", name: "Jasa Quest & Event Harian", desc: "Bantu selesaikan quest dan event harian di game favoritmu.", price: 15000, image: "jasa-quest.svg" },
  { id: "jasa-boost", category: "jasa", name: "Boost Rank Valorant", desc: "Bantuan naik rank Valorant dengan proses yang diatur admin.", price: 50000, image: "jasa-boost.svg" },

  /* ===== Produk Digital — contoh sementara ===== */
  { id: "digital-gplay", category: "digital", name: "Voucher Google Play", desc: "Voucher saldo Google Play untuk aplikasi, game, dan konten.", price: 54000, image: "digital-gplay.svg" },
  { id: "digital-steam", category: "digital", name: "Steam Wallet Code", desc: "Kode saldo Steam Wallet untuk membeli game di Steam.", price: 62000, image: "digital-steam.svg" },
  { id: "digital-streaming", category: "digital", name: "Akun Premium Streaming (1 Bulan)", desc: "Akses premium streaming selama satu bulan. Detail dijelaskan admin.", price: 25000, image: "digital-streaming.svg" },
  { id: "digital-canva", category: "digital", name: "Template Desain Pack", desc: "Kumpulan template desain siap edit untuk konten dan sosial media.", price: 15000, image: "digital-canva.svg" },
  { id: "digital-preset", category: "digital", name: "Asset & Preset Edit Anime", desc: "Paket asset dan preset untuk mempercantik hasil editmu.", price: 20000, image: "digital-preset.svg" }
];

/* ---------- 2. UTILITAS ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const rand = (a, b) => a + Math.random() * (b - a);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReduced = () => reduceMotion.matches;

const CAT_LABEL = Object.fromEntries(CATEGORIES.map(c => [c.id, c.label]));

function formatPrice(n) {
  return "Rp " + Number(n).toLocaleString("id-ID");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

/* 0822… -> 62822… (format internasional untuk wa.me) */
function toInternational(number) {
  let d = String(number).replace(/\D/g, "");
  if (d.startsWith("62")) return d;
  if (d.startsWith("0")) return "62" + d.slice(1);
  if (d.startsWith("8")) return "62" + d;
  return d;
}

/* 082220632005 -> 0822-2063-2005 (tampilan) */
function prettyNumber(number) {
  const d = String(number).replace(/\D/g, "");
  return d.replace(/^(\d{4})(\d{4})(\d+)$/, "$1-$2-$3");
}

/* ---------- 3. WHATSAPP (bergantian) ---------- */
const RR_KEY = "inami_wa_rr";
let memIndex = Math.floor(Math.random() * CONFIG.whatsappNumbers.length);

function nextAdmin() {
  const list = CONFIG.whatsappNumbers;
  const n = list.length;
  let idx;
  try {
    const saved = localStorage.getItem(RR_KEY);
    idx = saved === null ? Math.floor(Math.random() * n) : (parseInt(saved, 10) || 0) % n;
    localStorage.setItem(RR_KEY, String((idx + 1) % n));
  } catch (e) {
    idx = memIndex % n;
    memIndex = (memIndex + 1) % n;
  }
  return list[idx];
}

let toastTimer;
function showToast(text) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 6000);
}

function openWhatsApp(message, admin) {
  const target = admin || nextAdmin();
  const url = "https://wa.me/" + toInternational(target.number) + "?text=" + encodeURIComponent(message);
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast("Membuka WhatsApp " + target.label + ". Tekan tombol kirim di WhatsApp untuk menyelesaikan pesananmu.");
}

function orderProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const msg = `Halo ${CONFIG.storeName}, saya ingin memesan ${p.name} dengan harga ${formatPrice(p.price)}. Apakah produk tersedia?`;
  openWhatsApp(msg);
}

const GENERAL_MESSAGES = {
  general: `Halo ${CONFIG.storeName}, saya ingin bertanya tentang produk.`,
  order: `Halo ${CONFIG.storeName}, saya ingin melakukan pemesanan. Boleh dibantu?`
};

/* ---------- 4. BINTANG BERKELIP ---------- */
function makeStars(container, count) {
  if (!container) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    const sparkle = Math.random() < 0.16;
    s.className = "star" + (sparkle ? " sparkle" : "");
    const size = sparkle ? rand(9, 17) : rand(1.6, 3.8);
    s.style.left = rand(0, 100).toFixed(2) + "%";
    s.style.top = rand(0, 100).toFixed(2) + "%";
    s.style.width = s.style.height = size.toFixed(1) + "px";
    s.style.setProperty("--o", rand(0.45, 1).toFixed(2));
    s.style.setProperty("--d", rand(2.8, 7).toFixed(2) + "s");
    s.style.animationDelay = (-rand(0, 7)).toFixed(2) + "s";
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

function initStars() {
  const small = window.innerWidth < 700;
  makeStars($("#starsHero"), small ? 55 : 95);
  makeStars($("#starsGlobal"), small ? 22 : 40);
}

/* ---------- 5. KATALOG ---------- */
const state = { cat: "all", subcat: "all", q: "", sort: "default", token: 0 };
const SUBCATEGORIES = {
  robux: [
    { id: "username", label: "Top Up via Username" },
    { id: "gamepass", label: "Gamepass" },
    { id: "gift", label: "Gift Item" },
    { id: "joki", label: "Joki Roblox" }
  ],
  mlbb: [
    { id: "topup", label: "Top Up" },
    { id: "joki", label: "Joki" },
    { id: "gendong", label: "Joki Gendong" }
  ]
};
const TAB_ORDER = ["all", ...CATEGORIES.map(c => c.id)];

const grid = $("#productGrid");
const tabsEl = $("#tabs");
const indicator = $("#tabIndicator");
const subTabsEl = $("#subTabs");

function buildTabs() {
  const counts = { all: PRODUCTS.length };
  CATEGORIES.forEach(c => (counts[c.id] = PRODUCTS.filter(p => p.category === c.id).length));
  const items = [{ id: "all", label: "Semua" }, ...CATEGORIES];
  items.forEach(c => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tab";
    b.dataset.cat = c.id;
    b.setAttribute("aria-pressed", c.id === state.cat ? "true" : "false");
    b.innerHTML = `${escapeHtml(c.label)}<small>${counts[c.id]}</small>`;
    tabsEl.appendChild(b);
  });
}

function moveIndicator(animate = true) {
  const active = $(`.tab[data-cat="${state.cat}"]`, tabsEl);
  if (!active || !indicator) return;
  if (!animate) indicator.style.transition = "none";
  indicator.style.width = active.offsetWidth + "px";
  indicator.style.transform = `translateX(${active.offsetLeft}px)`;
  if (!animate) {
    void indicator.offsetWidth;
    indicator.style.transition = "";
  }
  // geser tab aktif ke tengah pada layar sempit (tanpa menggulir halaman)
  const target = active.offsetLeft - (tabsEl.clientWidth - active.offsetWidth) / 2;
  if (tabsEl.scrollWidth > tabsEl.clientWidth) {
    tabsEl.scrollTo({ left: Math.max(0, target), behavior: prefersReduced() || !animate ? "auto" : "smooth" });
  }
}

function getVisibleProducts() {
  const q = state.q.trim().toLowerCase();
  let list = PRODUCTS.filter(p => {
    const inCat = state.cat === "all" || p.category === state.cat;
    if (!inCat) return false;
    if (SUBCATEGORIES[state.cat] && state.subcat !== "all" && p.subcategory !== state.subcat) return false;
    if (!q) return true;
    return (p.name + " " + p.desc + " " + CAT_LABEL[p.category] + " " + (p.subcategory || "")).toLowerCase().includes(q);
  });
  if (state.sort === "asc") list = list.slice().sort((a, b) => a.price - b.price);
  if (state.sort === "desc") list = list.slice().sort((a, b) => b.price - a.price);
  return list;
}

function cardHtml(p, i) {
  const ph = CONFIG.pricesArePlaceholder && !["robux", "mlbb"].includes(p.category) ? `<span class="ph-badge">Harga contoh</span>` : "";
  return `
    <article class="card" style="--i:${i}">
      <div class="card-media">
        <img src="assets/products/${escapeHtml(p.image)}" alt="Ilustrasi ${escapeHtml(p.name)}" width="600" height="400" loading="lazy" decoding="async">
        <span class="chip">${escapeHtml(CAT_LABEL[p.category] || p.category)}</span>${ph}
      </div>
      <div class="card-body">
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.desc)}</p>
        <div class="card-foot">
          <span class="price">${formatPrice(p.price)}</span>
          <button class="btn btn-primary btn-sm" type="button" data-order="${escapeHtml(p.id)}">Pesan Sekarang</button>
        </div>
      </div>
    </article>`;
}

function renderGrid() {
  const list = getVisibleProducts();
  if (list.length) {
    grid.innerHTML = list.map(cardHtml).join("");
  } else if (SUBCATEGORIES[state.cat] && state.subcat !== "all" && !PRODUCTS.some(p => p.category === state.cat && p.subcategory === state.subcat)) {
    const selected = (SUBCATEGORIES[state.cat] || []).find(c => c.id === state.subcat);
    grid.innerHTML = `<div class="empty"><b>${escapeHtml(selected ? selected.label : "Layanan Roblox")} belum tersedia</b>Pricelist untuk kategori ini akan ditambahkan setelah harga dan ketentuannya siap.</div>`;
  } else {
    grid.innerHTML = `<div class="empty"><b>Produk tidak ditemukan</b>Coba kata kunci lain atau pilih kategori “Semua”.</div>`;
  }
  const info = $("#resultInfo");
  if (info) {
    const catName = state.cat === "all" ? "semua kategori" : CAT_LABEL[state.cat];
    const subName = SUBCATEGORIES[state.cat] ? ((SUBCATEGORIES[state.cat].find(c => c.id === state.subcat)?.label) || "semua subkategori") : "";
    info.textContent = `${list.length} produk di ${catName}` + (subName ? ` · ${subName}` : "") + (state.q.trim() ? ` untuk “${state.q.trim()}”` : "");
  }
}

const ANIM_CLASSES = ["leaving-left", "leaving-right", "leaving-fade", "enter-left", "enter-right", "enter-fade"];

/* direction: 1 = katalog lama keluar ke kiri, baru masuk dari kanan; -1 = kebalikannya; 0 = fade */
function swapCatalog(direction) {
  const token = ++state.token;
  if (prefersReduced()) {
    renderGrid();
    return;
  }
  grid.classList.remove(...ANIM_CLASSES);
  void grid.offsetWidth;
  const leave = direction > 0 ? "leaving-left" : direction < 0 ? "leaving-right" : "leaving-fade";
  const enter = direction > 0 ? "enter-right" : direction < 0 ? "enter-left" : "enter-fade";
  grid.classList.add(leave);
  setTimeout(() => {
    if (token !== state.token) return;
    grid.classList.remove(...ANIM_CLASSES);
    renderGrid();
    void grid.offsetWidth;
    grid.classList.add(enter);
    setTimeout(() => {
      if (token === state.token) grid.classList.remove(enter);
    }, 1100);
  }, direction === 0 ? 220 : 320);
}

function renderSubcategoryTabs() {
  if (!subTabsEl) return;
  const visible = Boolean(SUBCATEGORIES[state.cat]);
  subTabsEl.hidden = !visible;
  subTabsEl.innerHTML = "";
  if (!visible) return;
  (SUBCATEGORIES[state.cat] || []).forEach(c => {
    const count = PRODUCTS.filter(p => p.category === state.cat && p.subcategory === c.id).length;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "subtab" + (state.subcat === c.id ? " is-active" : "");
    b.dataset.subcat = c.id;
    b.setAttribute("aria-pressed", state.subcat === c.id ? "true" : "false");
    b.innerHTML = `${escapeHtml(c.label)}<small>${count || "Segera"}</small>`;
    subTabsEl.appendChild(b);
  });
}

function selectSubcategory(id) {
  if (id === state.subcat) return;
  state.subcat = id;
  renderSubcategoryTabs();
  swapCatalog(0);
}

function selectCategory(id) {
  if (id === state.cat) return;
  const dir = TAB_ORDER.indexOf(id) > TAB_ORDER.indexOf(state.cat) ? 1 : -1;
  state.cat = id;
  state.subcat = id === "robux" ? "username" : id === "mlbb" ? "topup" : "all";
  renderSubcategoryTabs();
  $$(".tab", tabsEl).forEach(t => t.setAttribute("aria-pressed", t.dataset.cat === id ? "true" : "false"));
  moveIndicator(true);
  swapCatalog(dir);
}

function initCatalog() {
  buildTabs();
  renderSubcategoryTabs();
  renderGrid();
  moveIndicator(false);

  tabsEl.addEventListener("click", e => {
    const b = e.target.closest(".tab");
    if (b) selectCategory(b.dataset.cat);
  });
  if (subTabsEl) subTabsEl.addEventListener("click", e => {
    const b = e.target.closest(".subtab");
    if (b) selectSubcategory(b.dataset.subcat);
  });

  let timer;
  $("#searchInput").addEventListener("input", e => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      state.q = e.target.value;
      swapCatalog(0);
    }, 220);
  });
  $("#sortSelect").addEventListener("change", e => {
    state.sort = e.target.value;
    swapCatalog(0);
  });

  grid.addEventListener("click", e => {
    const b = e.target.closest("[data-order]");
    if (b) orderProduct(b.dataset.order);
  });

  // chip kategori cepat di hero
  $$("[data-cat-jump]").forEach(btn =>
    btn.addEventListener("click", () => {
      selectCategory(btn.dataset.catJump);
      $("#katalog").scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
    })
  );

  window.addEventListener("resize", () => moveIndicator(false));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => moveIndicator(false));

  if (!CONFIG.pricesArePlaceholder) {
    const note = $("#priceNote");
    if (note) note.hidden = true;
  }
}

/* ---------- 6. KONTAK, INSTAGRAM, TOMBOL WA ---------- */
function initContact() {
  const wrap = $("#contactGrid");
  wrap.innerHTML = CONFIG.whatsappNumbers
    .map(
      (a, i) => `
      <article class="contact-card reveal" style="--d:${(i * 0.1).toFixed(1)}s">
        <span class="avatar" aria-hidden="true">${i + 1}</span>
        <h3>${escapeHtml(a.label)}</h3>
        <span class="num">${escapeHtml(prettyNumber(a.number))}</span>
        <button class="btn btn-primary btn-sm" type="button" data-direct="${i}">Chat ${escapeHtml(a.label)}</button>
      </article>`
    )
    .join("");
  wrap.addEventListener("click", e => {
    const b = e.target.closest("[data-direct]");
    if (!b) return;
    const admin = CONFIG.whatsappNumbers[Number(b.dataset.direct)];
    openWhatsApp(GENERAL_MESSAGES.general, admin);
  });

  const ig = $("#igLink");
  if (ig) ig.href = CONFIG.instagram.url;
  const igLabel = $("#igLabel");
  if (igLabel) igLabel.textContent = CONFIG.instagram.label;

  $$("[data-wa]").forEach(btn =>
    btn.addEventListener("click", () => openWhatsApp(GENERAL_MESSAGES[btn.dataset.wa] || GENERAL_MESSAGES.general))
  );

  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ---------- 7. NAVBAR ---------- */
function initNav() {
  const nav = $("#nav");
  const toggle = $("#navToggle");
  const links = $$("#navLinks a");

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setOpen = open => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  links.forEach(a => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", e => { if (!nav.contains(e.target)) setOpen(false); });

  // indikator menu aktif (scroll spy)
  const map = new Map(links.map(a => [a.dataset.spy, a]));
  const targets = ["beranda", "katalog", "cara-order", "testimoni", "kontak"].map(id => document.getElementById(id)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.classList.remove("is-active"));
        const a = map.get(en.target.id);
        if (a) a.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach(t => io.observe(t));
  }
}

/* ---------- 8. ANIMASI MASUK (reveal) ---------- */
function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window) || prefersReduced()) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

/* ---------- 9. FAQ ---------- */
function initFaq() {
  $$(".faq-q").forEach(btn =>
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = !item.classList.contains("open");
      item.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
    })
  );
}

/* ---------- 10. PARALLAX RINGAN ---------- */
function initParallax() {
  const hero = $("#beranda");
  const art = $("#heroArt");
  if (!hero || !art || prefersReduced()) return;

  let tx = 0, ty = 0, sy = 0, ticking = false;
  const apply = () => {
    art.style.setProperty("--px", tx.toFixed(3));
    art.style.setProperty("--py", ty.toFixed(3));
    art.style.setProperty("--sy", sy.toFixed(1));
    ticking = false;
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };

  hero.addEventListener("pointermove", e => {
    if (e.pointerType === "touch") return;
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    request();
  });
  hero.addEventListener("pointerleave", () => { tx = 0; ty = 0; request(); });
  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight * 1.2) { sy = -window.scrollY * 0.06; request(); }
  }, { passive: true });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initStars();
  initCatalog();
  initContact();
  initNav();
  initFaq();
  initReveal();
  initParallax();
});
