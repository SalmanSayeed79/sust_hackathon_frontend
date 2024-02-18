import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import ProductionPage from "./Pages/ProductionPage";
import CreateCategory from "./Pages/Actions/CreateCategory";
import CreateCommon from "./Pages/Actions/CreateCommon";
import Tasks from "./Pages/Actions/Tasks";
import Track from "./Pages/Track";
import ShopProfile from "./Pages/ShopProfile";
import ShopHome from "./Pages/ShopHome";
import ProductDetails from "./Pages/ProductDetails";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import { IDContextProvider } from "./Hooks/userContext";
import { AuthContextProvider } from "./Hooks/AuthContext";
import TrainingHome from "./Pages/Training/TrainingHome";
import SalesTraining from "./Pages/Training/SalesTraining";
import CartContextProvider from "./Hooks/CartContextProvider";

function App() {
  return (
    <IDContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/chatbot" element={<ProductionPage />} />
              <Route
                path="/options"
                element={
                  <ProtectedRoute>
                    <Tasks />
                  </ProtectedRoute>
                }
              />
              <Route path="/track" element={<Track />} />
              <Route
                path="/category"
                element={
                  <ProtectedRoute>
                    <CreateCategory />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/listing"
                element={
                  <ProtectedRoute>
                    <CreateCommon />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/shop-profile"
                element={
                  <ProtectedRoute>
                    <ShopProfile />
                  </ProtectedRoute>
                }
              />
              <Route path="/shop-home/:id" element={<ShopHome />} />
              <Route path="/listing/:id" element={<ProductDetails />} />

              <Route
                path="/train-home"
                element={
                  <ProtectedRoute>
                    <TrainingHome />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/train-sales"
                element={
                  <ProtectedRoute>
                    <SalesTraining />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>
    </IDContextProvider>
  );
}

export default App;
