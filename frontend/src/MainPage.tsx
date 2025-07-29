import { Container, Typography, CircularProgress, Box, Button  } from "@mui/material";
import { useEffect, useState } from "react";
import { getSubscriptions } from "./API/api";
import "./App.css";
import Header from "./components/header";
import { useNavigate } from "react-router-dom";
import Helper from "./components/helper";
import Image17 from "./images/Image17.png";
import Footer from "./components/footer";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import payImage from "./images/pay.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language'; 

type Subscription = {
 id: string;
  name: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
};



export default function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    getSubscriptions()
      .then((data) => setSubscriptions(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
<Typography
  sx={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: 60,
    fontWeight: "medium",
    color: "#000",
    margin: 8,
    paddingTop: "40px",   
  }}
>
  Flexible plans and pricing to <br /> grow your apps and games
</Typography>

  <Box
  sx={{
    display: "flex",
    maxWidth:"1310px",
    margin: "0 auto",
    height: 110,
    border: "2px solid #7856FF",
    backgroundColor: "#EEE8FF",
    flexDirection: "column",
    justifyContent: "flex-start", 
    alignItems: "flex-start",    
    padding: "16px 24px",         
    color: "#33475B",
    fontFamily: "'Inter', sans-serif",
  }}
>
  <Typography
    sx={{ fontWeight: 600, fontSize: 18 }} 
  >
    Save up to 40% off Starter
  </Typography>
<Typography
  sx={{ 
    fontSize: 14,  
    textAlign: "left", 
    fontWeight: 400,
    marginTop: 1,
    lineHeight: 2.0,
    color: "#33475B",
    fontFamily: "'Inter', sans-serif",
  }}
>
  Smarter tools, lower price. Get Starter now: $9/mo (was $15) billed annually, or $15/mo (was $20) billed monthly. New customers only. This offer has no<br />
  set end date, and may be discontinued at any time. Act soon to secure these savings.
</Typography>
</Box>

    <Box
  sx={{
     width: "96%",
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center", 
    padding: "0 24px",
    color: "#33475B",
    fontFamily: "'Inter', sans-serif",
    marginTop: 3,
  }}
>
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
  <img
    src={Image17}
    alt="image 17"
    style={{
      height: "25px",
      objectFit: "contain",
    }}
  />
  <Typography
    sx={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: "bold",
      fontSize: 34,
      color: "#33475B",
      width: "fit-content !important",   
      maxWidth: "100% !important",      
      overflowWrap: "break-word",       
    }}
  >
    Organic Growth
  </Typography>
</Box>


  {/* Texto abaixo */}
  <Typography
    sx={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: 14,
      color: "#33475B",
      marginTop: 1,
      textAlign: "center", // opcional para centralizar o texto
    }}
  >
    Designed to  <strong>build trust</strong> and demonstrate quick wins in organic growth
  </Typography>
</Box>

<Box
  sx={{
    padding: 2,
    borderRadius: 2,
    display: 'grid',
    gridTemplateColumns: `repeat(${subscriptions.length}, 1fr)`,
    gap: 2,
    color: '#000',
  }}
>
  {loading ? (
    <Box
            sx={{
              gridColumn: '1 / -1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        ) : subscriptions.length > 0 ? (
          subscriptions.map((sub) => (
            <Box
              key={sub.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: 1,
                backgroundColor: '#fafafa',
              }}
            >
              <Typography sx={{ fontWeight: 'bold', mb: 1 }}>{sub.name}</Typography>
              <Typography sx={{ textAlign: 'center' }}>{sub.description}</Typography>
              <Typography sx={{ mb: 1 }}>{`$${sub.price} / month`}</Typography>

              <img
                src={payImage}
                alt="Pay"
                style={{
                  width: '190px',
                  marginBottom: '80px',
                  marginTop: '100px',
                  visibility: Number(sub.price) === 0 ? 'hidden' : 'visible',
                }}
              />

              <Box
                sx={{
                  visibility: Number(sub.price) === 0 ? 'hidden' : 'visible',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#000000',
                    lineHeight: 1.2,
                  }}
                >
                  Includes 1,000
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    textAlign: 'left',
                    fontSize: 14,
                    color: '#0091AE',
                    lineHeight: 1.2,
                    marginBottom: 1,
                  }}
                >
                  marketing contacts
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF7A59',
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#e56b4e',
                  },
                  mb: 1,
                }}
                onClick={() => navigate("/form", { state: { subscriptionId: sub.id } })}
              >
                {Number(sub.price) === 0 ? 'Get started free' : 'Buy now'}
              </Button>

              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'start',
                  fontSize: 15,
                  color: '#33475B',
                  alignSelf: 'flex-start',
                }}
              >
                Includes
              </Typography>

              {sub.features && sub.features.length > 0 && (
                <Box sx={{ marginTop: 1, width: '100%', textAlign: 'left' }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 16, marginBottom: 0.5 }}>
                    Features:
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#555' }}>
                    {sub.features.map((feature, index) => (
                      <li key={index} style={{ fontSize: 14, lineHeight: 1.4 }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
          ))
        ) : (
          <Typography sx={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            No subscriptions found.
          </Typography>
        )}
      </Box>

      <Button
        sx={{
          backgroundColor: "#B094FF",
          borderRadius: "9999px",
          color: "#fff",
          textTransform: "none",
          padding: "8px 24px",
          fontWeight: "600",
          marginTop: 10,
          marginBottom: 24,
          "&:hover": {
            backgroundColor: "#9A7EEF",
          },
        }}
        onClick={() => navigate("/form")}  
      >
        Get Started
      </Button>



 <Box
      sx={{
        backgroundColor: "#1B0C3D",
        borderBottomRightRadius: "250px", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
  
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: { xs: "32px", md: "48px" },
          fontWeight: 600,
          lineHeight: 1.2,
          color: "#fff",
        }}
      >
        Try <span style={{ color: "#A78BFA" }}>ASOagent</span> with your
        <br /> apps for free
      </Typography>

   
      <Button
        sx={{
          marginTop: 4,
          fontSize: "16px",
          color: "#a78bfa",
          textTransform: "none",
        }}
        endIcon={<span>›</span>}
      >
        Start for free
      </Button>
    </Box>
   <Typography
  sx={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: 60,
    fontWeight: "light",
    color: "#000",
    margin: 10,  
  }}
>
  Our culture and values
</Typography>

<Box
  sx={{
    display: "flex",
    flexDirection: "row",
    gap: 2, 
    justifyContent: "center",
    paddingBottom: "200px",
  }}
>
  
  <Box
    sx={{
      width: 424,
      height: 290,
      backgroundColor: "#F0F3FF",
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: "20px",
      paddingLeft: "40px",
    }}
  >
    <img
      src={card1}
      alt="Card 1"
      style={{ width: 70, height: 70, objectFit: "cover", marginBottom: 16 }}
    />
    <Typography
      sx={{
        color: "#323338",
        fontSize: "28px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
      }}
    >
      User-Centricity
    </Typography>
  
    <Typography
      sx={{
        color: "#323338",
        fontSize: "18px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        visibility: "hidden",
        textAlign: "left", 
      }}
    >
      Placeholder
    </Typography>
  </Box>

  
  <Box
    sx={{
      width: 424,
      height: 290,
      backgroundColor: "#F0F3FF",
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: "20px",
      paddingLeft: "40px",
    }}
  >
    <img
      src={card2}
      alt="Card 2"
      style={{ width: 70, height: 70, objectFit: "cover", marginBottom: 16 }}
    />
    <Typography
      sx={{
        color: "#323338",
        fontSize: "28px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
      }}
    >
      Transparency
    </Typography>
    <Typography
      sx={{
        color: "#323338",
        fontSize: "18px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        textAlign: "left", 
      }}
    >
      Honest communication, clear processes, and openness guide everything we do.
    </Typography>
  </Box>

 
  <Box
    sx={{
      width: 424,
      height: 290,
      backgroundColor: "#F0F3FF",
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: "20px",
      paddingLeft: "40px",
    }}
  >
    <img
      src={card3}
      alt="Card 3"
      style={{ width: 70, height: 70, objectFit: "cover", marginBottom: 16 }}
    />
    <Typography
      sx={{
        color: "#323338",
        fontSize: "28px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
      }}
    >
      Innovation
    </Typography>
    <Typography
      sx={{
        color: "#323338",
        fontSize: "18px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        textAlign: "left", 
      }}
    >
      We embrace curiosity and continuously seek smarter, data-driven ways to solve problems.
    </Typography>
  </Box>
</Box>



<Typography
  sx={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: 60,
    fontWeight: "bold",
    color: "#000",
    margin: 2,
  }}
>
  Let´s get Social
</Typography>
<Box
  sx={{
    display: "flex",
    gap: 2,
    marginTop: "2px",
    justifyContent: "center",  
    alignItems: "center",
     marginBottom: "200px", 
  }}
>
  {[
    { Icon: LinkedInIcon, label: "LinkedIn" },
    { Icon: FacebookIcon, label: "Facebook" },
    { Icon: TwitterIcon, label: "Twitter" },
    { Icon: YouTubeIcon, label: "YouTube" },
    { Icon: InstagramIcon, label: "Instagram" },
    { Icon: LanguageIcon, label: "Internet" },
  ].map(({ Icon, label }) => (
    <Box
      key={label}
      sx={{
        width: 35,
        height: 35,
        borderRadius: "50%",
        backgroundColor: "#000", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginbottom: "200px",
      }}
      aria-label={label}
      title={label}
    >
      <Icon sx={{ fontSize: 20, color: "#fff" }} />
    </Box>
  ))}
</Box>

<Helper />
<Footer />
    </>
  );
}