import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import Header from "./components/header";
import { Country, State, City } from "country-state-city";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { doSubscriptions, getSubscriptions } from "../src/API/api";

interface Subscription {
  id: string;
  name: string;
  price?: number;
}

interface FormData {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  location: string;
  aboutMe: string;
  value1: boolean;
  value2: boolean;
  subscriptionId: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    location: "",
    aboutMe: "",
    value1: true,
    value2: true,
    subscriptionId: "",
  });

  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [cities, setCities] = useState<Array<{ name: string }>>([]);
  const [loading, setLoading] = useState(false);

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const countries = Country.getAllCountries();
  const states = countryCode ? State.getStatesOfCountry(countryCode) : [];


  useEffect(() => {
    async function loadSubscriptions() {
      try {
        const subs = await getSubscriptions();
        setSubscriptions(subs);
      } catch (error) {
        console.error("Erro ao carregar assinaturas:", error);
      }
    }
    loadSubscriptions();
  }, []);

  useEffect(() => {
    if (countryCode && stateCode) {
      const citiesList = City.getCitiesOfState(countryCode, stateCode);
      setCities(citiesList);
    } else {
      setCities([]);
    }
    setFormData((prev) => ({ ...prev, location: "" }));
  }, [countryCode, stateCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryCode(e.target.value);
    setStateCode("");
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateCode(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, location: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.subscriptionId) {
      alert("Por favor, selecione um plano de assinatura!");
      return;
    }

    setLoading(true);

    try {
      console.log("Enviando dados:", formData);
      const result = await doSubscriptions(formData);
      console.log("Checkout concluído:", result);

      const subs = await getSubscriptions();
      console.log("Assinaturas atuais:", subs);

      alert("Checkout realizado com sucesso!");
    } catch (error) {
      console.error("Erro no checkout:", error);
      alert("Erro ao processar o checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginTop="60px"
        lineHeight={0.5}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "60px",
            fontWeight: 500,
            color: "#000",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "100px",
          }}
        >
          Flexible plans and pricing to
          <br /> grow your apps and games
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "white",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: 400,
          }}
        >

          <MuiTelInput
            defaultCountry="US"
            value={formData.phone}
            onChange={handlePhoneChange}
            label="Phone number"
            fullWidth
            sx={{ mb: 2 }}
          />

          <Box display="flex" mb={2} gap={1}>
            <TextField
              label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
            />
          </Box>


          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          
          <TextField
            fullWidth
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

        
          <TextField
            select
            fullWidth
            label="Choose a Plan"
            name="subscriptionId"
            value={formData.subscriptionId}
            onChange={handleChange}
            sx={{ mb: 2 }}
          >
            <MenuItem value="">
              <em>Escolha um plano</em>
            </MenuItem>
            {subscriptions.map((sub) => (
              <MenuItem key={sub.id} value={sub.id}>
                {sub.name} {sub.price ? `- $${sub.price}` : ""}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            label="Country"
            value={countryCode}
            onChange={handleCountryChange}
            sx={{ mb: 2 }}
          >
            {countries.map((country) => (
              <MenuItem key={country.isoCode} value={country.isoCode}>
                {country.name}
              </MenuItem>
            ))}
          </TextField>

     
          <TextField
            select
            fullWidth
            label="State"
            value={stateCode}
            onChange={handleStateChange}
            sx={{ mb: 2 }}
            disabled={!countryCode}
          >
            {states.map((state) => (
              <MenuItem key={state.isoCode} value={state.isoCode}>
                {state.name}
              </MenuItem>
            ))}
          </TextField>

     
          <TextField
            select
            fullWidth
            label="City"
            value={formData.location}
            onChange={handleCityChange}
            sx={{ mb: 2 }}
            disabled={!stateCode}
          >
            {cities.map((city) => (
              <MenuItem key={city.name} value={city.name}>
                {city.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="About Me"
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
            sx={{ mb: 2 }}
          />


          <Box display="flex" gap={2} mb={2}>
            <FormControlLabel
              sx={{ color: "#000" }}
              control={
                <Checkbox
                  name="value1"
                  checked={formData.value1}
                  onChange={handleCheckboxChange}
                />
              }
              label="Value 1"
            />
            <FormControlLabel
              sx={{ color: "#000" }}
              control={
                <Checkbox
                  name="value2"
                  checked={formData.value2}
                  onChange={handleCheckboxChange}
                />
              }
              label="Value 2"
            />
          </Box>

         
          <Box display="flex" justifyContent="flex-start" mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{
                textTransform: "none",
                width: "140px",
                height: "50px",
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              {loading ? "Enviando..." : "Submit"}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
