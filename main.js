
let namaJajanan = ['Seblak','Bakso','Mixue','Dimsum','Telor gulung','Sempol']
let hargaJajanan = [12000,15000,18000,2500,2000,2000]

function mulaiJajan() {
const displayArea = document.getElementById('display-area');
const pesanAwal = document.getElementById('pesan-awal');

let nama = prompt('Isi Nama Kamu').toLowerCase()
if (nama == "syintia") {
   nama = 'syintia'
} else{
   nama = false
   alert('LU BUKAN CEWE GW!!!')
}

let totalAwal = 0
let statusKetemu = false 
let qty = 0
const namanamaHari =['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'] 
let hari = new Date().getDay()
let namaHari = namanamaHari[hari]
 


let cariMakan = prompt(`                                     SEKARANG HARI ${namaHari}\n\nHALLO ${nama.charAt(0).toUpperCase() + nama.slice(1).toUpperCase()} BIDADARIKU YANG PALING CANTIK<3\nMAWW JAJAN APANIH SAYANGG HARI INI?\n\n---INI MENUNYA SAYANGG---\n
   1. ${namaJajanan[0]}               Rp${hargaJajanan[0].toLocaleString('ID-id')}
   2. ${namaJajanan[1]}                Rp${hargaJajanan[1].toLocaleString('ID-id')}
   3. ${namaJajanan[2]}                Rp${hargaJajanan[2].toLocaleString('ID-id')}
   4. ${namaJajanan[3]}            Rp${hargaJajanan[3].toLocaleString('ID-id')}
   5. ${namaJajanan[4]}     Rp${hargaJajanan[4].toLocaleString('ID-id')}
   6. ${namaJajanan[5]}             Rp${hargaJajanan[5].toLocaleString('ID-id')}

Note:\n•jajannya satu menu aja yaa sayangg jangan banyak banyak🤭\n•Belanja lebih dari Rp40.000 kamu bisa dapet Diskon Rp10.000`).toLowerCase()   //fungsi supaya user bebas ngisi pake huruf besar atau kecil
for (let i = 0; i < namaJajanan.length; i++) {

if (cariMakan == namaJajanan[i].toLowerCase()) {
alert(`YEAYY MASIH ADA NIH SAYANGG!!\n${namaJajanan[i].charAt(0).toUpperCase() + namaJajanan[i].slice(1).toLowerCase()} harganya Rp${hargaJajanan[i].toLocaleString('id-ID')}`)

let inputPorsi = prompt(`Sayangg, maww beli berapa porsi ${namaJajanan[i].charAt(0).toUpperCase() + namaJajanan[i].slice(1).toLowerCase()} nya?`)
qty = parseInt(inputPorsi)

if (isNaN(qty) || qty <= 0) {
            alert('Ulangin sayangg input porsinya pake angka🤗');
            return;
        }
        
totalAwal = hargaJajanan[i] * qty
statusKetemu = true 
break

}
}

if(statusKetemu == true) {
   let hargaBayar = totalAwal
   let nilaiDiskon = 0

if(totalAwal > 40000) {
   nilaiDiskon = 10000
   hargaBayar = totalAwal - nilaiDiskon 
   alert (`Totalnya jadi: Rp${totalAwal.toLocaleString('ID-id')}\nTapi karena sayang beli ${qty} porsi kamu dapet potongan diskon dari aku Rp${nilaiDiskon.toLocaleString('ID-id')} jadi kamu cukup bayar: Rp${hargaBayar.toLocaleString('ID-id')}`)
   alert (`okeii sayangg, aku cetak struknya dulu yaa`)
} else {
alert (` okeii sayangg, aku cetak struknya dulu yaa`)
}

pesanAwal.textContent = "Sedang menyiapkan pesananmu...";
displayArea.innerHTML = `<p>Tunggu sebentar ya sayangg... ⏳</p>`;

setTimeout(() => {
   displayArea.innerHTML = `
      <div class="struk">
            <h3 style="text-align:center">🍓STRUK BELANJA🍓</h3>
            <p><b>Hari:</b> ${namaHari.charAt(0).toLocaleUpperCase() + namaHari.slice(1).toLocaleLowerCase()} </p>
            <p><b>Menu:</b> ${cariMakan.charAt(0).toLocaleUpperCase() + cariMakan.slice(1) } </p>
            <p><b>Jumlah:</b> ${qty} Porsi</p>
            <hr>
            <p><b>Total:</b> Rp${totalAwal.toLocaleString('id-ID')}</p>
            <p style="color: green;">Diskon: -Rp${nilaiDiskon.toLocaleString('ID-id')} </p>
            <h2 style="color: #ff69b4";>Bayar: ${hargaBayar.toLocaleString('ID-id')} </h2>
            <hr>
            <p style="text-align:center; font-style: italic";>"Selamat mam ya sayangg, besok kita jajan lagi<3"</p>
            </div>
            <br>
            <button class="btn-mulai" style="font-size: 14px; padding: 10px 20px;" onclick=location.reload()> Jajan lagi? </button>
            `;
            pesanAwal.textContent="";

}, 1500);


} else {
   alert('Yaahh sayangg, maaf yaa aku gak jual makanan itu')
}
}
