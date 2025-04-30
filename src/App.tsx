import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWaktu from "./ProductForm";
import User from "./User";
import InvitationWedding from "./Invitation";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route dengan ID dinamis */}
        <Route path="/" element={<MyWaktu />} />
        <Route path="/undangan/:name" element={<User />} />
        <Route
          path="/undangan/:name/myWedding"
          element={<InvitationWedding />}
        />
      </Routes>
    </Router>
    // <Routes>
    //   {/* Route untuk halaman utama */}
    //   <Route path="/" element={<MyWaktu />} />
    //   {/* Route untuk halaman About */}
    //   <Route path="/unganan/:id" element={<MyWaktu />} />
    //   {/* Route untuk menangani halaman yang tidak ditemukan */}
    // </Routes>
  );
};

export default App;
