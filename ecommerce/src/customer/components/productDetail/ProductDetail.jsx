import { StarIcon } from "@heroicons/react/20/solid";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../data/mens/men_kurta";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import { useNavigate } from "react-router";

// Dummy product data
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  sizes: [
    { id: 1, name: "S", inStock: true },
    { id: 2, name: "M", inStock: true },
    { id: 3, name: "L", inStock: true },
    { id: 4, name: "XL", inStock: true },
  ],
  description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.",
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    "The 6-Pack includes two black, two white, and two heather gray Basic Tees.",
};

const reviews = { href: "#", average: 4, totalCount: 117 };

export default function ProductDetail() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">

          {/* Images */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((image, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">

            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Basic Tee 6-Pack
              </h1>
              <p className="text-sm opacity-60 pt-1">
                Premium cotton tees for everyday comfort.
              </p>
            </div>

            {/* Price */}
            <div className="mt-6 flex space-x-5 text-lg text-gray-900">
              <p className="font-semibold">$199</p>
              <p className="opacity-50 line-through">$211</p>
              <p className="text-green-700 font-semibold">5% OFF</p>
            </div>

            {/* Rating */}
            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <Rating value={4.5} readOnly precision={0.5} />
                <p className="opacity-50 text-sm">5565 ratings</p>
                <p className="text-indigo-600 hover:text-indigo-500 text-sm">
                  56789 reviews
                </p>
              </div>
            </div>

            {/* Sizes */}
            <form className="mt-10">
              <h3 className="text-sm font-medium">Size</h3>

              <div className="grid grid-cols-4 gap-3 mt-4">
                {product.sizes.map((size) => (
                  <label
                    key={size.id}
                    className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3"
                  >
                    <input
                      name="size"
                      type="radio"
                      disabled={!size.inStock}
                      className="absolute inset-0 opacity-0"
                    />
                    <span className="text-sm font-medium uppercase">
                      {size.name}
                    </span>
                  </label>
                ))}
              </div>

              {/* Add to cart */}
              <Button
                onClick={handleAddToCart}
                variant="contained"
                sx={{
                  mt: "20px",
                  px: "2rem",
                  py: "1rem",
                  bgcolor: "#9155fd",
                }}
              >
                ADD TO CART
              </Button>
            </form>

            {/* Description */}
            <div className="py-10">
              <h3 className="text-sm font-medium">Description</h3>
              <p className="mt-4 text-gray-900">{product.description}</p>

              <h3 className="mt-10 text-sm font-medium">Highlights</h3>
              <ul className="list-disc space-y-2 pl-4 mt-2 text-sm">
                {product.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <h3 className="mt-10 text-sm font-medium">Details</h3>
              <p className="mt-4 text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section>
          <h1 className="font-semibold text-lg pb-4">Recent Reviews & Ratings</h1>

          <div className="border p-5">
            <Grid container spacing={4}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1, 1].map((item, i) => (
                    <ProductReviewCard key={i} />
                  ))}
                </div>
              </Grid>

              {/* Rating Breakdown */}
              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>

                <div className="flex items-center space-x-3">
                  <Rating value={4.6} readOnly precision={0.5} />
                  <p className="opacity-60">42807 Ratings</p>
                </div>

                {[40, 30, 25, 21, 10].map((value, i) => (
                  <Box key={i} mt={3}>
                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>{["Excellent", "Very Good", "Good", "Average", "Poor"][i]}</p>
                      </Grid>

                      <Grid item xs={7}>
                        <LinearProgress
                          variant="determinate"
                          value={value}
                          sx={{ height: 7, borderRadius: 4, bgcolor: "#d0d0d0" }}
                        />
                      </Grid>

                      <Grid item xs={2}>
                        <p className="opacity-50">19259</p>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </div>
        </section>

        {/* Similar Products */}
        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold">Similar Products</h1>
          <div className="flex flex-wrap space-y-5">
            {mens_kurta.map((item, i) => (
              <HomeSectionCard key={i} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
