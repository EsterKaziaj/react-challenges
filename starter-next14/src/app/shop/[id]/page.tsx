// types
import { Product } from "@/app/types";
// components
import PageTitle from "@/components/PageTitle";
import RelatedProducts from "@/components/RelatedProducts";

async function getProductDetailData(id: string) {
  try {
    const res = await fetch(`http://localhost:5001/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return (await res.json()) as Product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ShopDetail({
  params,
}: {
  params: { id: string };
}) {
  const productData = await getProductDetailData(params.id);

  if (!productData) {
    return (
      <div className="container text-center p-5">
        <h2>Product Not Found</h2>
        <p>The requested product could not be found.</p>
      </div>
    );
  }

  return (
    <>
      <PageTitle title={`Store - ${productData.title}`} />

      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            {/* Product Image */}
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="slick3 gallery-lb">
                    <div className="item-slick3">
                      <div className="wrap-pic-w pos-relative">
                        <img
                          src={productData.img || "/images/default.jpg"}
                          alt="IMG-PRODUCT"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {productData.title}
                </h4>
                <span className="mtext-106 cl2">
                  ${parseFloat(productData.price).toFixed(2)}
                </span>
                <p className="stext-102 cl3 p-t-23">
                  {productData.description}
                </p>

                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Google Plus"
                  >
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bor10 m-t-50 p-t-43 p-b-40">
            <div className="tab01">
              <div className="tab-content p-t-43">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="how-pos2 p-lr-15-md">
                    <p className="stext-102 cl6">{productData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
          <span className="stext-107 cl6 p-lr-25">
            Free shipping - only today
          </span>
        </div>
      </section>

      <RelatedProducts products={[productData]} />
    </>
  );
}
