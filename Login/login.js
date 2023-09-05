const eyeIcon = document.querySelector('.eye');
        const passwordInput = document.getElementById('exampleInputPassword1');

        eyeIcon.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });