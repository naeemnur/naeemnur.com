---
layout: post
title: Enable/Disable payment gateways for specific users in WooCommerce
date: 2017-05-25
tags: ["Code", "Woocommerce", "WordPress"]
---

In this post I will show you how you can enable or disable payment gateways based on the ID with a simple code snippet. To achieve this, we are going to use the `woocommerce_available_payment_gateways` filter hook.

**Enable/Disable Payment Gateway with specific User ID in WooCommerce**

<pre>
function cod_admin_only( $gateways ) {
  global $current_user;
$user_ID = $current_user->ID; // get current user ID

if ( ! is_user_logged_in() && $user_ID !== 1 ) {
    unset( $gateways['cod'] ); // enable cash on delivery
} else {
unset( \$gateways['paypal'] ); // disable paypal
}

return \$gateways;
}
add_filter( 'woocommerce_available_payment_gateways', 'cod_admin_only' );
</pre>
