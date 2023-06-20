import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import PrivateRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const DeliveryPage = lazy(() => import('./pages/DeliveryPage/DeliveryPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage/PaymentPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage/CompanyPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const PageNotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const EmaliPage = lazy(() => import('./pages/CatalogPage/EmaliPage/EmaliPage'));
const GruntovkiPage = lazy(() => import('./pages/CatalogPage/GruntovkiPage/GruntovkiPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const EmaliGruntovki = lazy(() => import('./pages/CatalogPage/Emali-GruntovkiPage/Emali-GruntovkiPage'));
const AddProduct = lazy(() => import('./pages/AddProductPage/AddProductPage')); 
const AddCategory = lazy(() => import('./pages/AddCategoryPage/AddCategoryPage')); 

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
          <Route path="/catalog" element={<CatalogPage/>}></Route>
          <Route path="/emali" element={<EmaliPage/>}></Route>
          <Route path="/gruntovki" element={<GruntovkiPage/>}></Route>
          <Route path="/emali-gruntovki-3v1" element={<EmaliGruntovki/>}></Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/addcategory" element={<AddCategory/>}/>
          </Route>

          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Suspense>
      {/* <Footer/> */}
    </div>
  );
};

export default UserRoutes;
