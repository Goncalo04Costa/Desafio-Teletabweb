import React from 'react';
import { Box, Typography, Link, Button, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#111', color: '#fff', px: 4, pt: 6, pb: 2 }}>
  
      <Box
        sx={{
          display: 'flex',
          gap: 6,
          width: '100%',
          alignItems: 'flex-start', 
        }}
      >
        {/* Why ASOagent */}
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>Why ASOagent</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Link href="#" color="inherit" display="block" underline="hover">Our approach</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Pricing</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Enterprise</Link>
          </Box>
        </Box>

        {/* About us */}
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>About us</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Link href="#" color="inherit" display="block" underline="hover">Our mission</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Our partners</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Contacts</Link>
          </Box>
        </Box>
      </Box>

      {/* Call to Actions */}
      <Box sx={{ mt: 4, display: 'flex', gap: 2, flexDirection: 'row-reverse' }}>
        <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>Start for Free</Button>
        <Button variant="contained" sx={{ bgcolor: '#2962ff' }}>Schedule a Demo</Button>
      </Box>

      <Divider sx={{ bgcolor: 'grey.800', my: 4 }} />

      {/* Bottom Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Social + Copy */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2">Follow us</Typography>
          <IconButton size="small" sx={{ color: '#bbb' }}><LinkedInIcon /></IconButton>
          <IconButton size="small" sx={{ color: '#bbb' }}><TwitterIcon /></IconButton>
          <IconButton size="small" sx={{ color: '#bbb' }}><YouTubeIcon /></IconButton>
        </Box>

        {/* Links */}
        <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, sm: 0 } }}>
          <Typography variant="body2">© 2025 Deep Labs</Typography>
          <Link href="#" color="inherit" underline="hover">Manage cookies</Link>
          <Link href="#" color="inherit" underline="hover">Legal</Link>
          <Link href="#" color="inherit" underline="hover">Privacy</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
