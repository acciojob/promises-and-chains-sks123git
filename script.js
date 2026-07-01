
        const form = document.getElementById('votingForm');
        const nameInput = document.getElementById('name');
        const ageInput = document.getElementById('age');
        const submitBtn = document.getElementById('btn');

        form.addEventListener('submit', (event) => {
           
            event.preventDefault();
            const name = nameInput.value.trim();
            const ageVal = ageInput.value.trim();

            if (name === "" || ageVal === "") {
                alert("Please enter valid details.");
                return; 
            }

            const age = parseInt(ageVal, 10);

            submitBtn.disabled = true;

   
            const checkVotingEligibility = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age > 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000); // 4-second delay
            });

            checkVotingEligibility
                .then((successMessage) => {
                    alert(successMessage);
                })
                .catch((errorMessage) => {
                    alert(errorMessage);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                });
        });