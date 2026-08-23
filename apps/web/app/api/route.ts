import { settlePayment, facilitator } from "thirdweb/x402";
import { createThirdwebClient } from "thirdweb";
import { abstractTestnet } from "thirdweb/chains";

function getPaymentSetup() {
  const secretKey = process.env.THIRDWEB_SECRET_KEY;
  const serverWalletAddress = process.env.THIRDWEB_SERVER_WALLET_ADDRESS;

  if (!secretKey || !serverWalletAddress) {
    return null;
  }

  const client = createThirdwebClient({ secretKey });
  return {
    serverWalletAddress,
    facilitator: facilitator({
      client,
      serverWalletAddress,
    }),
  };
}

export async function GET(request: Request) {
  const setup = getPaymentSetup();

  if (!setup) {
    return Response.json(
      {
        error:
          "Missing THIRDWEB_SECRET_KEY or THIRDWEB_SERVER_WALLET_ADDRESS. Copy apps/web/.env.example to apps/web/.env.local and add your thirdweb project credentials, then restart the dev server.",
      },
      { status: 500 },
    );
  }

  const paymentData =
    request.headers.get("PAYMENT-SIGNATURE") ||
    request.headers.get("X-PAYMENT") ||
    request.headers.get("x-payment");

  const result = await settlePayment({
    resourceUrl: "http://localhost:3000/api",
    method: "GET",
    paymentData,
    payTo: setup.serverWalletAddress,
    network: abstractTestnet,
    price: {
      amount: "10000", // 0.01 USDC (6 decimals)
      asset: {
        address: "0xe4C7fBB0a626ed208021ccabA6Be1566905E2dFc",
        decimals: 6,
      },
    },
    facilitator: setup.facilitator,
  });

  if (result.status === 200) {
    return Response.json({ data: "premium content" });
  }

  return Response.json(result.responseBody, {
    status: result.status,
    headers: result.responseHeaders,
  });
}
