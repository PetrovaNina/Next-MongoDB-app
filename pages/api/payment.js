import { connectDB } from "../../utils/connectDB";

export default async function handler(req, res) {
  const { method, body } = req;
  const bodyObj = JSON.parse(body);
  const { db } = await connectDB();

  if (method === "POST") {
    try {
      const payment = await db
        .collection("payments")
        .insertOne(bodyObj)
        .then(({ insertedId }) => ({
          RequestId: insertedId.toString(),
          Amount: bodyObj.Amount,
        }));

      res.status(201).json(payment);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
