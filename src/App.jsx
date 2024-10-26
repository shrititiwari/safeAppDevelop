import CreateDeal from "./components/buyer/CreateDeal";
import Deal from "./components/buyer/Buyer";
import Pending from "./components/buyer/Pending";
import Setup from "./components/buyer/Setup";
import Login from "./components/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Seller from "./components/seller/Seller";
import ViewDeal from "./components/seller/ViewDeal";
// import SellerPending from "./components/buyer/SellerPending";
import ReceivedConfirmation from "./components/buyer/ReceivedConfirmation";
import Closed from "./components/buyer/Closed";
import DisputeResolution from "./components/buyer/DisputeResolution";
import DigitalVerification from "./components/seller/DigitalVerification";
import DealConfirmed from "./components/seller/DealConfirmed";
import Reject from "./components/seller/Reject";
import Transaction from "./components/seller/Transaction";
import BuyerTransaction from "./components/buyer/BuyerTransaction";

// Dummy components for each button route
// const SellerComponent = () => <div>Seller Component Content</div>;
// const CreateComponent = () => <div>Create Component Content</div>;

const PendingBuyer = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const PendingSeller = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/buyer" element={<Deal />}>
          <Route path="pending" element={<PendingSeller />}>
            <Route index element={<CreateDeal />} />
            <Route path="transaction" element={<BuyerTransaction />} />
            <Route path="seller-pending" element={<Pending />} />
            <Route
              path="received-confirmation"
              element={<ReceivedConfirmation />}
            />
            <Route path="dispute-resolution" element={<DisputeResolution />} />
            <Route
              path="digital-verification"
              element={<DigitalVerification />}
            />
          </Route>
          <Route path="Deal-setup" element={<Setup />} />
          <Route path="Closed" element={<Closed />} />
        </Route>
        <Route path="/seller" element={<Seller />}>
          <Route path="pending" element={<PendingBuyer />}>
            <Route index element={<ViewDeal />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="Deal-Confirmed" element={<DealConfirmed />} />
            <Route path="reject" element={<Reject />} />
            <Route
              path="digital-verification"
              element={<DigitalVerification />}
            />
            <Route path="dispute-resolution" element={<DisputeResolution />} />
          </Route>
          {/* <Route path="view-deal" element={<ViewDeal />} /> */}
          <Route path="Closed" element={<Closed />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
