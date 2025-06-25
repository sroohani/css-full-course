import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout";
import Text, {
  FontWeight,
  TextDecoration,
  FontStyle,
  TextTransform,
  ListStyle,
  TextAlign,
  LineHeight,
  LetterSpacing,
  FontSize,
} from "./pages/Text/Text";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="text" element={<Text />}>
        <Route path="font-weight" element={<FontWeight />} />
        <Route path="text-decoration" element={<TextDecoration />} />
        <Route path="font-style" element={<FontStyle />} />
        <Route path="text-transform" element={<TextTransform />} />
        <Route path="list-style" element={<ListStyle />} />
        <Route path="text-align" element={<TextAlign />} />
        <Route path="line-height" element={<LineHeight />} />
        <Route path="letter-spacing" element={<LetterSpacing />} />
        <Route path="font-size" element={<FontSize />} />
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
