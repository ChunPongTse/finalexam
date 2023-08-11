import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/booklist";
import BookCreate from './components/bookcreate';
import './styles.css';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<BookList />} />
          <Route path="/create-book" element={<BookCreate />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
