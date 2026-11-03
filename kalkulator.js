
function hitungNilai() {
    let tugas = document.getElementById("tugas").value;
    let pts = document.getElementById("pts").value;
    let pas = document.getElementById("pas").value;

    if (tugas === "" || pts === "" || pas === "") {
        alert("Silakan isi semua nilai!");
        return;
    }

    tugas = Number(tugas);
    pts = Number(pts);
    pas = Number(pas);

    if (
        tugas < 0 || tugas > 100 ||
        pts < 0 || pts > 100 ||
        pas < 0 || pas > 100
    ) {
        alert("Nilai harus antara 0 sampai 100!");
        return;
    }

    let hasil = (tugas * 0.3) + (pts * 0.3) + (pas * 0.4);

    let predikat;

    if (hasil >= 90) {
        predikat = "A - Sangat Baik";
    } else if (hasil >= 80) {
        predikat = "B - Baik";
    } else if (hasil >= 70) {
        predikat = "C - Cukup";
    } else {
        predikat = "D - Perlu Belajar Lagi";
    }

    document.getElementById("nilaiAkhir").innerText = hasil.toFixed(2);
    document.getElementById("predikat").innerText = "Predikat: " + predikat;
}

function resetNilai() {
    document.getElementById("tugas").value = "";
    document.getElementById("pts").value = "";
    document.getElementById("pas").value = "";

    document.getElementById("nilaiAkhir").innerText = "0";
    document.getElementById("predikat").innerText = "";
    document.getElementById("keterangan").innerText = "";
}
