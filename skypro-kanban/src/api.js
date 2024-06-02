export async function registerUser({ login, name, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login: login,
      name: name,
      password: password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже сущетсвует!");
  }

  throw new Error("Ошибка сервера!");
}

export async function loginUser({ login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  if (response.status === 400) {
    throw new Error("Неверный логин или пароль!");
  }

  throw new Error("Ошибка сервера!");
}

export async function getTodos(token) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error("Ошибка сервера!");
}

export async function addNewTodos({ token, title, topic, description, date }) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: title,
      topic: topic,
      description: description,
      date: date,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error("Ошибка сервера!");
}
