const fetchUserData = async () => {
  const arr = [];

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Problema al solicitar los datos");
    }
    const data = await response.json();

    data.forEach((user) => {
      arr.push({ name: user.name, email: user.email });
    });
  } catch (error) {
    console.error(error.message);
  }

  return console.log(arr);
};

export default fetchUserData;
