const nama = document.getElementById("nama")
const konser = document.getElementById("konser")
const jml_tiket = document.getElementById("jumlah_tiket")
const vip = document.querySelectorAll('input[name="vip"]')

const cek = document.getElementById("cek")
const reset = document.getElementById("reset")

const harga = (value) => {
    switch (value) {
        case "slipknot":
            return 500000
            break;
        case "twice":
            return 400000
            break;
        case "neckdeep":
            return 350000
            break;
        case "blackpink":
            return 300000
            break;
        default:
            break;
    }
}

const vipcek = () => {
    let cek = ""
    for(const n of vip) {
        if (n.checked) {
            cek = n.value
            break
        }
    }

    if (cek === "ya") {
        return true
    } else {
        return false
    }
}

const subtotal = (konser, jml, vip) => {
    let total  = harga(konser) * jml

    if (vip) {
        total = total + 50000 * jml
    }

    return total
}


const struck = document.getElementById("struck-container")
struck.style.display = "none"

const date = new Date()
const h = date.getHours()
const m = date.getMinutes()
const s = date.getSeconds()

reset.addEventListener("click", () => {
    struck.style.display = "none"
    nama.value = ""
    jml_tiket.value = ""
})

cek.addEventListener("click", () => {

    if (nama.value === "" || jml_tiket.value <= 0) {
        alert("Data tidak valid!")
    } else {
        struck.style.display = "flex"
        struck.innerHTML = `
        <h2>. Daps Makelar Ticket</h2>
        <div class="header">
            <div class="item">
                <p>Waktu</p>
                <p>${h} : ${m} : ${s}</p>
            </div>
            <div class="item">
                <p>Nama</p>
                <p>${nama.value}</p>
            </div>
            <div class="item">
                <p>Konser</p>
                <p>${konser.value}</p>
            </div>
        </div>
        <div class="description">
            <p>Harga</p>
            <div class="item">
                <p>${jml_tiket.value}x</p>
                <p>@Rp. ${harga(konser.value)}</p>
                <p>Rp. ${harga(konser.value)* jml_tiket.value}</p>
            </div>
            <p>VIP</p>
            <div class="item">
                <p>${vipcek() ? jml_tiket.value : 0}x</p>
                <p>@Rp. ${vipcek() ? 50000 : 0}</p>
                <p>Rp. ${vipcek() ? 50000 * jml_tiket.value : 0}</p>
            </div>
        </div>
        <div class="total">
            <div class="item">
                <p>Sub Total</p>
                <p>Rp. ${subtotal(konser.value, jml_tiket.value, vipcek())}</p>
            </div>
        </div>
        <p class="ty">--- Terima Kasih ---</p>
        `
    }

})