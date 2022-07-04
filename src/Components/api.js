export async function login(email, password) {
  return await fetch("http://localhost:5000/users/login", {
    method: "POST",
    body: JSON.stringify(email, password),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getMovies() {
  return await fetch("http://localhost:5000/movies/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function deleteMovie(id) {
  return await fetch("http://localhost:5000/movies/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function addMovie(title, img, synopsis, rating, year) {
  return await fetch("http://localhost:5000/movies/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({
      title,
      img,
      synopsis,
      rating,
      year,
    }),
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function editMovie(title, img, synopsis, rating, year) {
  return await fetch("http://localhost:5000/movies/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({
      title,
      img,
      synopsis,
      rating,
      year,
    }),
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
