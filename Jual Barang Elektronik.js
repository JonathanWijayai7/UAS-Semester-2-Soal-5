function hasil() {
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var harga = parseInt(document.getElementById("harga").value);
  var total = jumlah * harga;
  document.getElementById("total").innerHTML = total;
  const nilai = document.querySelector("input[name=r]:checked").value;
  var harga_acc;
  var pajak = 0.1 * total;
  var bayar = total + pajak;

  if (nilai == "1") {
    harga_acc = 50000;
    total = jumlah * harga + harga_acc;
    pajak = 0.1 * total;
    bayar = total + pajak;
    document.getElementById("total").innerHTML = total;
    document.getElementById("pajak").innerHTML = pajak;
    document.getElementById("bayar").innerHTML = bayar;
  } else if (nilai == "2") {
    harga_acc = 120000;
    total = jumlah * harga + harga_acc;
    pajak = 0.1 * total;
    bayar = total + pajak;
    document.getElementById("total").innerHTML = total;
    document.getElementById("pajak").innerHTML = pajak;
    document.getElementById("bayar").innerHTML = bayar;
  } else if (nilai == "3") {
    harga_acc = 40000;
    total = jumlah * harga + harga_acc;
    pajak = 0.1 * total;
    bayar = total + pajak;
    document.getElementById("total").innerHTML = total;
    document.getElementById("pajak").innerHTML = pajak;
    document.getElementById("bayar").innerHTML = bayar;
  } else {
    total = jumlah * harga;
    pajak = 0.1 * total;
    bayar = total + pajak;
    document.getElementById("total").innerHTML = total;
    document.getElementById("pajak").innerHTML = pajak;
    document.getElementById("bayar").innerHTML = bayar;
  }
}

function hapus() {
  document.getElementById("Nama").innerHTML = "";
  document.getElementById("harga").innerHTML = "";
  document.getElementById("jumlah").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("pajak").innerHTML = "";
  document.getElementById("bayar").innerHTML = "";
  alert("Data sudah direset, Silahkan bisa isi ulang atau klik navbar untuk reload page");
}
