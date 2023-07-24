// 1. Remove duplicates in Array
  const numbers = [1, 2, 2, 2, 3, 3, 3, 4, 5];
  const unique = [...new Set(numbers)];
  console.log(unique);

// 2. Scroll to top button
<button
      type="button"
      class="btn btn-floating btn-lg"
      id="btn-back-to-top"
    >
    <i class="bi bi-arrow-up text text-light"></i>
    </button>


    <!-- Scroll to Top JS -->
    <script>
      //Get the button
      let mybutton = document.getElementById("btn-back-to-top");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      // When the user clicks on the button, scroll to the top of the document
      mybutton.addEventListener("click", backToTop);

      function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    </script>
