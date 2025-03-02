import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Stores, StoreWrap } from "@store";
import { IAFooter } from "@components/commons";

function App() {
  return (
    <StoreWrap store={{ ...Stores }}>
      <BrowserRouter>
        <ToastContainer />
        <AppRoutes />
      </BrowserRouter>
      <IAFooter />
    </StoreWrap>
  );
}

export default App;
