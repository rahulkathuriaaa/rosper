import { NextRequest, NextResponse } from "next/server";
import shopify from "shopify-api-node";
export async function POST(req, res) {
  // const { apiKey } = req.body;
  const generateUniqueCode = () => {
    // Function to generate a unique code
    // Replace this with your own logic to generate a unique code
    return "DISCOUNT20";
  };
  const reqBody = await req.json();
  console.log("request body", reqBody);
  try {
    // Create a new Shopify API instance with the provided API key
    const shop = new shopify({
      shopName: "refertest0.myshopify.com",
      accessToken: "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",
    });

    // Define the discount code properties
    const discountCodeData = {
      code: reqBody.percentage,
      value: "20",
      value_type: "percentage",
      usage_limit: null,
      starts_at: new Date(),
      ends_at: null,
      applies_to_all_products: true,
      applies_to_resource: "order",
      duration: "forever",
    };
    const priceRuleData = {
      title: "SummerSale",
      target_type: "line_item",
      target_selection: "all",
      allocation_method: "across",
      value_type: "percentage",
      value: "-20",
      customer_selection: "all",
      starts_at: new Date(),
    };

    // const res0 = await shop.product.list({ limit: 5 });
    // console.log(res0);

    // const response1 = await shop.priceRule.create(priceRuleData);
    // console.log(response1);
    // const priceRuleId = response.id;

    const response = await shop.discountCode.create(
      "1268898398434",
      discountCodeData
    );
    console.log(response);
    res.status(200).json({ discountCode: response.discount_code });
  } catch (error) {
    console.error("Error creating discount code:", error.response.body);
    res
      .status(500)
      .json({ error: "An error occurred while creating the discount code." });
  }
}
