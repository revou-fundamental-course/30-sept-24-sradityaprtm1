let isCelsiusInput = true;  

function validateForm() {  

    const celsiusInput = document.getElementById('input-suhu');  
    const fahrenheitOutput = document.getElementById('hasil-suhu');  
    const calculationField = document.getElementById('how-to-suhu');  

    console.log('mulai validasi form')

    if (isCelsiusInput) {  
        const celsius = parseFloat(celsiusInput.value);  
        console.log('Input Celcius:', celsius);
        if (isNaN(celsius)) {  
            alert('Silakan masukkan angka yang valid untuk Celsius.');  
            console.log('Error: Input Celsius tidak valid.');
            return;  
        }  

        const fahrenheit = (celsius * 9/5) + 32;  
        fahrenheitOutput.value = fahrenheit.toFixed(2);  
        calculationField.value = `${celsius}°C × 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;  
        console.log('Hasil konversi ke Fahrenheit:', fahrenheit.toFixed(2));
    } else {  
        const fahrenheit = parseFloat(celsiusInput.value);  
        console.log('Input Fahrenheit:', fahrenheit);

        if (isNaN(fahrenheit)) {  
            alert('Silakan masukkan angka yang valid untuk Fahrenheit.');
            console.log('Error: Input Fahrenheit tidak valid.');  
            return;  
        }  

        const celsius = (fahrenheit - 32) * 5/9;  
        fahrenheitOutput.value = celsius.toFixed(2);  
        calculationField.value = `${fahrenheit}°F - 32 × 5/9 = ${celsius.toFixed(2)}°C`;  
        console.log('Hasil konversi ke Celsius:', celsius.toFixed(2));
    }  
}  

function reset() {  
    document.getElementById('input-suhu').value = '';  
    document.getElementById('hasil-suhu').value = '';  
    document.getElementById('how-to-suhu').value = '';
    console.log('Berhasil reset.')  
}  

function reverse() {  
    isCelsiusInput = !isCelsiusInput;  
    console.log('Mode input dibalik, isCelsiusInput:', isCelsiusInput);

    const celsiusInput = document.getElementById('input-suhu');  
    const fahrenheitOutput = document.getElementById('hasil-suhu');  
    const calculationField = document.getElementById('how-to-suhu');  
    const labelCelsius = document.getElementById('label-celcius');  
    const labelFahrenheit = document.getElementById('label-fahrenheit');  

    if (isCelsiusInput) {  
        labelCelsius.innerText = "Celcius (°C)";  
        labelFahrenheit.innerText = "Fahrenheit (°F)";  
        celsiusInput.placeholder = "Masukkan suhu Celcius";  
        fahrenheitOutput.placeholder = "Isi hasil konversi";  
    } else {  
        labelCelsius.innerText = "Fahrenheit (°F)";  
        labelFahrenheit.innerText = "Celcius (°C)";  
        celsiusInput.placeholder = "Masukkan suhu Fahrenheit";  
        fahrenheitOutput.placeholder = "Isi hasil konversi";  
    }  

    // Clear inputs and results  
    reset();  
} 
