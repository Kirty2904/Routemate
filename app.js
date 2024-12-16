document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const modal = document.getElementById("loginModal");
    const modalCloseBtn = document.querySelector(".close-modal");
    const loginBtn = document.querySelector(".login-btn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    loginBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    const searchForm = document.getElementById("searchForm");
    const searchResults = document.getElementById("searchResults");

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(searchForm);
        const searchParams = new URLSearchParams(formData);

        fetch(  `/api/search?${searchParams.toString()}`)
            .then(response => response.json())
            .then(data => {
                searchResults.innerHTML = "";

                if (data.length) {
                    data.forEach(result => {
                        const resultItem = document.createElement("div");
                        resultItem.classList.add("result-item");
                        resultItem.innerHTML = `
                            <h3>${result.name}</h3>
                            <p>Gender: ${result.gender}</p>
                            <p>Travel Date: ${result.travelDate}</p>
                            <p>College Year: ${result.collegeYear}</p>
                            <p>Mode of Transport: ${result.transportMode}</p>
                        `;
                        searchResults.appendChild(resultItem);
                    });
                } else {
                    searchResults.innerHTML = "<p>No matching travel partners found.</p>";
                }
            })
            .catch(error => console.error("Error fetching search results:", error));
    });
});