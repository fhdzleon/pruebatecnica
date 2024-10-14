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

    alert("Usuarios en consola");
    console.log(arr);
  } catch (error) {
    console.error(error.message);
  }

  return arr;
};

export default fetchUserData;
