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
  "onBeforeScript": "onBefore.js",
  "onReadyScript": "onReady.js",
  "scenarios": [
    {
      "label": environment + ": Homepage",
      "url": domain
    },
    {
      "label": environment + ": Homepage with feedback form open",
      "url": domain,
      "clickSelector": ".js-report-a-problem-toggle"
    },
    {
      "label": environment + ": Crown Hosting - Overview",
      "url": domain + "/crown-hosting"
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
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-2/requirements/digital-specialists"
    },
    {
      "label": environment + ": DOS - Find a user research studio",
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-2/requirements/user-research-studios"
    },


    {
      "label": environment + ": G-Cloud - lots",
      "url": domain + "/g-cloud"
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
      "label": environment + ": User - Reset password",
      "url": domain + "/user/reset-password",
    },
    {
      "label": environment + ": User - Reset password (validation for invalid token)",
      "url": domain + "/user/reset-password/1",
    },


    {
      "label": environment + ": Buyer - Account - Dashboard",
      "url": domain + "/buyers",
      "user": "buyer",
    },
    {
      "label": environment + ": Buyer - Account - Create requirement form",
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-2/requirements/digital-specialists/create",
      "user": "buyer",
    },
    {
      "label": environment + ": Buyer - Account - Create requirement form - Validation",
      "url": domain + "/buyers/frameworks/digital-outcomes-and-specialists-2/requirements/digital-specialists/create",
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
      "label": environment + ": Supplier - DUNS number",
      "url": domain + "/suppliers/duns-number",
    },
    {
      "label": environment + ": Supplier - Company summary",
      "url": domain + "/suppliers/company-summary",
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
      "label": environment + ": Admin (Support) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-support",
    },
    {
      "label": environment + ": Admin (Support) - Account - Add buyer domain",
      "url": domain + "/admin/buyers/add-buyer-domains",
      "user": "admin-support",
    },
    {
      "label": environment + ": Admin (Support) - Account - Suppliers starting with 'a'",
      "url": domain + "/admin/suppliers?supplier_name_prefix=a",
      "user": "admin-support",
    },

    {
      "label": environment + ": Admin (Sourcing) - Account - On-Hold DOS2 agreements",
      "url": domain + "/admin/agreements/digital-outcomes-and-specialists-2?status=on-hold",
      "user": "admin-sourcing",
    },

    {
      "label": environment + ": Admin (Category) - Account - dashboard",
      "url": domain + "/admin",
      "user": "admin-category",
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts/casper",
    "html_report": "backstop_data/html_report"
  },
  "report": [],
  "engine": "phantomjs",
  "engineFlags": [],
  "debug": false,
  "debugWindow": false
}
