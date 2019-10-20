import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FacetContainer from "../components/FacetContainer"
import ProductGrid from "../components/ProductGrid"

class ProductListPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Homepage" />
        <main className="text-gray-900 antialiased bg-gray-300 w-full">
          <div className="xl:w-10/12 mx-2 xl:mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-3/12 bg-white">
              <FacetContainer />
            </div>
            <div className="lg:w-9/12">
              <ProductGrid />
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default ProductListPage
