// Mendapatkan elemen-elemen HTML

document.addEventListener('DOMContentLoaded', function() {
    const inputSuhu = document.getElementById('input-suhu');
    const hasilSuhu = document.getElementById('hasil-suhu');
    const caraKalkulasi = document.getElementById('how-to-suhu');
    const tombolKonversi = document.querySelector('.form-btn-konversi');
    const tombolReset = document.querySelector('.form-btn-reset');
    let isReverse = false;
    let suhuCelciusAwal;
    let suhuFahrenheitAwal;
  
    // Fungsi konversi suhu dari Celcius ke Fahrenheit
    function konversiSuhuCelciusToFahrenheit(suhuCelcius) {
      const suhuFahrenheit = (suhuCelcius * 9/5) + 32;
      return suhuFahrenheit;
    }
  
    // Fungsi konversi suhu dari Fahrenheit ke Celcius
    function konversiSuhuFahrenheitToCelcius(suhuFahrenheit) {
      const suhuCelcius = (suhuFahrenheit - 32) * 5/9;
      return suhuCelcius;
    }
  
    // Fungsi untuk menampilkan hasil konversi
    function tampilkanHasil(suhuCelcius, suhuFahrenheit) {
      hasilSuhu.value = `${suhuFahrenheit} °F`;
      caraKalkulasi.value = `Cara Kalkulasi: ${suhuCelcius} °C × 9/5 + 32 = ${suhuFahrenheit} °F`;
    }
  
    // Fungsi untuk mengaktifkan tombol konversi
    tombolKonversi.addEventListener('click', (e) => {
      e.preventDefault();
      const suhuCelcius = parseFloat(inputSuhu.value);
      if (!isNaN(suhuCelcius)) {
        suhuCelciusAwal = suhuCelcius;
        const suhuFahrenheit = konversiSuhuCelciusToFahrenheit(suhuCelcius);
        suhuFahrenheitAwal = suhuFahrenheit;
        tampilkanHasil(suhuCelcius, suhuFahrenheit);
        isReverse = false;
      } else {
        alert('Masukkan nilai suhu yang valid!');
      }
    });
  
    // Fungsi untuk mengaktifkan tombol reset
    tombolReset.addEventListener('click', () => {
      inputSuhu.value = '';
      hasilSuhu.value = '';
      caraKalkulasi.value = '';
      isReverse = false;
    });
  
    // Fungsi untuk mengaktifkan tombol reverse
    document.querySelector('.form-btn-reverse').addEventListener('click', function() {
      if (!isReverse) {
        const suhuFahrenheit = parseFloat(hasilSuhu.value.replace(' °F', ''));
        const suhuCelcius = konversiSuhuFahrenheitToCelcius(suhuFahrenheit);
        inputSuhu.value = suhuCelcius;
        hasilSuhu.value = `${suhuCelcius} °C`;
        caraKalkulasi.value = `Cara Kalkulasi: ${suhuFahrenheit} °F - 32 × 5/9 = ${suhuCelcius} °C`;
        isReverse = true;
      } else {
        inputSuhu.value = suhuCelciusAwal;
        hasilSuhu.value = `${suhuFahrenheitAwal} °F`;
        caraKalkulasi.value = `Cara Kalkulasi: ${suhuCelciusAwal} °C × 9/5 + 32 = ${suhuFahrenheitAwal} °F`;
        isReverse = false;
      }
    });
  });