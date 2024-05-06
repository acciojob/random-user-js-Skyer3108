// //your code here

// const userdata=document.getElementById('userdetails')
// const name=document.getElementById('name')
// const img=document.getElementById('img')

// const age=document.getElementById('age')
// const email=document.getElementById('email')
// const phone=document.getElementById('phone')
// const detail=document.getElementById('details')



// function  handleAge(results) {

// 	const ageres=results
	


// 	age.addEventListener('click',()=>{
// 		  ageres.forEach((user)=>{
			  
// 			  const dob=user.dob
// 			  console.log(dob.age)
			  
// 			  detail.innerText=`${dob.age}`
			  
// 		  })
// 	})
	
// }


// function handleEmail(results) {

// 	const emailres=results;

// 	email.addEventListener('click',()=>{
// 		  emailres.forEach((user)=>{
			  
			  
			  
// 			  detail.innerText=`${user.email}`
			  
// 		  })
// 	})
	
// }



// function handlePhone(results) {

// 	const emailres=results;

// 	phone.addEventListener('click',()=>{
// 		  emailres.forEach((user)=>{
			  
			  
			  
// 			  detail.innerText=`${user.phone}`
			  
// 		  })
// 	})
	
// }





// userdata.addEventListener('click',async ()=>{

// 	detail.innerText=''

// 	const data=await fetch('https://randomuser.me/api/')

// 	const result=data.json()

// 	result.then((data)=>{

// 		console.log(data.results)

// 		const results=data.results

// 		handleAge(results);
// 		handleEmail(results);
// 		handlePhone(results)
		
// 		results.forEach((user)=>{

			
// 			console.log(user.name.title+""+user.name.first)

// 			img.src=`${user.picture.large}`

// 			name.textContent=`${user.name.title+' '+user.name.first}`

			
	
			
// 		})
		
// 	}).catch((err)=>{
// 		console.log(err)
		
// 	})

 
// 	console.log(result)

	
	
// })

//=====================================================
document.addEventListener('DOMContentLoaded', function() {
  const userPhoto = document.getElementById('userPhoto');
  const userName = document.getElementById('userName');
  const additionalInfo = document.getElementById('additionalInfo');
  const getUserButton = document.getElementById('getUser');
  const infoButtons = document.querySelectorAll('.infoButton');

  function fetchUser() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
		  additionalInfo.innerText=''
        userPhoto.src = user.picture.large;
        userName.textContent = user.name.first + ' ' + user.name.last;
      })
      .catch(error => console.error('Error fetching user:', error));
  }

  function displayInfo(attribute) {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        let info;
        switch (attribute) {
          case 'age':
            info = user.dob.age;
            break;
          case 'email':
            info = user.email;
            break;
          case 'phone':
            info = user.phone;
            break;
        }
        additionalInfo.textContent = info;
      })
      .catch(error => console.error('Error fetching user info:', error));
  }

  getUserButton.addEventListener('click', fetchUser);

  infoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const attribute = button.getAttribute('data-attr');
      displayInfo(attribute);
    });
  });

  // Fetch user data when page loads
  fetchUser();
});

