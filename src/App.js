import React from "react";
import Headers from "./components/common/Headers";
import Footers from "./components/common/Footers";
import { Layout} from "antd";
import "./App.css"
import Home from "./components/Home/Home";
const {Header, Content, Footer} = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
    <Header>
      <Headers/>
    </Header>
    <Content>
      <Home/>
    </Content>
    <Footer>
<Footers/>
    </Footer>
    </Layout>
  );
};

export default App;
