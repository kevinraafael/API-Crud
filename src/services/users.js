const baseUrl = 'http://192.168.42.146:3000/users';

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
//ReactNative flash message
