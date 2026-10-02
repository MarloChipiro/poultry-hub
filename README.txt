HENHOUSE POULTRY HUB — CLEAN STRUCTURE

This package removes the Base64-embedded application modules.
The working modules are now normal readable HTML files:
- index.html — login and workspace shell
- pages/farm-management.html — Farm Management (existing Supabase connection preserved)
- pages/seller.html — Seller workspace
- pages/buyer.html — Buyer marketplace
- js/supabase-config.js — extracted Supabase configuration for the next migration step

IMPORTANT
The current login and seller/buyer catalogue storage remain localStorage in this version so existing behaviour is not broken. Farm Management's existing Supabase connection is preserved exactly.

Deploy the entire folder (or ZIP contents) to Netlify, not index.html alone.
