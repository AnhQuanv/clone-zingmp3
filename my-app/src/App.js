import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";

function App() {

  const { test } = useSelector(state => state.app);
  console.log(test);

  return (

    <>
      <div>
        appp
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>

  );
}

export default App;
