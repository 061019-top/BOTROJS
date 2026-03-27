let benhnhan = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    sdt: "4567898765",
    huyetap: 123,
    danhgia: "Huyết áp bình thường",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    sdt: "45676765",
    huyetap: 178,
    danhgia: "Huyết áp cao",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    sdt: "12345678765",
    huyetap: 82,
    danhgia: "Huyết bình thấp",
  },
];
let tbody = document.getElementById("listPatient");

const inBenhNhan = () => {
  tbody.innerHTML = "";
  benhnhan.forEach((element, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
           <td>${index + 1}</td>
              <td>${element.name}</td>
              <td>${element.sdt}</td>
              <td>${element.huyetap}</td>
              <td>${element.danhgia}</td>
        `;
    tbody.appendChild(tr);
  });
};

inBenhNhan();

let tenbenhNhan = document.getElementById("patientName");
let sdtBenhNhan = document.getElementById("patientPhone");
let haBenhNhan = document.getElementById("blood-pressure");
let themBN = document.getElementById("btnRegister");

const themBenhNhan = () => {
  if (tenbenhNhan.value.trim() == "") {
    alert("Vui lòng nhập tên bệnh nhân.");
    return;
  }

  if (sdtBenhNhan.value.trim() == "") {
    alert("Số diện thoại không được để trống");
    return;
  }

  if (haBenhNhan.value.trim() < 0) {
    alert("Huyết áp bệnh nhân phải lớn hơn 0");
    return;
  }
 let result;
    if (haBenhNhan.value >= 140) {
        result = "Huyết áp cao";
    } else if (haBenhNhan.value >= 90) { 
        result = "Huyết áp bình thường";
    } else {
        result = "Huyết áp thấp";
    }

  let benhNhanMoi = {
    id: Date.now(),
    name: tenbenhNhan.value,
    sdt: sdtBenhNhan.value,
    huyetap: haBenhNhan.value,
    danhgia: result,
  };
  console.log(benhNhanMoi);
  

  benhnhan.push(benhNhanMoi);
  inBenhNhan();

  tenbenhNhan.value = "";
  sdtBenhNhan.value = "";
  haBenhNhan.value = "";
  alert("Thêm bệnh nhân thành công");
};

themBN.addEventListener("click", themBenhNhan);
