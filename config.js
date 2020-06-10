function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

var environment = capitalize(process.env.DM_ENVIRONMENT || 'development')
var domain = process.env.DM_FRONTEND_DOMAIN || 'http://localhost'

module.exports = {
  "id": "backstop_dm",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "height": 768,
      "width": 1024
    },
    {
      "label": "desktop",
      "width": 1366,
      "height": 768
    }
  ],
  "misMatchThreshold": 0,
  "requireSameDimensions": false,
  "onBeforeScript": "onBefore.js",
  "onReadyScript": "onReady.js",
  "scenarios": [
    {
      "label": environment + ": Homepage",
      "url": domain
    },
    {
      "label": environment + ": Crown Hosting - Overview",
      "url": domain + "/crown-hosting"
    },
    {
      "label": environment + ": Privacy Notice",
      "url": domain + "/privacy-notice"
    },
    {
      "label": environment + ": Terms and conditions",
      "url": domain + "/terms-and-conditions"
    },
    {
      "label": environment + ": Cookies",
      "url": domain + "/cookies"
    },
    {
      "label": environment + ": Help",
      "url": domain + "/help"
    },

    {
      "label": environment + ": DOS - Find a specialist",
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-4/requirements/digital-specialists"
    },
    {
      "label": environment + ": DOS - Find a user research studio",
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-4/requirements/user-research-studios"
    },
    {
      "label": environment + ": DOS - Opportunity",
      "url": domain + "/digital-outcomes-and-specialists/opportunities/10116"
    },


    {
      "label": environment + ": G-Cloud - start",
      "url": domain + "/buyers/direct-award/g-cloud/start"
    },
    {
      "label": environment + ": G-Cloud - lots",
      "url": domain + "/buyers/direct-award/g-cloud/choose-lot"
    },
    {
      "label": environment + ": G-Cloud - Cloud hosting search results",
      "url": domain + "/g-cloud/search?lot=cloud-hosting&serviceCategories=container+service"
    },
    {
      "label": environment + ": G-Cloud - Supplier listing",
      "url": domain + "/g-cloud/suppliers"
    },


    {
      "label": environment + ": User - Login page",
      "url": domain + "/user/login",
    },
    {
      "label": environment + ": User - Login page - Validation",
      "url": domain + "/user/login",
      "submitForm": true
    },
    {
      "label": environment + ": User - Reset password",
      "url": domain + "/user/reset-password",
    },
    {
      "label": environment + ": User - Reset password (validation for invalid token)",
      "url": domain + "/user/reset-password/1",
    },
    {
      "label": environment + ": User - Join user research mailing list",
      "url": domain + "/user/notifications/user-research",
      "user": "buyer",
    },
    {
      "label": environment + ": User - Cookie Settings",
      "url": domain + "/user/cookie-settings",
    },


    {
      "label": environment + ": Buyer - Invalid domain error page",
      "url": domain + "/buyers/create",
      "keyPressSelectors": [
        {
          "selector": "#input-email_address",
          "keyPress": "example@example.com",
        },
      ],
      "submitForm": true
    },
    {
      "label": environment + ": Buyer - Account - Dashboard",
      "url": domain + "/buyers",
      "user": "buyer",
    },
    {
      "label": environment + ": Buyer - Account - Create requirement form",
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-4/requirements/digital-specialists/create",
      "user": "buyer",
    },
    {
      "label": environment + ": Buyer - Account - Create requirement form - Validation",
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-4/requirements/digital-specialists/create",
      "user": "buyer",
      "submitForm": true
    },


    {
      "label": environment + ": Briefs - Dashboard",
      "url": domain + "/buyers/requirements/digital-outcomes-and-specialists",
      "user": "buyer"
    },


    {
      "label": environment + ": Supplier - Sign up for framework alerts",
      "url": domain + "/suppliers/mailing-list",
    },
    {
      "label": environment + ": Supplier - Sign up for framework alerts - Validation",
      "url": domain + "/suppliers/mailing-list",
      "submitForm": true
    },
    {
      "label": environment + ": Supplier - Become a supplier",
      "url": domain + "/suppliers/supply",
    },
    {
      "label": environment + ": Supplier - Start",
      "url": domain + "/suppliers/create/start",
    },
    {
      "label": environment + ": Supplier - DUNS number",
      "url": domain + "/suppliers/create/duns-number",
    },
    {
      "label": environment + ": Supplier - Company summary",
      "url": domain + "/suppliers/create/company-summary",
    },
    {
      "label": environment + ": Supplier - Account - Dashboard",
      "url": domain + "/suppliers",
      "user": "supplier",
    },
    {
      "label": environment + ": Supplier - Account - Details",
      "url": domain + "/suppliers/details",
      "user": "supplier",
    },
    {
      "label": environment + ": Supplier - Account - Edit details",
      "url": domain + "/suppliers/what-buyers-will-see/edit",
      "user": "supplier",
    },


    {
      "label": environment + ": Admin (Category) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-category",
    },
    {
      "label": environment + ": Admin (Sourcing) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-sourcing",
    },
    {
      "label": environment + ": Admin (Data controller) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-data-controller",
    },
    {
      "label": environment + ": Admin (Support) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-support",
    },
    {
      "label": environment + ": Admin (Framework manager) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-framework-manager",
    },
    {
      "label": environment + ": Admin (Manager) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-manager",
    },

    {
      "label": environment + ": Admin (Support) - Account - Add buyer domain",
      "url": domain + "/admin/buyers/add-buyer-domains",
      "user": "admin-support",
    },
    {
      "label": environment + ": Admin (Support) - Account - Suppliers containing 'ltd'",
      "url": domain + "/admin/suppliers?supplier_name=ltd",
      "user": "admin-support",
    },

    {
      "label": environment + ": Admin (Sourcing) - Account - On-Hold DOS2 agreements",
      "url": domain + "/admin/agreements/digital-outcomes-and-specialists-3?status=on-hold",
      "user": "admin-sourcing",
    },

    {
      "label": environment + ": Admin - 403",
      "url": domain + "/admin/admin-users",
      "user": "admin-support",
    },
    {
      "label": environment + ": Admin - 404",
      "url": domain + "/admin/404",
    },
    {
      "label": environment + ": Buyer - 404",
      "url": domain + "/404",
    },
    {
      "label": environment + ": Briefs - 404",
      "url": domain + "/buyers/404",
    },
    {
      "label": environment + ": Brief responses - 404",
      "url": domain + "/suppliers/opportunities/404",
    },
    {
      "label": environment + ": Supplier - 404",
      "url": domain + "/suppliers/404",
    },
    {
      "label": environment + ": User - 404",
      "url": domain + "/user/404",
    },
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts/puppeteer",
    "html_report": "backstop_data/html_report"
  },
  "report": [],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
  },
  "debug": false,
  "debugWindow": false
}
