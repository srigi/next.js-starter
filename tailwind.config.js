module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  theme: { extend: {} },
  variants: {},
};
