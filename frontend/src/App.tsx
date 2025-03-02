import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Stores, StoreWrap } from "@store";
import { Footer, Menu } from "@components/specifics";
import AppRoutes from "./routes";

function App() {
  return (
    <StoreWrap store={{ ...Stores }}>
      <BrowserRouter>
        <ToastContainer />
        <Menu>
          <AppRoutes />
        </Menu>
        <Footer />
      </BrowserRouter>
    </StoreWrap>
  );
}

export default App;
