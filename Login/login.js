const eyeIcon = document.querySelector('.eye');
        const passwordInput = document.getElementById('exampleInputPassword1');

        eyeIcon.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
        // -------

        // Function to toggle the overflow-scroll class on the body
        function toggleOverflow() {
            document.body.classList.toggle('overflow-scroll');
        }

        // Function to remove the overflow-scroll class from the body
        function removeOverflow() {
            document.body.classList.remove('overflow-scroll');
        }

        // Check if the screen width is less than or equal to a certain threshold (e.g., 768px for tablets)
        function isTabletOrMobile() {
            return window.innerWidth <= 768;
        }

        // Get all elements with class "form-control"
        const formControls = document.querySelectorAll('.form-control');

        // Add click event listeners to each form control element (on tablets and mobiles)
        if (isTabletOrMobile()) {
            formControls.forEach(function (element) {
                element.addEventListener('click', toggleOverflow);
            });
        }

        // Add a click event listener to the document body to remove overflow (on tablets and mobiles)
        if (isTabletOrMobile()) {
            document.body.addEventListener('click', function (event) {
                if (!event.target.classList.contains('form-control')) {
                    removeOverflow();
                }
            });
        }