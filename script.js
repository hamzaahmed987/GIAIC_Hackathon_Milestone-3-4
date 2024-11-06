function generateResume(event) {
    event.preventDefault(); 
    
    document.getElementById("inputContainer").style.display = "none";
    document.getElementById("outputContainer").style.display = "block";
    


    document.getElementById("outputName").innerText = document.getElementById("name").value;
    document.getElementById("outputJobTitle").innerText = document.getElementById("jobTitle").value;
    document.getElementById("outputSummary").innerText = document.getElementById("summary").value;
    document.getElementById("outputExperience").innerText = document.getElementById("experience").value;
    document.getElementById("outputEducation").innerText = document.getElementById("education").value;

    //  skills 
    const skills = document.getElementById("skills").value.split(",");
    const outputSkills = document.getElementById("outputSkills");
    outputSkills.innerHTML = "";
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        outputSkills.appendChild(li);
    });
    
    //  interest 
    const interests = document.getElementById("interest").value.split(",");
    const outputInterest = document.getElementById("outputInterest");
    outputInterest.innerHTML = ""; // Clear existing interests
    interests.forEach(interest => {
        const li = document.createElement("li");
        li.textContent = interest.trim();
        outputInterest.appendChild(li);
    });
}

//  pic
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById("previewImage").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

//  edit 
function editResume() {
    document.getElementById("outputContainer").style.display = "none";
    document.getElementById("inputContainer").style.display = "block";
}

//  print 
function printResume() {
    window.print();
}
