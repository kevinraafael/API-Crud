const baseUrl = 'http://192.168.42.146:3000/users/';

export async function getUsers() {
  try {
    const request = await fetch(`${baseUrl}`);
    const users = await request.json();

    return users;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postUsers(user) {
  const request = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  const users = await request.json();
}
export async function deleteUsers(id) {
  try {
    await fetch(`${baseUrl}${id}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log(e);
  }

  //deleteUsers();
}
export async function updateUser(id, user) {
  try {
    await fetch(`${baseUrl}${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    });
  } catch (e) {
    console.log(e);
  }
}
//ReactNative flash message
