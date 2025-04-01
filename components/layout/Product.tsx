import { z } from "zod";

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const user = {
  firstName: "John",
  lastName: "Nurhansyah",
};

console.log(userSchema.safeParse(user));
const Product = () => {
  return <div>Product</div>;
};

export default Product;
