
import { useState } from 'react'
import './App.css'

function App() {
  const [halaman, setHalaman] = useState('Beranda')
  const [jawaban, setJawaban] = useState('')
  const [status, setStatus] = useState('')
  const [nomorSoal, setNomorSoal] = useState(1)
  const [jumlahBenar, setJumlahBenar] = useState(0)
  const [soalSelesai, setSoalSelesai] = useState([])

  const menu = [
    'Beranda',
    'Materi',

    'Contoh Soal',
    'Latihan',
    'Hasil Belajar'
  ]

  const kunci = [10, 0.5, 9]

  const periksaJawaban = () => {
    const nilai = Number(jawaban.replace(',', '.'))

    if (jawaban.trim() === '') {
      setStatus('Kosong')
      return
    }

    if (!Number.isFinite(nilai)) {
      setStatus('Coba')
      return
    }

    if (nilai === kunci[nomorSoal - 1]) {
      if (!soalSelesai.includes(nomorSoal)) {
        setJumlahBenar(jumlahBenar + 1)
        setSoalSelesai([...soalSelesai, nomorSoal])
      }

      setStatus('Benar')
    } else {
      setStatus('Coba')
    }
  }

  const soalBerikutnya = () => {
    setNomorSoal(nomorSoal + 1)
    setJawaban('')
    setStatus('')
  }

  return (
    <div className="app">
      <header className="navbar">
        <h2>Belajar Matematika</h2>

        <nav>
          {menu.map((item) => (
            <button
              key={item}
              className={halaman === item ? 'aktif' : ''}
              onClick={() => setHalaman(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main className="konten">

        {/* HALAMAN BERANDA */}
        {halaman === 'Beranda' && (
          <>
            <img
  src="/ilustrasi-bruto-neto-tara.png"
  alt="Ilustrasi Bruto, Neto, dan Tara"
  className="ilustrasi-beranda"
/>

            <section className="sambutan">
              <p className="label">
                PEMBELAJARAN MATEMATIKA SMP
              </p>

              <h1>Yuk, Belajar Bruto, Neto, dan Tara!</h1>

              <p>
                Pelajari konsep berat melalui contoh dan
                permasalahan dalam kehidupan sehari-hari.
              </p>

              <button
                className="tombol-utama"
                onClick={() => setHalaman('Materi')}
              >
                Mulai Belajar
              </button>
            </section>

            <section className="bagian-menu">
              <h2>Selamat Datang!</h2>

              <p>
                Yuk, pelajari materi Bruto, Neto, dan Tara
                dengan cara yang mudah dan menyenangkan.
              </p>
            </section>
          </>
        )}

        {/* HALAMAN MATERI */}
        {halaman === 'Materi' && (
          <>
            <section className="bagian-menu">
              <h2>Mengenal Bruto, Neto, dan Tara</h2>

              <p>
                Dalam kehidupan sehari-hari, kita sering
                menemukan berat barang dan kemasannya.
                Misalnya, karung beras, botol minuman,
                dan kemasan makanan.
              </p>
            </section>

            <section className="bagian-menu">
              <h2>1. Bruto</h2>

              <p>
                Bruto adalah berat keseluruhan suatu barang
                beserta kemasannya.
              </p>

              <p>
                Contoh: berat satu karung beras beserta
                karungnya adalah 10 kg.
              </p>
            </section>

            <section className="bagian-menu">
              <h2>2. Neto</h2>

              <p>
                Neto adalah berat bersih suatu barang
                tanpa kemasannya.
              </p>

              <p>
                Contoh: berat beras di dalam karung
                tanpa karungnya adalah 9,5 kg.
              </p>
            </section>

            <section className="bagian-menu">
              <h2>3. Tara</h2>

              <p>
                Tara adalah berat kemasan atau pembungkus
                suatu barang.
              </p>

              <p>
                Contoh: berat karung beras kosong adalah 0,5 kg.
              </p>
            </section>

            <section className="bagian-menu">
              <h2>Hubungan Bruto, Neto, dan Tara</h2>

              <p>
                Ketiga istilah tersebut memiliki hubungan
                dalam perhitungan berat suatu barang.
              </p>

              <div className="rumus">
                Bruto = Neto + Tara
              </div>

              <div className="rumus">
                Neto = Bruto - Tara
              </div>

              <div className="rumus">
                Tara = Bruto - Neto
              </div>
            </section>

            <section className="bagian-menu">
              <h2>Ingat, ya!</h2>

              <p>
                Bruto adalah berat keseluruhan,
                neto adalah berat isi,
                sedangkan tara adalah berat kemasan.
              </p>
            </section>
          </>
        )}

        {/* HALAMAN CONTOH SOAL */}
        {halaman === 'Contoh Soal' && (
          <section className="bagian-menu">
            <h2>Contoh Soal</h2>

            <p>
              Sebuah karung beras memiliki berat keseluruhan
              10 kg. Jika berat karung kosong adalah 0,5 kg,
              berapakah neto beras tersebut?
            </p>

            <p><strong>Diketahui:</strong></p>
            <p>Bruto = 10 kg</p>
            <p>Tara = 0,5 kg</p>

            <p><strong>Ditanyakan:</strong> Neto</p>

            <p>
              <strong>Rumus:</strong> Neto = Bruto - Tara
            </p>

            <p><strong>Penyelesaian:</strong></p>
            <p>Neto = 10 - 0,5</p>
            <p>Neto = 9,5 kg</p>

            <p>
              <strong>
                Jadi, berat bersih beras adalah 9,5 kg.
              </strong>
            </p>
          </section>
        )}

        {/* HALAMAN LATIHAN */}
        {halaman === 'Latihan' && (
          <section className="bagian-menu">
            <h2>Latihan Soal</h2>

            <p>
              Kerjakan soal berikut untuk menguji pemahamanmu!
            </p>

            <h3>Soal {nomorSoal} dari 3</h3>

            {nomorSoal === 1 && (
              <p>
                Sebuah karung beras memiliki bruto 12 kg.
                Jika tara 2 kg, berapakah netonya?
              </p>
            )}

            {nomorSoal === 2 && (
              <p>
                Sebuah kotak makanan memiliki bruto 5 kg
                dan neto 4,5 kg. Berapakah taranya?
              </p>
            )}

            {nomorSoal === 3 && (
              <p>
                Sebuah kemasan memiliki neto 8 kg
                dan tara 1 kg. Berapakah brutonya?
              </p>
            )}

            <label htmlFor="jawaban">
              Jawabanmu (kg):
            </label>

            <input
              id="jawaban"
              type="text"
              inputMode="decimal"
              placeholder="Masukkan jawaban"
              value={jawaban}
              onChange={(e) => {
                setJawaban(e.target.value)
                setStatus('')
              }}
              disabled={status === 'Benar'}
            />

            <button
              className="tombol-utama"
              onClick={periksaJawaban}
              disabled={status === 'Benar'}
            >
              Periksa Jawaban
            </button>

            {status === 'Kosong' && (
              <p>Silakan isi jawaban terlebih dahulu.</p>
            )}

            {status === 'Benar' && (
              <div>
                <p>Hebat! Jawabanmu benar!</p>

                {nomorSoal < 3 ? (
                  <button
                    className="tombol-utama"
                    onClick={soalBerikutnya}
                  >
                    Soal Berikutnya
                  </button>
                ) : (
                  <p>
                    Selamat! Kamu telah menyelesaikan semua soal.
                  </p>
                )}
              </div>
            )}

            {status === 'Coba' && (
              <div>
                <p>
                  Jawabanmu belum tepat. Jangan menyerah!
                </p>

                {nomorSoal === 1 && (
                  <p>Petunjuk: Neto = Bruto - Tara.</p>
                )}

                {nomorSoal === 2 && (
                  <p>Petunjuk: Tara = Bruto - Neto.</p>
                )}

                {nomorSoal === 3 && (
                  <p>Petunjuk: Bruto = Neto + Tara.</p>
                )}
              </div>
            )}
          </section>
        )}

        {/* HALAMAN HASIL BELAJAR */}
{halaman === 'Hasil Belajar' && (
  <section className="hasil-belajar">
    <div className="ikon-hasil">🏆</div>

    <p className="label">HASIL PEMBELAJARAN</p>

    <h2>Hore! Latihan Selesai!</h2>

    <p>
      Kamu sudah menyelesaikan latihan
      Bruto, Neto, dan Tara.
    </p>

    <div className="nilai-kartu">
      <p>Nilai Akhir</p>

      <h1>{Math.round((jumlahBenar / 3) * 100)}</h1>

      <p className="status-nilai">
        {jumlahBenar === 3
          ? 'Sangat Baik!'
          : 'Tetap Semangat Belajar!'}
      </p>
    </div>

    <div className="statistik-hasil">
      <div>
        <h3>{jumlahBenar}</h3>
        <p>Jawaban Benar</p>
      </div>

      <div>
        <h3>{3 - jumlahBenar}</h3>
        <p>Jawaban Salah</p>
      </div>
    </div>

    <p className="pesan-hasil">
      {jumlahBenar === 3
        ? 'Hebat! Semua jawabanmu benar. Terus pertahankan semangat belajarmu!'
        : 'Terus berlatih agar pemahamanmu semakin baik!'}
    </p>
  </section>
)}

      </main>

      <footer>
        Aplikasi Pembelajaran Bruto, Neto, dan Tara
      </footer>
    </div>
  )
}

export default App
