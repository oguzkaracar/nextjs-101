module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled:true,
    content:["./pages/**/*.js"]}, // build aldığımızda sadece pages klasörü içindeki sayfalarda sadece kullanılan tailwindcss stilleri yüklenecek... Böylece sayfa render edildiğinde çok fazla css kodu bulunmayacak...  
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
