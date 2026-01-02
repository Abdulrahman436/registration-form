function create(e) {
    e.preventDefault();

    let stdName = document.getElementById("name").value;
    let fathName = document.getElementById("father").value;
    let phNumber = document.getElementById("phone").value;
    let cnic = document.getElementById("cnic").value;
    let date = document.getElementById("date").value;
    let course = document.getElementById("course").value;

    if (
        stdName === "" ||
        fathName === "" ||
        phNumber === "" ||
        cnic === "" ||
        date === "" ||
        course === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let obj = {
        name: stdName,
        fatherName: fathName,
        PhoneNumber: phNumber,
        cnicNmuber: cnic,
        cuDate: date,
        courses: course,
    };

    let card = `
    <div class="student-card">
        <h3>Student Card</h3>
        <p><b>Student Name:</b> ${obj.name}</p>
        <p><b>Father Name:</b> ${obj.fatherName}</p>
        <p><b>Phone Number:</b> ${obj.PhoneNumber}</p>
        <p><b>CNIC:</b> ${obj.cnicNmuber}</p>
        <p><b>Date Of Birth:</b> ${obj.cuDate}</p>
        <p><b>Course:</b> ${obj.courses}</p>
    </div>
    `;

    document.getElementById("cardcontainer").innerHTML = card;
    document.getElementById("parent").style.display = "none";

    console.log(obj);
}