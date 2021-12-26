import React from "react";
import { Layout} from "antd";
import Header from "../components/common/Headers";
const { Content, Footer } = Layout;

const LayoutPage = () => {
  return (
    <>
      <Layout className="layout">
     <Header/>
        <Content style={{ padding: "0 50px" }}>
         
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default LayoutPage;
