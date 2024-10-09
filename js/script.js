// ini javascript

console.log('javascript tersambung')

function validateForm() {
    console.log('validasi fungsi berhasil terpanggil')
    const inputSuhu = document.getElementById('input-suhu').value
    const hasilSuhu = document.getElementById('hasil-suhu').value

    if (inputSuhu == ' ') {
        alert ('inputan anda kosong')
    } else {
        calculate(inputSuhu)
    }
}

function calculate(value) {
    let result = parseFloat(value) * 2

    document.getElementById('hasil-suhu').value = result
    document.getElementById('how-to-suhu').value = value + ' x 2 = ' + result
    console.log(parseInt(value) * 2)
}

function reset(value) {
    document.getElementById('input-suhu').value = ' '
    document.getElementById('hasil-suhu').value = ' '
    document.getElementById('how-to-suhu').value = ' '
    console.log('berhasil dihapus')
}