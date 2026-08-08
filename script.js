function loadComponent(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;

      // refresh feather icons jika ada
      if (typeof feather !== "undefined") {
        feather.replace();
      }
    });
}

loadComponent("navbar.html", "navbar");
loadComponent("footer.html", "footer");

$(document).ready(function () {
  $(document).on("click", "#hamburger-menu", function (event) {
    event.stopPropagation();
    $(".navbar_nav").toggleClass("active");
    $(".search-form").removeClass("active");
  });

  $(document).on("click", "#search-button", function (event) {
    event.stopPropagation();
    $(".search-form").toggleClass("active");
    $(".navbar_nav").removeClass("active");
    $("#search-box").focus();
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".navbar_nav").length &&
      !$(event.target).closest("#hamburger-menu").length &&
      !$(event.target).closest(".search-form").length &&
      !$(event.target).closest("#search-button").length
    ) {
      $(".navbar_nav").removeClass("active");
      $(".search-form").removeClass("active");
    }
  });

  if (document.querySelector(".element")) {
    var typed = new Typed(".element", {
      strings: [
        "Hello, I am Chofi",
        "I am Web Developer",
        "Wellcome to My Portofolio",
      ],
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000,
    });
  }

  $(".way-fade-up").waypoint(
    function () {
      $(this.element).addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "90%",
    },
  );

  $(".way-fade-down").waypoint(
    function () {
      $(this.element).addClass("animate__animated animate__fadeInDown");
    },
    {
      offset: "90%",
    },
  );

  $(".way-fade-right").waypoint(
    function () {
      $(this.element).addClass("animate__animated animate__fadeInRight");
    },
    {
      offset: "90%",
    },
  );

  $(".way-fade-left").waypoint(
    function () {
      $(this.element).addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "90%",
    },
  );

  const containerProject = document.getElementById("project-container");
  if (containerProject) {
    fetch("/data/project.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        data.forEach((item, index) => {
          containerProject.innerHTML += `
            <div class="row mb-5 gx-5">

              <div class="col">
                <div id="carousel${index}" class="carousel slide">

                  <div class="carousel-inner">

                    ${item.images
                      .map(
                        (img, i) => `
                      <div class="carousel-item ${i === 0 ? "active" : ""}">
                        <img
                          src="${img}"
                          class="img-fluid rounded h-100"
                          style="object-fit:contain; object-position:top;"
                        >
                      </div>
                    `,
                      )
                      .join("")}

                  </div>

                  <button class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carousel${index}"
                          data-bs-slide="prev">

                    <span class="carousel-control-prev-icon"></span>

                  </button>

                  <button class="carousel-control-next"
                          type="button"
                          data-bs-target="#carousel${index}"
                          data-bs-slide="next">

                    <span class="carousel-control-next-icon"></span>

                  </button>
                </div>
              </div>

              <div class="col">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <h5>${item.titleSchema}</h5>
                
                ${item.constribution
                    .map(
                      (cons, i) =>`
                    <p>${cons}</p>
                  `,
                )
                .join("")}
                
              </div>

            </div>
          `;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const containerAchiev = document.getElementById("achievement-container");
  if (containerAchiev) {
    fetch("/data/achievements.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        data.forEach((item) => {
          containerAchiev.innerHTML += `
            <div class="row mb-5">

              <div class="col">
                <img 
                  src="${item.image}" 
                  class="img-fluid rounded"
                  style="width: 600px; height: auto;"
                >
              </div>

              <div class="col">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </div>

            </div>
          `;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
