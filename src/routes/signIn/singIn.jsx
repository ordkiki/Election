// JSX - SignIn.jsx
import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NextWeek } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    motDePasse: "",
  });

  const navigate = useNavigate();

  const EnvoyerRequete = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:8081/verifier", values);
        console.log(response.data);
        navigate('/');
    } catch (error) {
        console.error("Erreur lors de la requête:", error.message);
    }
  };

  return (
    <Box width="100%" position="relative">
      <Typography fontWeight="bold" fontSize="20px">
        E-vote
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <form onSubmit={EnvoyerRequete}>
          <Box>
            <IconButton>
              <NextWeek />
            </IconButton>
            <Box
              sx={{
                border: "2px var(--thirst) solid",
                borderRadius: "30px",
                width: "400px",
                padding: "50px",
                '@media screen and (max-width: 600px)': {
                  border: 0,
                  width: "100%",
                  padding: 0,
                },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "cursive",
                  color: "var(--second)",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                S'inscrire
              </Typography>
              <Typography>E-mail</Typography>
              <input
                type="email"
                name="email"
                id="email"
                className="champInput"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />

              <Typography>Mot de passe</Typography>
              <input
                type="password"
                name="motDePasse"
                id="motDePasse"
                className="champInput"
                onChange={(e) => setValues({ ...values, motDePasse: e.target.value })}
              />

              <Typography textAlign="center" fontSize="15px">
                Mot de passe oublié?
              </Typography>

              <Button
                type="submit"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "var(--thirst)",
                  color: "var(--primary)",
                  margin: "20px 0px",
                }}
              >
                Connexion
              </Button>
              <Link to="/signUp">
                <Button
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid var(--thirst)",
                    alignItems: "center",
                    margin: "20px 0px",
                  }}
                >
                  Créer un compte
                </Button>
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default SignIn;