# ARCHITECTURE.md

## 1. Gambaran Umum

Aplikasi Pembelajaran Bruto, Neto, dan Tara menggunakan arsitektur berbasis web yang terdiri dari frontend, backend, dan database.

Aplikasi dirancang agar dapat digunakan melalui smartphone Android maupun laptop.

## 2. Struktur Sistem

Sistem terdiri dari tiga bagian utama:

### A. Frontend

Frontend merupakan bagian aplikasi yang dilihat dan digunakan oleh siswa.

Teknologi:
- JavaScript
- React
- Three.js

Tugas frontend:
- Menampilkan halaman login.
- Menampilkan halaman beranda.
- Menampilkan materi pembelajaran.
- Menampilkan ilustrasi interaktif.
- Menampilkan contoh dan latihan soal.
- Menampilkan hasil belajar siswa.

### B. Backend

Backend bertugas mengelola proses dan data aplikasi.

Teknologi:
- Python
- FastAPI

Tugas backend:
- Mengelola proses login siswa.
- Mengelola data materi.
- Memeriksa jawaban latihan.
- Mengolah hasil belajar.
- Menghubungkan frontend dengan database.

### C. Database

Database digunakan untuk menyimpan data aplikasi.

Teknologi:
- Supabase

Data yang disimpan:
- Kode siswa.
- Data siswa.
- Materi pembelajaran.
- Soal latihan.
- Jawaban siswa.
- Hasil belajar.

## 3. Alur Kerja Aplikasi

1. Siswa membuka aplikasi melalui smartphone atau laptop.
2. Siswa memasukkan kode siswa.
3. Aplikasi memeriksa kode siswa.
4. Siswa masuk ke halaman beranda.
5. Siswa memilih materi pembelajaran.
6. Aplikasi menampilkan materi dan ilustrasi.
7. Siswa mempelajari contoh soal.
8. Siswa mengerjakan latihan.
9. Sistem memeriksa jawaban.
10. Hasil belajar disimpan ke database.

## 4. Hubungan Antarbagian

Alur komunikasi sistem:

**Siswa → Frontend React → Backend FastAPI → Database Supabase**

Hasil dari proses tersebut dikirim kembali ke frontend untuk ditampilkan kepada siswa.

## 5. Struktur Folder yang Direncanakan

```text
Aplikasi-Bruto-Neto-Tara/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── app/
│
├── prd.md
├── readme.md
├── agents.md
├── architecture.md
├── task.md
├── design.md
└── api.md
```

## 6. Prinsip Pengembangan

1. Sistem dibuat sederhana dan mudah digunakan.
2. Tampilan menyesuaikan ukuran layar perangkat.
3. Data siswa disimpan dengan aman.
4. Setiap bagian aplikasi dikembangkan secara bertahap.
5. Setiap fitur diuji sebelum digunakan.
:::