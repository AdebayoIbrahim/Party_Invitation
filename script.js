<script>
        function handleRSVP() {
            const responseDiv = document.getElementById('responseMessage');
            const button = document.querySelector('.rsvp-button');
            
            // Change button text and show response
            button.innerHTML = '🎉 Thanks for RSVPing! 🎉';
            button.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
            
            // Show success message
            responseDiv.innerHTML = '🎊 Awesome! Can\'t wait to see you there! 🎊';
            responseDiv.className = 'response-message success show';
            
            // Add extra confetti effect
            createExtraConfetti();
        }

        function createExtraConfetti() {
            for (let i = 0; i < 20; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = getRandomColor();
                confetti.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(confetti);
                
                // Remove after animation
                setTimeout(() => confetti.remove(), 3000);
            }
        }

        function getRandomColor() {
            const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#a8e6cf', '#ffd93d', '#ff8b94', '#88d8c0'];
            return colors[Math.floor(Math.random() * colors.length)];
        }
    </script>