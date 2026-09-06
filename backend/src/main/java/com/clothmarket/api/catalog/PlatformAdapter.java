package com.clothmarket.api.catalog;

import java.util.List;

/** Boundary for future authorised retailer/affiliate integrations. */
public interface PlatformAdapter {
    String platform();
    List<ProductSummary> search(String query);
}
