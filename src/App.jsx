import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CategoryList } from "./pages/category-list";
import { CategoryProduct } from "./pages/category-product";
import { CreateProduct } from "./pages/create-product";
import { CategoryAll } from "./pages/category-all";
import { CreateNew } from "./pages/create-new";
import { CategoryDetail } from "./pages/category-detail";
// import { ProductCard } from "./components/product-card";
import { CreateCategory } from "./pages/create-category";
import { EditCategory } from "./pages/edit-category";
import { EditProduct } from "./pages/edit-product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="category-product/:id" element={<CategoryProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="edit-category/:id" element={<EditCategory />} />
          <Route path="category-all" element={<CategoryAll />} />
          <Route path="edit-product/:id" element={< EditProduct/>} />
          <Route path="category-detail/:id" element={<CategoryDetail/>}/>
          <Route path="create-new" element={<CreateNew />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
