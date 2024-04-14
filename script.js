// Simulate an API endpoint with user data (replace with your actual API call)
const userData = {
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com"
  };
  
  // Function to fetch user data (assuming a real API call)
  function fetchUserData() {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        resolve(userData); // Resolve the promise with user data
      }, 1000); // Simulate 1 second delay
    });
  }
  
  // Function to get user data and log it using async/await
  async function getUserData() {
    try {
      const data = await fetchUserData(); // Wait for user data to be fetched
      console.log("User Name:", data.name);
      console.log("User Age:", data.age);
      console.log("User Email:", data.email);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  
  // Function to get user age and return it as a Promise
  function getUserAge() {
    return fetchUserData().then(data => data.age); // Return only the user's age from the promise
  }
  
  // Function to get and log user age using async/await
  async function getAgeAndLog() {
    try {
      const age = await getUserAge(); // Wait for user age to be fetched
      console.log("User Age:", age);
    } catch (error) {
      console.error("Error fetching user age:", error);
    }
  }
  
  // Call the functions to test them
  getUserData();
  getAgeAndLog();
  