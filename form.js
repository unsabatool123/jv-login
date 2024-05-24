

       document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
      
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      



        
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Password: ${password}</p>`;
      });
      
      




