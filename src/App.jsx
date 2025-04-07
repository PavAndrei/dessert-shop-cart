import { DataProvider } from "./context/DataContext";

import { Title } from "./components/coomon/Title/Title";
import { Layout } from "./components/markup/Layout/Layout";
import { Main } from "./components/markup/Main/Main";
import { SideBar } from "./components/markup/SideBar/SideBar";
import { MenuList } from "./components/menu/MenuList/MenuList";
import { CartContainer } from "./components/cart/CartContainer/CartContainer";
import { Modal } from "./components/coomon/Modal/Modal";

function App() {
  return (
    <DataProvider>
      <Layout>
        <Main>
          <Title>Desserts</Title>
          <MenuList />
        </Main>
        <SideBar>
          <CartContainer />
        </SideBar>
        <Modal />
      </Layout>
    </DataProvider>
  );
}

export default App;
