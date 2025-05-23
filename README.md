
# Belajar Web Server Basic dengan Node.js

Proyek ini merupakan bagian dari proses belajar membuat web server dasar menggunakan Node.js tanpa framework tambahan seperti Express. Web server ini dapat menangani beberapa request HTTP seperti `GET`, `POST`, `PUT`, dan `DELETE`.

## ▶️ Cara Menjalankan

1. Pastikan Node.js sudah terpasang di perangkat Anda.
2. Clone repositori ini:

```bash
git clone https://github.com/wahyunugrahha/belajar-web-server-basic.git
cd belajar-web-server-basic
```

3. Jalankan perintah berikut untuk menginstall dependencies:

```bash
npm install
```
> Perintah `npm install` akan mengunduh semua dependency yang diperlukan.

4. Jalankan server dengan perintah:

```bash
node server.js
```

5. Buka browser atau gunakan Postman/cURL untuk mengakses:  
   `http://localhost:5000`

## 📌 Endpoint & Method

### `/` - Homepage

| Method | Deskripsi                                       |
|--------|-------------------------------------------------|
| GET    | Mengembalikan pesan JSON: "Ini adalah Homepage" |
| Other  | 400 - Method tidak didukung                     |

### `/about`

| Method  | Deskripsi                                                   |
|---------|-------------------------------------------------------------|
| POST    | Menerima body dan membalas dengan pesan sapaan              |
| PUT     | Mengembalikan pesan bahwa ini adalah metode PUT             |
| DELETE  | Mengembalikan pesan bahwa ini adalah metode DELETE          |
| Other   | 400 - Method tidak didukung                                 |

## 💡 Tujuan Pembelajaran

- Memahami cara kerja HTTP server dasar di Node.js.
- Mempelajari bagaimana cara membaca URL dan method dari request.
- Mengerti bagaimana cara membaca body dari request secara manual.
- Latihan membuat logika routing dan method handler sederhana.

---

🛠️ Dibuat oleh [Wahyu Nugraha](https://github.com/wahyunugrahha)
