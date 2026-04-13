let data = [];

function addData() {
  let val = document.getElementById("value").value;
  data.push(val);
  display();
}

function display() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(d => {
    list.innerHTML += `<li>${d}</li>`;
  });
}