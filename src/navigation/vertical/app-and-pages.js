export default [
  { heading: 'Orders & Customers' },
  {
    title: 'Orders',
    icon: { icon: 'mdi-calendar-blank-outline' },
    to: 'orders-list'
  },
  {
    title: 'Customers',
    icon: { icon: 'mdi-calendar-blank-outline' },
    to: 'customers-list'
  },

  { heading: 'Shop Configuration' },
  {
    title: 'Catalog',
    icon: { icon: 'mdi-calendar-blank-outline' },
    children: [
      { title: 'Products', to: 'products', icon: { icon: 'mdi-calendar-blank', action: 'read' }, subject: 'Auth' },
      {
        title: 'Categories',
        icon: { icon: 'mdi-file-document-outline' },
        children: [
          { title: 'List', to: 'products-categories-list' },
          { title: 'Product Mapping', to: 'products-mapping'},
          { title: 'Sitemap Generator', to: 'products-sitemap-generator' },
        ],
      },
    ]
  },
  {
    title: 'Business Details',
    icon: { icon: 'mdi-file-document-outline' },
    children: [
      { title: 'Contact Details', to: 'invoice-list', icon: { icon: 'mdi-file-document-outline' }},
      {
        title: 'Pages',
        icon: { icon: 'mdi-file-outline' },
        children: [
          {title: 'About Us', to: {name: 'invoice-preview-id', params: {id: '5036'}}},
          {title: 'Mission & Vision', to: {name: 'invoice-preview-id', params: {id: '5036'}}},
          {title: 'Terms & Conditions', to: {name: 'invoice-preview-id', params: {id: '5036'}}},
          {title: 'Privacy Policy', to: {name: 'invoice-edit-id', params: {id: '5036'}}},
          {title: 'Security Policy', to: 'invoice-add'},
          {title: 'Return Policy', to: 'invoice-add'},
          {title: 'Shipping Conditions', to: 'invoice-add'},
        ],
      },
    ]
  },
  // {
  //   title: 'Invoice',
  //   icon: { icon: 'mdi-file-document-outline' },
  //   children: [
  //     { title: 'List', to: 'invoice-list' },
  //     { title: 'Preview', to: { name: 'invoice-preview-id', params: { id: '5036' } } },
  //     { title: 'Edit', to: { name: 'invoice-edit-id', params: { id: '5036' } } },
  //     { title: 'Add', to: 'invoice-add' },
  //   ],
  // },
  { heading: 'Apps & Pages' },
  {
    title: 'Calendar',
    icon: { icon: 'mdi-calendar-blank-outline' },
    to: 'calendar',
  },
  {
    title: 'Invoice',
    icon: { icon: 'mdi-file-document-outline' },
    children: [
      { title: 'List', to: 'invoice-list' },
      { title: 'Preview', to: { name: 'invoice-preview-id', params: { id: '5036' } } },
      { title: 'Edit', to: { name: 'invoice-edit-id', params: { id: '5036' } } },
      { title: 'Add', to: 'invoice-add' },
    ],
  },
  {
    title: 'User',
    icon: { icon: 'mdi-account-outline' },
    children: [
      { title: 'List', to: 'user-list' },
      { title: 'View', to: { name: 'user-view-id', params: { id: 21 } } },
    ],
  },
  {
    title: 'Pages',
    icon: { icon: 'mdi-file-outline' },
    children: [
      {
        title: 'Authentication',
        children: [
          {
            title: 'Login',
            children: [
              { title: 'Login v1', to: 'pages-authentication-login-v1', target: '_blank' },
              { title: 'Login v2', to: 'pages-authentication-login-v2', target: '_blank' },
            ],
          },
          {
            title: 'Register',
            children: [
              { title: 'Register v1', to: 'pages-authentication-register-v1', target: '_blank' },
              { title: 'Register v2', to: 'pages-authentication-register-v2', target: '_blank' },
            ],
          },
          {
            title: 'Forgot Password',
            children: [
              { title: 'Forgot Password v1', to: 'pages-authentication-forgot-password-v1', target: '_blank' },
              { title: 'Forgot Password v2', to: 'pages-authentication-forgot-password-v2', target: '_blank' },
            ],
          },
          {
            title: 'Reset Password',
            children: [
              { title: 'Reset Password v1', to: 'pages-authentication-reset-password-v1', target: '_blank' },
              { title: 'Reset Password v2', to: 'pages-authentication-reset-password-v2', target: '_blank' },
            ],
          },
        ],
      },
      { title: 'Knowledge Base', to: 'pages-knowledge-base' },
      { title: 'Account Settings', to: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
      { title: 'Pricing', to: 'pages-pricing' },
      { title: 'FAQ', to: 'pages-faq' },
      {
        title: 'Miscellaneous',
        children: [
          { title: 'Coming Soon', to: 'pages-misc-coming-soon', target: '_blank' },
          { title: 'Under Maintenance', to: 'pages-misc-under-maintenance', target: '_blank' },
          { title: 'Page Not Found - 404', to: 'pages-misc-not-found', target: '_blank' },
          { title: 'Not Authorized - 401', to: 'pages-misc-not-authorized', target: '_blank' },
          { title: 'Server Error - 500', to: 'pages-misc-internal-server-error', target: '_blank' },
        ],
      },
    ],
  },
]