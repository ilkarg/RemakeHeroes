export const validationLoginModal = () => {
    return {
      username: (username: string) => {
        return {
          status: username.length < 1,
          message: username.length < 1 ? "Введите имя пользователя" : ""
        }
      },
      password: (password: string) => {
        return {
          status: password.length < 1,
          message: password.length < 1 ? "Введите пароль" : ""
        }
      }
    }
  }