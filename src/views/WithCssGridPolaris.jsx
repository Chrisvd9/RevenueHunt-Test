import React from "react";
import { Page, Layout, Button } from "@shopify/polaris";
import PolarisCard from "../components/PolarisCard";
import { Link } from "react-router-dom";
import BootStrapCard from "../components/BootStrapCard";
import QtyInput from "../components/QtyInput";
const WithCssGridPolaris = () => {
  return (
    <div className="maincontainer">
      <Link to={"/"}>
        <Button> {`<-- Back`} </Button>
      </Link>
      <Page fullWidth>
        <Layout>
          <Layout.Section variant="oneThird">
            <PolarisCard />
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <BootStrapCard />
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <QtyInput />
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
};

export default WithCssGridPolaris;
