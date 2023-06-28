import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import PrivateRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));
const DeliveryPage = lazy(() => import('./pages/DeliveryPage/DeliveryPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage/PaymentPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage/CompanyPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const PageNotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const AddProduct = lazy(() => import('./pages/AddProductPage/AddProductPage')); 
const AddCategory = lazy(() => import('./pages/AddCategoryPage/AddCategoryPage'));
const SubcategoryPage = lazy(() => import('./pages/SubcategoryPage/SubcategoryPage'));
const AddSubcategory = lazy(() => import('./pages/AddSubcategoryPage/AddSubcategoryPage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));

const UserRoutes = () => {
  return (
    <div>
      <SharedLayout />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/delivery" element={<DeliveryPage/>}></Route>
          <Route path="/payment" element={<PaymentPage/>}></Route>
          <Route path="/company" element={<CompanyPage/>} ></Route>
          <Route path="/contacts" element={<ContactsPage/>} ></Route>
          <Route path="/catalog" element={<CategoryPage/>}></Route>
          <Route path='/products' Component={SearchPage}></Route>
          <Route path='/catalog/:category' Component={SubcategoryPage}></Route>
          <Route path='/catalog/:category/:category' Component={ProductPage}></Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/addcategory" element={<AddCategory/>}/>
            <Route path="/addsubcategory" element={<AddSubcategory/>}/>
          </Route>

          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserRoutes;
