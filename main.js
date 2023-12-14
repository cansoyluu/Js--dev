const jsonplaceholder_url = "https://jsonplaceholder.typicode.com";

const users_wrapper = document.getElementById("users-wrapper");

async function getUsers() {
  const res = await fetch(jsonplaceholder_url + "/users");
  const data = await res.json();
  for (user of data) {
    users_wrapper.innerHTML += `<div class="col-4">
<div class="card can3" style="width: 18rem;">
<div class="card-body can2">
<h5 class="card-title">${user.name}</h5>
<p class="card-texts"><i class="bi bi-building"></i> ${user.company.name}</p>
<p class="card-text"><i class="bi bi-telephone"></i> ${user.phone}</p>
<p class="card-text"><i class="bi bi-envelope"></i> ${user.email}</p>
<p class="card-text"><i class="bi bi-geo-alt"></i> ${user.address.city}</p>
</div>
</div>
</div>
</div>`;
  }
}

getUsers();
