import {
  Card,
  ResourceList,
  Thumbnail,
  Text,
  Box,
  InlineStack,
  Button,
} from "@shopify/polaris";

const PolarisCard = () => {
  return (
    <Card actions={[{ content: "Manage" }]}>
      <Box>
        <Text tone="subdued" as="span">
          455 units available
        </Text>
      </Box>
      <Box style={{ marginBottom: "10px" }} title="Items">
        <ResourceList
          resourceName={{ singular: "product", plural: "products" }}
          items={[
            {
              id: "343",
              url: "#",
              name: "Black & orange scarf",
              sku: "9234194023",
              quantity: "254",
              media: (
                <Thumbnail
                  source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                  alt="Black orange scarf"
                />
              ),
            },
            {
              id: "258",
              url: "#",
              name: "Tucan scarf",
              sku: "9234194010",
              quantity: "201",
              media: (
                <Thumbnail
                  source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                  alt="Tucan scarf"
                />
              ),
            },
          ]}
          renderItem={(item) => {
            const { id, url, name, sku, media, quantity } = item;

            return (
              <ResourceList.Item
                id={id}
                url={url}
                media={media}
                accessibilityLabel={`View details for ${name}`}
              >
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {name}
                </Text>
                <div>SKU: {sku}</div>
                <div>{quantity} available</div>
              </ResourceList.Item>
            );
          }}
        />
      </Box>
      <InlineStack align="center">
        <Button>Buy items</Button>
      </InlineStack>
    </Card>
  );
};

export default PolarisCard;
