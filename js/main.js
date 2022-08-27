// Bài 1

var txtLuong1Ngay = document.getElementById("txtLuong1Ngay");
var txtSoNgayLam = document.getElementById("txtSoNgayLam");
var txtTongLuong = document.getElementById("txtTongLuong");
var btnTinhLuong = document.getElementById("btnTinhLuong");

btnTinhLuong.onclick = function () {
    // Đầu vào: Lấy input từ người dùng, lương 1 ngày và số ngày làm
    var luong1Ngay = Number(txtLuong1Ngay.value);
    var soNgayLam = Number(txtSoNgayLam.value);
    // Xử lý: Tính lương theo công thức
    var tongLuong = luong1Ngay * soNgayLam + " USD";
    // Đầu ra: Hiển thị kết quả
    txtTongLuong.value = tongLuong;
}

// End bài 1

// Bài 2

var txtSo1 = document.getElementById("txtSo1");
var txtSo2 = document.getElementById("txtSo2");
var txtSo3 = document.getElementById("txtSo3");
var txtSo4 = document.getElementById("txtSo4");
var txtSo5 = document.getElementById("txtSo5");
var btnTinhTB = document.getElementById("btnTinhTB");
var txtTrungBinh = document.getElementById("txtTrungBinh");
btnTinhTB.onclick = function () {
    // Đầu vào: Lấy input từ người dùng, 5 số
    var so1 = Number(txtSo1.value);
    var so2 = Number(txtSo2.value);
    var so3 = Number(txtSo3.value);
    var so4 = Number(txtSo4.value);
    var so5 = Number(txtSo5.value);
    // XỬ lý: Tính trung bình 5 số theo công thức
    var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    // Đầu ra: Hiển thị kết quả
    txtTrungBinh.value = trungBinh.toFixed(2);
}

// ENd bài 2

// Bài 3

var txtTienUSD = document.getElementById("txtTienUSD");
var btnQDoiUSD = document.getElementById("btnQDoiUSD");
var txtTienQD = document.getElementById("txtTienQD");
btnQDoiUSD.onclick = function () {
    // Đầu vào: Lấy số tiền USD từ input người dùng
    var tienUSD = Number(txtTienUSD.value);
    // Xử lý: Tính tiền quy đổi ra VND theo công thức
    var tienVND = tienUSD * 23500;
    // Đầu ra: Hiển thị kết quả
    txtTienQD.value = new Intl.NumberFormat('vn-VN').format(tienVND) + " VND";
}
// End bài 3

// Bài 4
var txtChieuDai = document.getElementById("txtChieuDai");
var txtChieuRong = document.getElementById("txtChieuRong");
var btnTinh = document.getElementById("btnTinh");
var txtHCN = document.getElementById("txtHCN");
btnTinh.onclick = function () {
    // Đầu vào: Lấy chiều dài, chiều rộng từ input người dùng
    var chieuDai = Number(txtChieuDai.value);
    var chieuRong = Number(txtChieuRong.value);
    // Xử lý: Tính chu vi, diện tích HCN theo công thức
    var DT = chieuDai * chieuRong;
    var CV = (chieuDai + chieuRong) * 2;
    // Đầu ra: Hiển thị kết quả
    txtHCN.value = "Chu vi: " + CV.toFixed(2) + ", Diện tích: " + DT.toFixed(2);
}
// End bài 4

// Bài 5
var txt2KySo = document.getElementById("txt2KySo");
var btnTinhTong = document.getElementById("btnTinhTong");
var txtTong = document.getElementById("txtTong");
btnTinhTong.onclick = function () {
    // Đầu vào: Lấy số có 2 ký số từ input người dùng
    var so2KySo = Number(txt2KySo.value);
    // Xử lý: Tính tổng = chuc + dv
    var chuc = Math.floor(so2KySo / 10);
    var dv = so2KySo % 10;
    var tong = chuc + dv;
    // Đầu ra: Hiển thị kết quả
    txtTong.value = tong;
}
// End bài 5