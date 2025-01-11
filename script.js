
$(document).ready(function(){

    $('#hamburger-menu').click(function(event){
        event.stopPropagation();
        $('.navbar-nav').toggleClass("active");
        $('.search-form').removeClass("active");
    });

    $('#search-button').click(function(event){
        event.stopPropagation();
        $('.search-form').toggleClass("active");
        $('.navbar-nav').removeClass("active"); 
        $('#search-box').focus();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar-nav').length && !$(event.target).closest('#hamburger-menu').length && !$(event.target).closest('.search-form').length && !$(event.target).closest('#search-button').length) {
            $('.navbar-nav').removeClass("active");
            $('.search-form').removeClass("active");
        }
    });

    var typed = new Typed(".element", {
      strings: ["Hello, I am Chofi", "I am Web Developer", "Wellcome to My Portofolio"],//["CV!", "Portofolio!", "Journey!"],
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000
    });

    $('.way-fade-up').waypoint(function() {
      $(this.element).addClass('animate__animated animate__fadeInUp');
    }, {
      offset: '90%' 
    });

    $('.way-fade-down').waypoint(function() {
      $(this.element).addClass('animate__animated animate__fadeInDown');
    }, {
      offset: '90%' 
    });
    
    $('.way-fade-right').waypoint(function() {
      $(this.element).addClass('animate__animated animate__fadeInRight');
    }, {
      offset: '90%'
    });
    
    $('.way-fade-left').waypoint(function() {
      $(this.element).addClass('animate__animated animate__fadeInLeft');
    }, {
      offset: '90%'
    });

  var movieTitle = 'Harry Potter';
  
  // API OMDb
  $.ajax({
    url: 'http://www.omdbapi.com/',
    method: 'GET',
    dataType: 'json',
    data: {
      apikey: '2d3563a', 
      s: movieTitle 
    },
    success: function(response) {
      if (response.Response === "True") {
        $('#movieData').html('');

      response.Search.forEach(function(movie) {
        if (movie.imdbID) {
          $('#movieData').append(`
            <div class="movie-card">
              <div class="movie-icons">
                <a href="detail.html?id=${movie.imdbID}" class="tombol-detail-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                    />
                    <path
                      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                    />
                  </svg>
                </a>
              </div>
              <div class="movie-image">
                <img src="${movie.Poster}" alt="Movie Poster">
              </div>
              <h3>${movie.Title}</h3>
              <p>Year: ${movie.Year}</p>
              <p>Type: ${movie.Type}</p>
              
            </div>
          `);
        }
      });

      } else {
        $('#movieData').html(`<p>No movies found</p>`);
      }
    },
    error: function(xhr, status, error) {
      $('#movieData').html(`<p>Error: ${error}</p>`);
    }
  });
});