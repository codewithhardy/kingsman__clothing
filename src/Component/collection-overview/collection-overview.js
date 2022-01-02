import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPrivew } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../collection-preview/CollectionPreview";

import "./collection-overview.scss";

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPrivew,
});

export default connect(mapStateToProps)(CollectionsOverview);
