"use server";

const usuarios = [
  {
    name: 'Rafael',
    email: 'rafa@marc.com',
    password: '123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  },
  {
    name: 'Renato',
    email: 'renas@marc.com',
    password: '123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  },
  {
    name: 'Arthur',
    email: 'arthur@marc.com',
    password: '123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  },
  {
    name: 'Marcelino',
    email: 'marcelino@marc.com',
    password: '123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  }
];

const getUserAuthenticated = (user) => {
    let userAuth = {}
    usuarios.map(userzinho => {
      if (userzinho.email === user.email && userzinho.senha === user.password) {
        userAuth = userzinho
      } 
    })
    return userAuth
};

const getUsers = () => {
    return usuarios
};

export { getUsers, getUserAuthenticated };