const url = process.env.NEXT_PUBLIC_API_URL;

export const register = async (firstName, lastName, password, email) => {

    return fetch(`${url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          password: password,
          email: email,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson is:',responseJson);
        if (responseJson.message === 'success') {
          return "success";
        }
        return "error";
      })
      .catch((error) => {
        console.error(error);
        return "error";
      });
  }

  export const login = (email, password) => {

    return fetch(`${url}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((response) => response.json())
      .then(res => {
        if (res.message === 'success') {
          return res;
        }
        return "error";
      })
      .catch((error) => {
        console.error(error);
        return "error";
      });
  }