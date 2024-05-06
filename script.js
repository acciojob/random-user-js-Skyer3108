//your code here

const userdata=document.getElementById('userdetails')
const name=document.getElementById('name')
const img=document.getElementById('img')

const age=document.getElementById('age')
const email=document.getElementById('email')
const phone=document.getElementById('phone')
const detail=document.getElementById('details')



function  handleAge(results) {

	const ageres=results
	


	age.addEventListener('click',()=>{
		  ageres.forEach((user)=>{
			  
			  const dob=user.dob
			  console.log(dob.age)
			  
			  detail.innerText=`${dob.age}`
			  
		  })
	})
	
}


function handleEmail(results) {

	const emailres=results;

	email.addEventListener('click',()=>{
		  emailres.forEach((user)=>{
			  
			  
			  
			  detail.innerText=`${user.email}`
			  
		  })
	})
	
}



function handlePhone(results) {

	const emailres=results;

	phone.addEventListener('click',()=>{
		  emailres.forEach((user)=>{
			  
			  
			  
			  detail.innerText=`${user.phone}`
			  
		  })
	})
	
}





userdata.addEventListener('click',async ()=>{

	detail.innerText=''

	const data=await fetch('https://randomuser.me/api/')

	const result=data.json()

	result.then((data)=>{

		console.log(data.results)

		const results=data.results

		handleAge(results);
		handleEmail(results);
		handlePhone(results)
		
		results.forEach((user)=>{

			
			console.log(user.name.title+""+user.name.first)

			img.src=`${user.picture.large}`

			name.textContent=`${user.name.title+' '+user.name.first}`

			
	
			
		})
		
	}).catch((err)=>{
		console.log(err)
		
	})

 
	console.log(result)

	
	
})