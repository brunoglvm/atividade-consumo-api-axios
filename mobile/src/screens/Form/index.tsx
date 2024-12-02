const handleLogin = async () => {
  if (!email || !senha) {
    // Verifica se os campos obrigatórios estão vazios
    console.log("Login falhou. Todos os campos são obrigatórios.");
    Toast.show({
      type: "error",
      text1: "Login falhou.",
      text2: "Todos os campos são obrigatórios.",
    });
    return;
  }

  try {
    const response = await api.get("/usuarios");
    const usuarios = response.data.users;

    if (Array.isArray(usuarios) && usuarios.length > 0) {
      const user = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      if (user) {
        // Login bem-sucedido
        console.log("Login bem-sucedido.");
        await AsyncStorage.setItem("user", JSON.stringify(user));
        setNome(user.nome);
        navigation.navigate("Auth", { screen: "Home" });

        Toast.show({
          type: "success",
          text1: "Login bem-sucedido!",
          text2: `Bem-vindo(a), ${user.nome}`,
        });
      } else {
        // Erro ao encontrar o usuário com as credenciais fornecidas
        console.log("Login falhou. Nenhum usuário encontrado.");
        Toast.show({
          type: "error",
          text1: "Login falhou.",
          text2: "Nenhum usuário encontrado com as credenciais fornecidas.",
        });
      }
    } else {
      // Nenhum usuário encontrado na resposta da API
      console.log("Nenhum usuário encontrado na resposta da API.");
      Toast.show({
        type: "error",
        text1: "Erro de servidor.",
        text2: "Não há usuários cadastrados.",
      });
    }
  } catch (error) {
    // Erro na requisição
    console.log("Erro na requisição:", error);
    Toast.show({
      type: "error",
      text1: "Erro na requisição.",
      text2: "Houve um problema ao tentar realizar o login. Tente novamente.",
    });
  }
};

//////////////////////////////////////////////////////////////////////////////////////////

const handleRegister = async () => {
  if (!nome || !email || !senha) {
    // Campos obrigatórios vazios
    console.log("Registro falhou. Todos os campos são obrigatórios.");
    Toast.show({
      type: "error",
      text1: "Registro falhou.",
      text2: "Todos os campos são obrigatórios.",
    });
    return;
  }

  try {
    const response = await api.post("/usuarios", { nome, email, senha });
    const novoUsuario = response.data.user;

    if (novoUsuario) {
      // Registro bem-sucedido
      console.log("Usuário registrado com sucesso:", novoUsuario);
      Toast.show({
        type: "success",
        text1: "Conta criada com sucesso!",
        text2: "Você pode fazer login agora.",
      });
      navigation.navigate("Login");
    } else {
      // Erro ao criar o usuário
      console.log("Erro. Usuário não foi criado.");
      Toast.show({
        type: "error",
        text1: "Erro no registro.",
        text2: "Não foi possível criar sua conta. Tente novamente.",
      });
    }
  } catch (error) {
    // Erro na requisição
    console.log("Erro ao registrar usuário:", error);
    Toast.show({
      type: "error",
      text1: "Erro no registro.",
      text2: "Não foi possível criar sua conta. Tente novamente mais tarde.",
    });
  }
};