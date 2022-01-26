export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Flatiron Cyber',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 5000, // default: 3000
    timing: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    'nuxt-clipboard2',
  ],

  // fontawesome
  fontawesome: {
    icons: {
      solid: [
        'faBoxOpen',
        'faCheck',
        'faCheckCircle',
        'faCircleNotch',
        'faClipboardList',
        'faExclamationCircle',
        'faEye',
        'faEyeSlash',
        'faGem',
        'faGift',
        'faShieldAlt',
        'faSignInAlt',
        'faSignOutAlt',
        'faUserPlus',
      ],
      brands: ['faNodeJs', 'faPhp', 'faPython'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_BASE_URL,
  },

  dev: process.env.NODE_ENV !== 'production',

  generate: {
    dir: 'public',
    subFolders: false
  },

  // Auth module configuration:  https://auth.nuxtjs.org/
  auth: {
    redirect: {
      login: '/sign-in',
      logout: '/sign-in',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          type: 'Bearer',
        },
        user: {
          property: 'data.user',
        },
        endpoints: {
          login: { url: '/sign-in', method: 'post' },
          register: { url: '/sign-up', method: 'post' },
          user: { url: '/get-user', method: 'get' },
          logout: false,
        },
      },
    },
  },

  router: {
    middleware: ['auth'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
};
