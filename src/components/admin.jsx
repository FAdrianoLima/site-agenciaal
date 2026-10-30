import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import LinearProgress from "@mui/material/LinearProgress";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import SellIcon from "@mui/icons-material/Sell";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { useRouter } from "next/router";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const drawerWidth = 260;
const collapsedWidth = 76;

const COLORS = {
  black: "#050505",
  white: "#ffffff",
  pink: "#d82087",
  lime: "#d8ff3e",
  background: "#f4f0e8",
  gray: "#777777",
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: COLORS.white,
  color: COLORS.black,
  boxShadow: "none",
  borderBottom: `3px solid ${COLORS.black}`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: collapsedWidth,
    width: `calc(100% - ${collapsedWidth}px)`,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: open ? drawerWidth : collapsedWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  "& .MuiDrawer-paper": {
    width: open ? drawerWidth : collapsedWidth,
    boxSizing: "border-box",
    overflowX: "hidden",
    backgroundColor: COLORS.white,
    color: COLORS.black,
    borderRight: `3px solid ${COLORS.black}`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.pink,
      contrastText: COLORS.white,
    },
    secondary: {
      main: COLORS.lime,
      contrastText: COLORS.black,
    },
    background: {
      default: COLORS.background,
      paper: COLORS.white,
    },
    text: {
      primary: COLORS.black,
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
    },
    h4: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
    },
    h5: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
    },
    h6: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
    },
    button: {
      fontWeight: 800,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: `2px solid ${COLORS.black}`,
          boxShadow: `4px 4px 0 ${COLORS.black}`,
          transition: "all 0.15s ease",
          "&:hover": {
            boxShadow: "1px 1px 0 #050505",
            transform: "translate(3px, 3px)",
          },
        },
      },
    },
  },
});

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Artigos",
    href: "/admin/artigos",
    icon: ArticleIcon,
  },
  {
    label: "Categorias",
    href: "/admin/categorias",
    icon: CategoryIcon,
  },
  {
    label: "Palavras-chave",
    href: "/admin/palavras-chave",
    icon: SellIcon,
  },
];

export default function Admin({ children, showLoader = false }) {
  const [open, setOpen] = React.useState(true);
  const [usuario, setUsuario] = React.useState(null);
  const [authLoading, setAuthLoading] = React.useState(true);
  const [loader, setLoader] = React.useState(showLoader);

  const router = useRouter();

  // Verifica diretamente a sessão do Firebase Authentication.
  React.useEffect(() => {
    if (!router.isReady) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        setAuthLoading(false);
      } else {
        setUsuario(null);
        setAuthLoading(false);
        router.replace("/admin");
      }
    });

    return () => unsubscribe();
  }, [router.isReady]);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setOpen(false);
    }
  }, []);

  React.useEffect(() => {
    setLoader(showLoader);
  }, [showLoader]);

  const sair = async () => {
    try {
      await signOut(auth);
      setUsuario(null);
      await router.replace("/admin");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  const paginaAtual = (href) => {
    if (router.pathname === href) return true;
    return router.pathname.startsWith(`${href}/`);
  };

  if (authLoading || !usuario) {
    return (
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />

        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: COLORS.background,
            p: 3,
          }}
        >
          <Box
            sx={{
              width: 280,
              border: `3px solid ${COLORS.black}`,
              bgcolor: COLORS.white,
              p: 3,
              boxShadow: `6px 6px 0 ${COLORS.black}`,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Syne",
                fontWeight: 800,
                fontSize: 24,
                mb: 2,
              }}
            >
              Agência AL<span style={{ color: COLORS.pink }}>.</span>
            </Typography>

            <LinearProgress
              sx={{
                height: 8,
                bgcolor: "#eeeeee",
                "& .MuiLinearProgress-bar": {
                  bgcolor: COLORS.pink,
                },
              }}
            />

            <Typography sx={{ mt: 2, fontSize: 13, fontWeight: 700 }}>
              Verificando sessão...
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />

      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              minHeight: "68px !important",
              px: { xs: 2, sm: 3 },
            }}
          >
            <IconButton
              edge="start"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              sx={{
                color: COLORS.black,
                mr: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              sx={{
                flexGrow: 1,
                fontFamily: "Syne",
                fontWeight: 800,
                fontSize: { xs: 14, sm: 19 },
                letterSpacing: "-0.5px",
              }}
            >
              Agência AL<span style={{ color: COLORS.pink }}>.</span>
              <Box component="span" sx={{ color: COLORS.pink }}>
                /
              </Box>{" "}
              BLOG CMS
            </Typography>

            <Typography
              sx={{
                mr: 2,
                display: { xs: "none", sm: "block" },
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {usuario.email}
            </Typography>

            <Tooltip title="Sair">
              <IconButton
                onClick={sair}
                sx={{
                  color: COLORS.black,
                  border: `2px solid ${COLORS.black}`,
                  boxShadow: `3px 3px 0 ${COLORS.black}`,
                  borderRadius: 0,
                  "&:hover": {
                    bgcolor: COLORS.pink,
                    color: COLORS.white,
                  },
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: open ? "space-between" : "center",
              px: 1.5,
              minHeight: "68px !important",
            }}
          >
            {open && (
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: "Syne",
                    fontWeight: 800,
                    fontSize: 23,
                    letterSpacing: "-1.5px",
                  }}
                >
                  Agência AL<span style={{ color: COLORS.pink }}>.</span>
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: 2,
                  }}
                >
                  BLOG MANAGER
                </Typography>
              </Box>
            )}

            <IconButton
              aria-label={open ? "Recolher menu" : "Expandir menu"}
              onClick={() => setOpen(!open)}
              size="small"
              sx={{
                color: COLORS.black,
                border: `2px solid ${COLORS.black}`,
              }}
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>

          <Divider sx={{ borderColor: COLORS.black, borderBottomWidth: 2 }} />

          <Box sx={{ px: 1.5, pt: 3, pb: 1 }}>
            {open && (
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: COLORS.gray,
                }}
              >
                GERENCIAMENTO
              </Typography>
            )}
          </Box>

          <List sx={{ px: 1.2, py: 0 }}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const ativo = paginaAtual(item.href);

              return (
                <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    selected={ativo}
                    sx={{
                      minHeight: 48,
                      px: 1.5,
                      justifyContent: open ? "initial" : "center",
                      border: `2px solid ${ativo ? COLORS.black : "transparent"}`,
                      bgcolor: ativo ? COLORS.lime : "transparent",
                      boxShadow: ativo ? `4px 4px 0 ${COLORS.black}` : "none",
                      "&.Mui-selected": {
                        bgcolor: COLORS.lime,
                      },
                      "&.Mui-selected:hover": {
                        bgcolor: COLORS.lime,
                      },
                      "&:hover": {
                        bgcolor: ativo ? COLORS.lime : "#f0f0f0",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1.5 : 0,
                        justifyContent: "center",
                        color: COLORS.black,
                      }}
                    >
                      <Icon />
                    </ListItemIcon>

                    {open && (
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 13,
                          fontWeight: ativo ? 800 : 600,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{ flexGrow: 1 }} />

          <Divider sx={{ borderColor: COLORS.black, borderBottomWidth: 2 }} />

          <Box sx={{ p: 2 }}>
            {open ? (
              <>
                <Box
                  sx={{
                    bgcolor: COLORS.pink,
                    color: COLORS.white,
                    border: `2px solid ${COLORS.black}`,
                    p: 1.5,
                    boxShadow: `4px 4px 0 ${COLORS.black}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Syne",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    BLOG CMS
                  </Typography>

                  <Typography sx={{ fontSize: 10, mt: 0.5 }}>
                    Gerenciador de conteúdo
                  </Typography>
                </Box>
              </>
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Syne",
                  fontWeight: 800,
                  color: COLORS.pink,
                }}
              >
                NF
              </Typography>
            )}
          </Box>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minWidth: 0,
            minHeight: "100vh",
            overflow: "auto",
            bgcolor: COLORS.background,
          }}
        >
          <Toolbar sx={{ minHeight: "68px !important" }} />

          {loader && (
            <LinearProgress
              sx={{
                height: 5,
                bgcolor: "#eeeeee",
                "& .MuiLinearProgress-bar": {
                  bgcolor: COLORS.pink,
                },
              }}
            />
          )}

          <Container
            maxWidth="xl"
            sx={{
              mt: { xs: 2, md: 4 },
              mb: 4,
              px: { xs: 2, md: 4 },
            }}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
