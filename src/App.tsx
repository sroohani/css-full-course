import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout";
import Text from "./pages/Text/Text";
import FontWeight from "./pages/Text/FontWeight";
import TextDecoration from "./pages/Text/TextDecoration";
import FontStyle from "./pages/Text/FontStyle";
import TextTransform from "./pages/Text/TextTransform";
import ListStyle from "./pages/Text/ListStyle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="text" element={<Text />}>
        <Route path="font-weight" element={<FontWeight />} />
        <Route path="text-decoration" element={<TextDecoration />} />
        <Route path="font-style" element={<FontStyle />} />
        <Route path="text-transform" element={<TextTransform />} />
        <Route path="list-style" element={<ListStyle />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
