import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

function Services({ services }) {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                textAlign: "center",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>

                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
