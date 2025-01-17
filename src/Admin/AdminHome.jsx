import { Box, Grid, Typography, useTheme } from "@mui/material";

function AdminHome() {
  const theme = useTheme();
  return (
    <Box sx={{}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              padding: 3,
              borderRadius: 2,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">125</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: theme.palette.success.main,
              padding: 3,
              borderRadius: 2,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="h4">50</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: theme.palette.warning.main,
              padding: 3,
              borderRadius: 2,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">New Messages</Typography>
            <Typography variant="h4">32</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: theme.palette.error.main,
              padding: 3,
              borderRadius: 2,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Pending Reviews</Typography>
            <Typography variant="h4">14</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Additional Sections */}
      <Grid container spacing={3} sx={{ marginTop: theme.spacing(3) }}>
        <Grid item xs={12}>
          <Box
            sx={{
              padding: 3,
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h5">Recent Activity</Typography>
            <Box sx={{ marginTop: 2 }}>
              {/* Add more dashboard content here */}
              <Typography variant="body1">
                Activity data will go here...
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminHome;
