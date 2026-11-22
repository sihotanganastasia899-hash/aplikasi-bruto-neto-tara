# API.md

## 1. Pengertian API

API (Application Programming Interface) merupakan penghubung yang memungkinkan frontend berkomunikasi dengan backend.

Pada aplikasi ini, API digunakan untuk mengirim dan menerima data siswa, materi, soal, jawaban, serta hasil belajar.

## 2. Teknologi

- Backend: Python dan FastAPI.
- Frontend: React dan JavaScript.
- Database: Supabase.
- Format pertukaran data: JSON.

## 3. Daftar Endpoint

### A. Login Siswa

**POST /api/login**

Fungsi:
Memeriksa kode siswa untuk masuk ke aplikasi.

Contoh data yang dikirim:

```json
{
  "student_code": "SMP001"
}
```

### B. Data Siswa

**GET /api/students/{student_id}**

Fungsi:
Mengambil informasi siswa.

### C. Materi Pembelajaran

**GET /api/materials**

Fungsi:
Mengambil daftar materi bruto, neto, dan tara.

### D. Detail Materi

**GET /api/materials/{material_id}**

Fungsi:
Mengambil penjelasan lengkap suatu materi.

### E. Daftar Soal

**GET /api/questions**

Fungsi:
Mengambil daftar latihan soal.

### F. Mengirim Jawaban

**POST /api/answers**

Fungsi:
Mengirim jawaban siswa untuk diperiksa.

Contoh data yang dikirim:

```json
{
  "student_id": 1,
  "question_id": 1,
  "answer": "10 kg"
}
```

### G. Hasil Belajar

**GET /api/results/{student_id}**

Fungsi:
Mengambil hasil latihan siswa.

## 4. Format Respons

API menggunakan format JSON.

Contoh respons berhasil:

```json
{
  "success": true,
  "message": "Data berhasil diproses",
  "data": {}
}
```

Contoh respons gagal:

```json
{
  "success": false,
  "message": "Terjadi kesalahan"
}
```

## 5. Keamanan

1. Kode siswa diperiksa sebelum mengakses data.
2. Data siswa tidak boleh ditampilkan kepada pengguna lain.
3. Koneksi menggunakan HTTPS ketika aplikasi dipublikasikan.
4. Kunci rahasia Supabase tidak boleh disimpan di frontend.
5. Backend harus memvalidasi data yang dikirim pengguna.

## 6. Catatan Pengembangan

Endpoint di atas merupakan rancangan awal. Struktur dan implementasinya akan disesuaikan ketika backend mulai dibuat.
:::