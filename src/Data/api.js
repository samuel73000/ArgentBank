//pour se connecter
export const loginUser = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.body.token;
    } else {
      throw new Error("Mot de passe ou email incorrects.");
    }
  } catch (error) {
    throw new Error("Erreur lors de la connexion : " + error);
  }
};
// pour sign-up
export const signUpUser = async (
  email,
  password,
  firstName,
  lastName,
  userName
) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        userName,
      }),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Échec de l'inscription");
    }
  } catch (error) {
    throw new Error("Erreur lors de l'inscription : " + error);
  }
};
// pour metre a jour le username
export const updateUserNameAPI = async (token, updateUserName) => {
  try {
    const requestBody = {
      userName: updateUserName,
    };

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erreur lors de la mise à jour");
    }
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour : " + error);
  }
};

// pour recuperer le profil 
export const fetchUserProfile = async (token) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    throw new Error("Erreur lors de la récupération du profil : " + error);
  }
};
