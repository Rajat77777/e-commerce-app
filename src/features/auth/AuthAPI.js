// A mock function to mimic making an async request for data
export function createUser() {
  return new Promise(async(resolve) =>{
  const response= await fetch('http://localhost:8080/users'{
    method:'POST',
    body:JSON.stringify(userData),
    headers:{'content-type':'application/json'}

  })
  const data = await response.json();
  resolve({data});
  }
  );
}
